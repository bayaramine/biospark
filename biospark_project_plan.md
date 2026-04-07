# BioSpark Website — Project Plan
**Mohamed Amine BAYAR, PhD**
CS50x Final Project

---

## Project Overview

A professional trilingual (EN / FR / AR) consulting website for BioSpark, built with Flask. The site presents services in biostatistics, clinical trials, data science, and AI/ML. It must be fully tracked with Git and hosted on GitHub.

---

## Starting Point

A single `biospark.html` file already exists with:
- Good section structure: Hero, About, Services, Contact, Footer
- i18n system in JavaScript (EN + FR translations done)
- Scroll reveal animations
- Language switcher (EN/FR — needs AR added)
- Dark theme (`#050d1a` background) — **needs to be replaced** with a lighter, more professional design
- No Flask structure yet
- No Arabic language support
- No functional contact form (just a mailto link)
- No Git/GitHub setup

---

## Design Direction

**Replace the dark theme** with a clean, light, professional design appropriate for a scientific consulting website. Suggested direction:
- White or very light grey background (#f8f9fa or #ffffff)
- Navy or deep blue as primary accent (trust, science, expertise)
- Gold as secondary accent (kept from original — works well)
- Clean, readable typography — keep Cormorant Garamond for headings, replace DM Mono with something more approachable for body text
- Subtle shadows and borders instead of glowing cyan effects
- Remove the grid background overlay

**Key UX improvements needed:**
- Mobile hamburger menu (nav links currently hidden on mobile with no alternative)
- The "Send a message" button links to `#contact` instead of opening a real form — needs a real contact form
- Add placeholder/fallback for when JavaScript is disabled
- Improve contrast ratios for accessibility

---

## Flask Project Structure

```
biospark/
├── app.py
├── finance.db (not needed — no database required)
├── requirements.txt
├── static/
│   ├── styles.css
│   ├── favicon.ico
│   └── images/
│       └── (profile photo if available)
├── templates/
│   ├── layout.html        ← base template with nav, footer, lang switcher
│   └── index.html         ← main page content
└── translations/
    ├── en.json
    ├── fr.json
    └── ar.json
```

---

## Multilingual Implementation (EN / FR / AR)

### Adding Arabic
Arabic requires **RTL (right-to-left)** layout support. Key things to handle:

1. Add `AR` button to the language switcher in the nav
2. In CSS, add `[lang="ar"]` rules:
   ```css
   [lang="ar"] { direction: rtl; text-align: right; }
   [lang="ar"] .section-label::after { margin-left: 0; margin-right: 1rem; }
   [lang="ar"] nav { flex-direction: row-reverse; }
   ```
3. Use an Arabic-compatible font — add **Noto Sans Arabic** from Google Fonts
4. Add Arabic translations to the `translations` object in JavaScript (or move to JSON files)
5. When switching to Arabic, set `document.documentElement.setAttribute('dir', 'rtl')`
6. When switching back to EN/FR, set `document.documentElement.setAttribute('dir', 'ltr')`

### Arabic content to translate (key sections):
- Navigation: عن / خدمات / اتصل
- Hero tagline: "تحويل البيانات السريرية إلى رؤى قابلة للتنفيذ"
- About section paragraphs
- All 4 service titles and descriptions
- Contact section

---

## Git & GitHub Setup

### Step 1 — Initialize repo locally
```bash
cd biospark/
git init
git add .
git commit -m "Initial commit: BioSpark Flask website"
```

### Step 2 — Create .gitignore
```
__pycache__/
*.pyc
.env
flask_session/
*.db
.DS_Store
```

### Step 3 — Create GitHub repo and push
```bash
gh repo create biospark --public --source=. --remote=origin --push
```
Or manually on GitHub, then:
```bash
git remote add origin https://github.com/YOUR_USERNAME/biospark.git
git branch -M main
git push -u origin main
```

### Branching strategy
- `main` — stable, deployable version
- `dev` — active development
- Feature branches for each major change (e.g., `feature/arabic-support`, `feature/contact-form`)

### Commit discipline
- Commit after each feature is complete and tested
- Use clear commit messages: `"Add Arabic language support with RTL layout"`
- Never commit sensitive data (.env files, API keys)

---

## Flask app.py

Simple Flask app — no database needed. Just renders the template:

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")
```

Optionally add a contact form route:
```python
@app.route("/contact", methods=["POST"])
def contact():
    # handle contact form submission
    # send email or store message
    pass
```

---

## Contact Form

Replace the current `mailto:` button with a real HTML form:

```html
<form action="/contact" method="post">
    <input type="text" name="name" placeholder="Your name" required>
    <input type="email" name="email" placeholder="Your email" required>
    <textarea name="message" placeholder="Your message" required></textarea>
    <button type="submit">Send Message</button>
</form>
```

On the Flask side, use Python's `smtplib` or the `flask-mail` library to send an email notification when the form is submitted.

---

## Sections to Keep & Improve

| Section | Status | Changes needed |
|---------|--------|----------------|
| Nav | Keep | Add AR button, fix mobile menu |
| Hero | Keep | Lighter background, adjust colors |
| About | Keep | Update copy, keep stats cards |
| Services | Keep | Keep 4 cards, update hover effects for light theme |
| Contact | Improve | Add real contact form |
| Footer | Keep | Minor styling update |

---

## Implementation Order

1. **Git setup** — init repo, create .gitignore, first commit
2. **Flask structure** — create app.py, move HTML into templates/layout.html + index.html
3. **Design overhaul** — replace dark theme with light professional theme
4. **Arabic support** — add AR translations + RTL CSS
5. **Contact form** — build form HTML + Flask POST handler
6. **Mobile nav** — add hamburger menu for small screens
7. **Testing** — test all three languages, all screen sizes
8. **GitHub push** — push to GitHub, verify everything is clean
9. **CS50 submission** — record demo video, submit

---

## CS50 Final Project Requirements Checklist

- [ ] More complex than previous CS50 problem sets ✓ (multilingual Flask app)
- [ ] Uses Flask ✓
- [ ] Uses HTML/CSS ✓
- [ ] Uses JavaScript (i18n, animations) ✓
- [ ] 2-minute demo video required for submission
- [ ] README.md required explaining the project
- [ ] Submitted via CS50 submit system

---

## Notes for Claude Code

- The existing `biospark.html` is the reference for content and structure — use it as the source of truth for text, sections, and JavaScript logic
- The i18n system (data-i18n attributes + setLang() function) is well designed — keep it, just extend it for Arabic
- The scroll reveal (IntersectionObserver) works well — keep it
- The animations (fadeUp, float) work well — keep them
- **Priority #1**: Fix the dark background — this is the most important visual change
- **Priority #2**: Arabic + RTL support
- **Priority #3**: Real contact form
