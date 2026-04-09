import sqlite3
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, render_template, request, redirect, url_for, flash
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

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
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


@app.route('/services')
def services():
    record_visit()
    return render_template('services.html',
                           visit_count=get_visit_count(),
                           active_page='services')


@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name    = request.form.get('name', '').strip()
        email   = request.form.get('email', '').strip()
        message = request.form.get('message', '').strip()

        if name and email and message:
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


if __name__ == '__main__':
    init_db()
    app.run(debug=True)
