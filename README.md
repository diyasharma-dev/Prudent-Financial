# Prudent Financial Services, Inc. (Prufininc)
### Modern Accounting, Bookkeeping & Corporate Website

A lightweight, high-performance, and fully responsive website designed specifically for **Prudent Financial Services, Inc. (Prufininc)**.

Built with **HTML5, Tailwind CSS, and Modern JavaScript** — engineered to run with zero heavy frameworks (no Laravel/PHP dependencies) and 100% ready for instant deployment on **Cloudflare Workers** or **Cloudflare Pages**.

---

## 🚀 Key Features

* **Complete Multi-Page Architecture**:
  * `index.html` — Homepage featuring Hero, Real-Time Financial KPI dashboard, Core Capabilities, Dual-Shore Model overview, Interactive ROI Calculator, Client Testimonials, and CTAs.
  * `about.html` — About Us, Company Heritage ($250K to $20M SME focus), Mission & Vision, Core Values, and Global Delivery Footprint.
  * `services.html` — In-depth breakdown of all 6 core services (Outsourced Bookkeeping, Financial Analysis, Tax Returns, Computerized Payroll, QuickBooks Consulting, Virtual CFO).
  * `industries.html` — Specialized accounting for E-Commerce, Healthcare, Real Estate, Legal & Professional Services, Tech Startups/SaaS.
  * `how-it-works.html` — The 4-Step Onboarding process, 24/7 overnight delivery workflow, and bank-grade SOC-2 security protocols.
  * `pricing.html` — Transparent pricing tiers (Starter, Growth, Scale), plus comprehensive **In-House vs. Prudent Cost Benchmark** table.
  * `contact.html` — Interactive Consultation Request Form, Forest Hills NY & Hyderabad office cards, click-to-call, click-to-fax, and FAQ accordion.

* **Authentic Company Details**:
  * **USA Headquarters**: 113-25 Queens Blvd, Suite 114, Forest Hills, NY 11375 | Phone: `+1-718-261-4001` | Fax: `+1-718-504-6013`
  * **India Center of Excellence**: Plot # A-32, 2nd Floor, Road # 5, Film Nagar, Jubilee Hills, Hyderabad - 500033 | Phone: `+91-40-23543811` | Fax: `+91-40-66632004`
  * **Email**: `info@prufininc.com`

* **Interactive Elements**:
  * **Live Savings & ROI Calculator**: Computes annual savings based on revenue and monthly transaction volume.
  * **Responsive Mobile Navigation Drawer**: Smooth slide-out menu with overlay on mobile and tablets.
  * **Instant Consultation Modal**: Accessible from every page with validation and simulated confirmation.
  * **Expandable FAQ Accordion**: Instant answers to common SME accounting questions.

* **Cloudflare Workers Ready**:
  * Includes `_worker.js` with clean URL routing, security headers, and an `/api/contact` API endpoint.
  * Includes `wrangler.toml` ready for 1-command deployment via `wrangler deploy` or `wrangler pages deploy`.

---

## 💻 How to Preview Locally

Run the lightweight built-in Node server (zero external dependencies required):

```bash
npm start
# or
node server.js
```

Then open your browser at:
```
http://localhost:3000
```

---

## ☁️ How to Deploy to Cloudflare

### Option A: Cloudflare Pages (Recommended - Fastest & Free)
```bash
npx wrangler pages deploy . --project-name=prufininc
```
*Or simply connect this folder/repo to Cloudflare Pages dashboard with build output set to `.`*

### Option B: Cloudflare Workers
```bash
npx wrangler deploy
```

---

## 📁 File Structure

```
prufininc/
├── index.html              # Homepage
├── about.html              # About Prudent Financial Services
├── services.html           # Exhaustive service breakdowns
├── industries.html         # Specialized industry solutions
├── how-it-works.html       # Onboarding process & 24/7 overnight model
├── pricing.html            # Pricing plans & cost comparison
├── contact.html            # Contact info, offices & consultation form
├── _worker.js              # Cloudflare Worker router & API handler
├── wrangler.toml           # Cloudflare deployment config
├── server.js               # Zero-dependency local development server
├── package.json            # NPM scripts
├── assets/
│   ├── css/
│   │   └── styles.css      # Custom styles, animations, variables
│   ├── js/
│   │   └── main.js         # Mobile menu, calculators, modals, FAQs
└── README.md
```
