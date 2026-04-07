import sqlite3
from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'biospark-dev-key-change-in-production'

DATABASE = 'biospark.db'


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


@app.route('/')
def index():
    db = get_db()
    db.execute('INSERT INTO visits (visited_at) VALUES (CURRENT_TIMESTAMP)')
    db.commit()
    visit_count = db.execute('SELECT COUNT(*) AS count FROM visits').fetchone()['count']
    db.close()
    return render_template('index.html', visit_count=visit_count)


@app.route('/contact', methods=['POST'])
def contact():
    name    = request.form.get('name', '').strip()
    email   = request.form.get('email', '').strip()
    message = request.form.get('message', '').strip()

    if name and email and message:
        db = get_db()
        db.execute(
            'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
            (name, email, message)
        )
        db.commit()
        db.close()
        flash('success')
    else:
        flash('error')

    return redirect(url_for('index') + '#contact')


if __name__ == '__main__':
    init_db()
    app.run(debug=True)
