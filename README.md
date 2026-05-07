# Kiran Business Forms Print Pvt Ltd — Website

Official corporate website for **Kiran Business Forms Print Pvt Ltd**, a Navi Mumbai-based printing and flexible packaging company established in 1993. ISO 9001:2015 certified, solar-powered, specialising in variable data printing, automated mailroom services and FMCG laminates / pouches.

## Live

- **Production:** https://www.kiranbusiness.in
- **Netlify preview:** https://kiran-ayush.netlify.app

## Tech stack

- Static HTML5 (no build step)
- [Tailwind CSS](https://tailwindcss.com/) via CDN
- [Font Awesome 6](https://fontawesome.com/) icons
- Inter font (Google Fonts)
- Vanilla JS (IntersectionObserver for scroll reveal, counter animations, mobile menu)
- [Formspree](https://formspree.io/) for the contact form
- Hosted on [Netlify](https://www.netlify.com/) with pretty URLs enabled

## Pages

| Page | Path |
|------|------|
| Home | `/` |
| Variable Data Printing | `/departments` |
| Flexible Packaging Solutions | `/products` |
| Infrastructure | `/infrastructure` |
| Industries | `/industries` |
| Vision & Mission | `/vision-mission` |
| Contact | `/contact` |

## Project structure

```
.
├── index.html              # Home
├── departments.html        # Variable Data Printing
├── products.html           # Flexible Packaging
├── infrastructure.html     # Plant & machinery
├── industries.html         # Sectors served
├── vision-mission.html     # Vision / Mission
├── contact.html            # Enquiry form + map
├── js/
│   └── components.js       # Shared navbar + footer
├── images/                 # Logos & photos
├── netlify.toml            # Netlify config (pretty URLs)
└── README.md
```

The shared navbar and footer are injected at runtime by `js/components.js` into `<div id="navbar-placeholder">` / `<div id="footer-placeholder">` placeholders on every page.

## Local development

The site is fully static — no install or build step is required.

```bash
# Clone
git clone https://github.com/trex-ayush/kiran.git
cd kiran

# Serve locally (any static server works)
npx serve .
# or
python -m http.server 8000
```

Then open `http://localhost:3000` (or whichever port your server reports).

> Opening the `.html` files directly with `file://` will also work, but internal links use clean URLs (`/contact` instead of `/contact.html`) which only resolve when served by Netlify or a server with URL rewriting.

## Deployment

The site auto-deploys to Netlify on push to `main`. Configuration lives in [`netlify.toml`](netlify.toml):

```toml
[build]
  publish = "."

[build.processing.html]
  pretty_urls = true
```

`pretty_urls = true` is what allows `<a href="/contact">` to resolve to `contact.html`. If you migrate to a host that doesn't strip `.html` automatically (GitHub Pages, plain S3, shared hosting), you'll need to either restore `.html` in every link inside `js/components.js` or restructure each page into its own folder.

Hosts that handle pretty URLs out of the box: **Netlify, Cloudflare Pages, Vercel.**

## Contact form setup

The contact form in [`contact.html`](contact.html) uses Formspree. To wire it to a real inbox:

1. Sign up at [formspree.io](https://formspree.io) (free tier is sufficient)
2. Create a new form, point delivery to `karan@kiranbusiness.in`
3. Replace `YOUR_FORM_ID` in the form `action` attribute with your actual Formspree form ID:

   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" ...>
   ```

The form submits via `fetch` (AJAX), shows an inline success state on a 200 response, and never redirects the user away from the page.

## Company info

- **Company:** Kiran Business Forms Print Pvt Ltd
- **CIN:** U22219MH1993PTC073547
- **GST:** 27AAACK3274BIZW
- **Address:** W-165 E, TTC Industrial Area, MIDC Pawane, Navi Mumbai 400 709
- **Phone:** 022-20872939
- **Email:** karan@kiranbusiness.in

## Credits

Designed & developed by [Ayush Kumar Singh](https://www.linkedin.com/in/ayush-kumar-singh-677388250/).
