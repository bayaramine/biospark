import sqlite3
import smtplib
import time
from collections import defaultdict
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, render_template, request, redirect, url_for, flash, send_from_directory
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY', 'biospark-dev-key-local')

DATABASE = 'biospark.db'

# Gmail Configuration
GMAIL_ADDRESS = os.getenv('GMAIL_ADDRESS')
GMAIL_APP_PASSWORD = os.getenv('GMAIL_APP_PASSWORD')
RECIPIENT_EMAIL = os.getenv('RECIPIENT_EMAIL')

# Rate limiting: max 3 submissions per IP per hour
_rate_limit = defaultdict(list)
RATE_LIMIT_MAX = 3
RATE_LIMIT_WINDOW = 3600  # seconds

# Spam keyword filter (case-insensitive)
SPAM_KEYWORDS = [
    '1st page', 'first page', 'ranking on google', 'seo', 'search engine optimization',
    'free proposal', 'free seo', 'backlink', 'rank your website', 'rank your site',
    'google ranking', 'page ranking', 'digital marketing', 'lead generation',
    'toll free', 'wa.me', 'whatsapp', 'crypto', 'bitcoin', 'investment opportunity',
    'make money', 'passive income', 'work from home', 'click here', 'limited offer',
    'act now', 'congratulations you', 'you have been selected',
]


def is_spam(message, name, email):
    """Return True if the submission looks like spam."""
    combined = (message + ' ' + name + ' ' + email).lower()
    return any(kw in combined for kw in SPAM_KEYWORDS)


def is_rate_limited(ip):
    """Return True if this IP has exceeded the submission limit."""
    now = time.time()
    # Keep only timestamps within the window
    _rate_limit[ip] = [t for t in _rate_limit[ip] if now - t < RATE_LIMIT_WINDOW]
    if len(_rate_limit[ip]) >= RATE_LIMIT_MAX:
        return True
    _rate_limit[ip].append(now)
    return False


def get_db():
    db = sqlite3.connect(DATABASE)
    db.row_factory = sqlite3.Row
    return db


def init_db():
    db = get_db()
    db.execute('''
        CREATE TABLE IF NOT EXISTS contacts (
            id        INTEGER PRIMARY KEY AUTOINCREMENT,
            name      TEXT NOT NULL,
            email     TEXT NOT NULL,
            message   TEXT NOT NULL,
            submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    db.execute('''
        CREATE TABLE IF NOT EXISTS visits (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            visited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    db.commit()
    db.close()


def get_visit_count():
    db = get_db()
    count = db.execute('SELECT COUNT(*) AS count FROM visits').fetchone()['count']
    db.close()
    return count


def record_visit():
    db = get_db()
    db.execute('INSERT INTO visits (visited_at) VALUES (CURRENT_TIMESTAMP)')
    db.commit()
    db.close()


def send_email(name, email, message):
    """Send contact form message to Gmail"""
    try:
        msg = MIMEMultipart()
        msg['From'] = GMAIL_ADDRESS
        msg['To'] = RECIPIENT_EMAIL
        msg['Subject'] = f'New Contact Form Submission from {name}'

        body = f"""
New contact form submission from BioSpark website:

Name: {name}
Email: {email}
Message:
{message}

---
Reply to: {email}
        """

        msg.attach(MIMEText(body, 'plain'))

        with smtplib.SMTP('smtp.gmail.com', 587, timeout=10) as server:
            server.ehlo()
            server.starttls()
            server.login(GMAIL_ADDRESS, GMAIL_APP_PASSWORD)
            server.send_message(msg)

        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False


@app.route('/')
def index():
    record_visit()
    return render_template('index.html',
                           visit_count=get_visit_count(),
                           active_page='home')


@app.route('/about')
def about():
    record_visit()
    return render_template('about.html',
                           visit_count=get_visit_count(),
                           active_page='about')


@app.route('/services')
def services():
    record_visit()
    return render_template('services.html',
                           visit_count=get_visit_count(),
                           active_page='services')


@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # Honeypot check — bots fill the hidden 'website' field, humans don't
        honeypot = request.form.get('website', '')
        if honeypot:
            # Silent drop: show success to the bot, do nothing
            flash('success')
            return redirect(url_for('contact'))

        name    = request.form.get('name', '').strip()
        email   = request.form.get('email', '').strip()
        message = request.form.get('message', '').strip()

        if name and email and message:
            ip = request.headers.get('X-Forwarded-For', request.remote_addr).split(',')[0].strip()

            # Rate limit check
            if is_rate_limited(ip):
                print(f"Rate limit hit from {ip}")
                flash('success')  # silent drop
                return redirect(url_for('contact'))

            # Spam keyword check
            if is_spam(message, name, email):
                print(f"Spam detected from {email}: {message[:80]}")
                flash('success')  # silent drop
                return redirect(url_for('contact'))

            # Save to database
            db = get_db()
            db.execute(
                'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
                (name, email, message)
            )
            db.commit()
            db.close()

            # Send email to Gmail
            send_email(name, email, message)
            flash('success')
        else:
            flash('error')

        return redirect(url_for('contact'))

    record_visit()
    return render_template('contact.html',
                           visit_count=get_visit_count(),
                           active_page='contact')


@app.route('/cv')
def download_cv():
    """Redirect to CV PDF hosted on GitHub"""
    return redirect('https://raw.githubusercontent.com/bayaramine/cv-biospark/cv/biospark/Main/CV.pdf')


@app.route('/robots.txt')
def robots():
    return send_from_directory(app.static_folder, 'robots.txt')


@app.route('/sitemap.xml')
def sitemap():
    return send_from_directory(app.static_folder, 'sitemap.xml')


if __name__ == '__main__':
    init_db()
    app.run(debug=True)
