# Prudent Financial Services, Inc. (Prufininc)
### Production Accounting, 247Bookkeeper™ & 247eCabinet™ Corporate Platform

A lightweight, enterprise-ready, fully responsive website built for **Prudent Financial Services, Inc. (Prufininc)** — mirroring the exact business aim and proprietary services of `https://www.prufininc.com/`.

Engineered with **HTML5, Tailwind CSS, and Modern JavaScript** — with zero heavy server runtimes (no Laravel or PHP needed) and 100% prepared for edge deployment on **Cloudflare Workers** or **Cloudflare Pages**.

---

## 🚀 Complete Page Architecture

1. **`index.html` — Homepage**
   - Live KPI Financial Dashboard (Net Margin, Cash Flow Runway, Nightly Reconciliations).
   - Direct quote of the founding mission from the original Prufininc website: *"Welcome to Prudent! Prudent Financial Services, Inc. (Prufininc) provides complete outsourced bookkeeping, financial analysis, taxation and support services to SME's..."*
   - Interactive In-House vs Outsourced ROI Savings Benchmark Calculator.
   - 1-Click **"Print / Save Official Proposal PDF"** export for executive review.
   - Core capabilities, software integrations (QuickBooks ProAdvisor, Xero, Gusto, NetSuite), client testimonials, and dual-shore model.

2. **`247bookkeeper.html` — Dedicated 247Bookkeeper™ Product Page**
   - Prufininc's signature continuous bookkeeping subscription (starting at $299/mo).
   - Document transmission workflows: Direct scanning, account email forwarding, or digital fax.
   - Nightly transaction entry, bank reconciliations, and US CPA managerial review.
   - Tiered plans: **Solo** ($299/mo), **Business** ($599/mo), and **Premium** ($999/mo).

3. **`247ecabinet.html` — Dedicated 247eCabinet™ Document Vault Portal**
   - Secure web-based paperless office and document management system.
   - 256-bit bank-grade encryption and disaster protection against loss, fires, and water damage.
   - **LIVE WORKING Document Vault Simulator**: Upload invoices, bank statements, or tax files; filter by category; preview securely; or manage files stored in `localStorage`.
   - Free inclusion with 247Bookkeeper plans or $29.95/mo standalone.

4. **`services.html` — All 6 Core Accounting Services**
   - Detailed deliverables and task breakdowns for Bookkeeping, Financial Analysis & Managerial Reporting, Corporate/Sales/Property Taxation, Computerized Payroll Processing, QuickBooks System Consulting, and Virtual CFO Advisory.

5. **`pricing.html` — Transparent Pricing & Comparative Cost Analysis**
   - Predictable flat-rate monthly retainers with zero setup fees or long-term lock-in.
   - Full **In-House Bookkeeper ($74,500/yr) vs. Prudent ($7,188/yr)** breakdown table detailing hidden employee expenses (benefits, 401k, payroll tax, software, sick leave).
   - Printable proposal export.

6. **`industries.html` — Sector-Specific Accounting Solutions**
   - Domain expertise for E-Commerce, Healthcare & Medical Clinics, Real Estate, Legal & Professional Services, SaaS/Startups, Construction, and Hospitality.

7. **`how-it-works.html` — Process & Overnight Turnaround**
   - Step-by-step 4-day onboarding timeline and the 24-hour time-zone processing cycle (New York daytime -> Hyderabad nighttime operations -> Ready at 8 AM EST).
   - SOC-2 and data confidentiality protocols.

8. **`about.html` — Heritage, Mission & Dual-Shore Footprint**
   - Company background serving SMEs ($250K to $20M gross revenue) for over 20 years.
   - Forest Hills, NY Headquarters and Hyderabad Center of Excellence.

9. **`contact.html` — Interactive Consultation & Direct Offices**
   - Interactive consultation request form with automated reference ticket generation (`PRU-XXXXXX`).
   - Click-to-call phone lines and click-to-fax.
   - Direct Google Maps links for Forest Hills, NY (`113-25 Queens Blvd, Suite 114, Forest Hills, NY 11375`).
   - Expandable FAQ accordion addressing client questions.

---

## 🏢 Verified Corporate Contact Details

* **USA Headquarters**:  
  `113-25 Queens Blvd, Suite 114, Forest Hills, NY 11375, USA`  
  **Tel**: `+1-718-261-4001` | **Fax**: `+1-718-504-6013`
* **India Center of Excellence**:  
  `Plot # A-32, 2nd Floor, Opp: Film Nagar Co-Op Society, Road # 5, Film Nagar, Jubilee Hills, Hyderabad - 500033, India`  
  **Tel**: `+91-40-23543811` | **Fax**: `+91-40-66632004`
* **Email**: `info@prufininc.com`

---

## 💻 Local Testing & Preview

Start the included zero-dependency Node server:

```powershell
npm start
# or
node server.js
```

Then visit:
```
http://localhost:3000
```

---

## ☁️ Cloudflare Deployment (Worker / Pages)

### Option 1: Cloudflare Pages (Free, Global CDN, 1-Click)
```powershell
npx wrangler pages deploy . --project-name=prufininc
```

### Option 2: Cloudflare Workers
```powershell
npx wrangler deploy
```

---

## 📁 Repository Structure

```
prufininc/
├── index.html              # Homepage with KPI Dashboard & Calculator
├── 247bookkeeper.html      # 247Bookkeeper™ Service & Plans
├── 247ecabinet.html        # 247eCabinet™ Live Document Vault
├── services.html           # 6 Core Accounting Services Breakdown
├── pricing.html            # Pricing & In-House Cost Comparison
├── industries.html         # Specialized Industry Solutions
├── how-it-works.html       # 4-Step Onboarding & Overnight Model
├── about.html              # Heritage, Values & Leadership
├── contact.html            # Contact Form, Map & Office Details
├── _worker.js              # Cloudflare Worker router & API handler
├── wrangler.toml           # Cloudflare deployment config
├── server.js               # Zero-dependency local server
├── package.json            # NPM scripts
├── assets/
│   ├── css/
│   │   └── styles.css      # Custom styles, animations, variables
│   ├── js/
│   │   └── main.js         # Mobile drawer, 247eCabinet vault, calculator
└── README.md
```
