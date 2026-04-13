# BioSpark — Clinical Consulting Website

#### Video Demo: <URL HERE>

#### Description:

BioSpark is a trilingual, multipage professional consulting website built with Python and Flask, designed to present the clinical biostatistics and AI/ML consulting services of Mohamed Amine Bayar, PhD. The project was developed as the CS50x final project and is deployed live on PythonAnywhere. It supports three languages (English, French, Arabic), includes a fully functional contact form backed by a SQLite database and Gmail integration, and implements a clean, responsive design with dark mode support and right-to-left (RTL) layout for Arabic.

---

## Project Overview

The site positions BioSpark as a boutique consulting firm at the intersection of clinical trial methodology and artificial intelligence. The target audience includes biotech companies, pharmaceutical firms, and healthcare startups looking for senior biostatistical expertise. The website is designed to reflect the precision and rigor of the field it represents — minimal, typographically strong, and content-driven.

The live site is accessible at: [bayaramine.pythonanywhere.com](https://bayaramine.pythonanywhere.com)

---

## File Structure and Description

### `app.py`
The core Flask application. It defines five routes:

- `/` — Home page, rendering `index.html`
- `/about` — About page with profile, work history, and CV download button
- `/services` — Services page describing the two consulting tiers
- `/contact` — Contact page (GET renders the form, POST handles submission)
- `/cv` — Serves the CV PDF as a file download using Flask's `send_file`

The app uses SQLite to persist two types of data: contact form submissions (name, email, message, timestamp) and page visit counts. On every page load, a visit is recorded and the total count is passed to the template for display in the footer. The `init_db()` function creates both tables if they do not exist, and is called at startup via `if __name__ == '__main__'`.

Email notifications are handled through Gmail's SMTP SSL interface. When a contact form is submitted successfully, the app sends an email to the site owner using credentials stored in a `.env` file, which is excluded from version control via `.gitignore`.

### `templates/layout.html`
The base Jinja2 template inherited by all pages. It includes the `<head>` with Google Fonts (Cormorant Garamond, DM Mono, Outfit, Noto Sans Arabic), the navigation bar with language switcher, the footer with visit counter, and script tags. The `active_page` variable passed from each route is used to apply the `nav-active` CSS class to the current navigation link.

### `templates/index.html`
The home page. It contains the hero section with BioSpark branding (name, tagline, and a styled quote), followed by two narrative sections. Section 1 ("The gap no one is talking about") makes the case for clinical expertise in healthcare AI. Section 2 ("Two worlds. One bridge.") positions BioSpark at the intersection of biostatistics and machine learning, and includes a hyperlink to the contact page.

### `templates/about.html`
The about page. It presents a side-by-side layout with text on the left (name, subtitle, 13-year career summary) and a profile photo on the right. Below that are four statistics cards (years of experience, trial phases, publications, citations), a work history section covering Johnson & Johnson, Novartis, and Gustave Roussy, and a "What sets me apart" section. At the bottom, four buttons allow visitors to download the full CV or visit LinkedIn, GitHub, and Google Scholar profiles.

### `templates/services.html`
The services page. It describes two consulting tiers through service cards with custom SVG icons, bullet-point descriptions, and technology tags. Tier 1 (Strategic Advisory) covers clinical AI design, trial methodology, and regulatory strategy. Tier 2 (Operational Support) covers embedded biostatistician work, SAP authorship, and CDISC-compliant deliverables. A "Discuss Your Project" button links to the contact page.

### `templates/contact.html`
The contact page. It uses a two-column layout: the left column displays the business address and a clickable phone number; the right column contains the contact form with name, email, and message fields. On POST, the form data is saved to the database and an email is sent. Flash messages provide user feedback for success or error.

### `static/styles.css`
The main stylesheet. It uses CSS custom properties (`--accent`, `--bg`, `--text`, etc.) for theming, making it straightforward to adapt the color scheme. Dark mode is handled entirely through a `@media (prefers-color-scheme: dark)` block that overrides the root variables — no JavaScript required. RTL Arabic layout is handled with `[lang="ar"]` attribute selectors. Scroll-reveal animations use CSS `opacity` and `transform`, triggered by JavaScript's `IntersectionObserver`. The `.btn-outline` class defines the unified button style used across all pages: white background, navy border and text at rest, inverted (navy fill, white text) on hover.

### `static/main.js`
The JavaScript file responsible for the entire internationalization (i18n) system. It contains a `translations` object with three nested language objects (EN, FR, AR), each holding key-value pairs for every piece of user-facing text on the site. The `applyLang(lang)` function iterates over all DOM elements with `data-i18n` attributes and replaces their `innerHTML` with the corresponding translation. Placeholders in form inputs are handled separately via `data-i18n-placeholder`. The selected language is persisted in `localStorage` so it survives page navigation. The file also initialises the `IntersectionObserver` for scroll-reveal animations and manages the active state of the language switcher buttons.

### `biospark.db`
The SQLite database file. It contains two tables: `contacts` (storing form submissions) and `visits` (recording each page view). This file is excluded from public access but committed to the repository for portability.

### `CV.pdf` and `static/images/portrait.jpg`
The downloadable CV served at the `/cv` route, and the profile photo displayed on the about page.

### `requirements.txt`
Lists the two Python dependencies: `Flask>=3.0.0` and `python-dotenv>=1.0.0`.

---

## Design Choices

**Multilingual without a library.** Rather than importing a third-party i18n library, the translations are implemented in plain JavaScript. This keeps the dependency count at zero on the front end, gives full control over how translations are applied (including HTML content like links inside translated strings), and keeps the codebase self-contained and easy to audit.

**SQLite over a hosted database.** For a personal consulting site, SQLite is entirely sufficient. It requires no external service, no credentials beyond the file path, and it is trivial to migrate. Contact form submissions are low volume by nature. PostgreSQL would have been overengineering for this use case.

**Multipage Flask over a single-page application.** Separate routes (`/`, `/about`, `/services`, `/contact`) make the URL structure meaningful and bookmarkable. It also keeps each template focused and readable. A single-page JavaScript-rendered app would have added unnecessary complexity without a meaningful user experience benefit for a content-driven site.

**CSS variables for theming.** Using `--accent`, `--bg`, `--card`, etc. as root-level variables means the entire color scheme can be changed in one place. Dark mode is a simple variable override in a media query — no class toggling, no JavaScript, no flash of incorrect theme on load.

**RTL Arabic support without a separate stylesheet.** Arabic layout is handled purely through `[lang="ar"]` CSS selectors applied to the `<html>` element when the language is switched. This avoids duplicating the stylesheet and keeps the language-specific overrides explicit and co-located with the rest of the styles.
