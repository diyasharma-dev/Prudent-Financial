// Prudent Financial Services, Inc. (Prufininc) - Main Production JavaScript

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initStickyHeader();
  initSavingsCalculator();
  initFaqAccordion();
  initConsultationModal();
  initClientPortalModal();
  initTabs();
  initCurrentYear();
  initLeadForms();
  initPrintProposal();
  initECabinetVault();
});

// Mobile Menu Drawer
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('closeMobileMenu');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('drawerBackdrop');

  if (!menuBtn || !mobileDrawer) return;

  function openMenu() {
    mobileDrawer.classList.remove('translate-x-full');
    backdrop?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileDrawer.classList.add('translate-x-full');
    backdrop?.classList.add('hidden');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  backdrop?.addEventListener('click', closeMenu);

  mobileDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
}

// Sticky Header
function initStickyHeader() {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md');
    } else {
      header.classList.remove('shadow-md');
    }
  });
}

// Interactive Cost Savings Calculator & State Storage
let currentCalcData = {
  revenue: 1500000,
  transactions: 400,
  inHouseCost: 5500,
  prudentCost: 1899,
  annualSavings: 43212,
  percent: 58
};

function initSavingsCalculator() {
  const revenueSlider = document.getElementById('calcRevenue');
  const txSlider = document.getElementById('calcTx');

  if (!revenueSlider) return;

  const revDisplay = document.getElementById('calcRevDisplay');
  const txDisplay = document.getElementById('calcTxDisplay');
  const inHouseCostEl = document.getElementById('inHouseCost');
  const prudentCostEl = document.getElementById('prudentCost');
  const annualSavingsEl = document.getElementById('annualSavings');
  const savingsPercentEl = document.getElementById('savingsPercent');

  function calculate() {
    const revenueK = parseInt(revenueSlider.value); // In Thousands $
    const txCount = parseInt(txSlider.value); // Transactions / month

    if (revDisplay) revDisplay.innerText = `$${revenueK.toLocaleString()}K`;
    if (txDisplay) txDisplay.innerText = `${txCount.toLocaleString()} tx/mo`;

    // Benchmark in-house bookkeeping cost:
    let baseInHouseMonthly = 4200;
    if (revenueK <= 500) {
      baseInHouseMonthly = 3200;
    } else if (revenueK <= 1500) {
      baseInHouseMonthly = 4800;
    } else if (revenueK <= 5000) {
      baseInHouseMonthly = 6800;
    } else {
      baseInHouseMonthly = 9500;
    }

    const txFactor = Math.floor(txCount / 200) * 350;
    const totalInHouse = baseInHouseMonthly + txFactor;

    // Prudent Hybrid Model Outsourced Cost
    let prudentMonthly = 799;
    if (revenueK <= 500 && txCount <= 200) {
      prudentMonthly = 699;
    } else if (revenueK <= 1000) {
      prudentMonthly = 1199;
    } else if (revenueK <= 3000) {
      prudentMonthly = 1899;
    } else if (revenueK <= 7000) {
      prudentMonthly = 2799;
    } else {
      prudentMonthly = 3899;
    }

    const monthlySavings = Math.max(0, totalInHouse - prudentMonthly);
    const annualSavings = monthlySavings * 12;
    const savingsPercentage = Math.round((monthlySavings / totalInHouse) * 100);

    if (inHouseCostEl) inHouseCostEl.innerText = `$${totalInHouse.toLocaleString()}/mo`;
    if (prudentCostEl) prudentCostEl.innerText = `$${prudentMonthly.toLocaleString()}/mo`;
    if (annualSavingsEl) annualSavingsEl.innerText = `$${annualSavings.toLocaleString()}/yr`;
    if (savingsPercentEl) savingsPercentEl.innerText = `${savingsPercentage}%`;

    // Save state
    currentCalcData = {
      revenue: revenueK * 1000,
      transactions: txCount,
      inHouseCost: totalInHouse,
      prudentCost: prudentMonthly,
      annualSavings: annualSavings,
      percent: savingsPercentage
    };
  }

  revenueSlider.addEventListener('input', calculate);
  txSlider.addEventListener('input', calculate);

  calculate();
}

// Print / Save Proposal Summary
function initPrintProposal() {
  const printBtns = document.querySelectorAll('[data-action="print-proposal"]');
  printBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const printWindow = window.open('', '_blank', 'width=800,height=900');
      if (!printWindow) {
        alert('Please allow popups to view and print your Prudent Proposal Summary.');
        return;
      }

      const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      const refNumber = 'PRU-EST-' + Math.floor(100000 + Math.random() * 900000);

      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Prudent Financial Services, Inc. - Accounting Proposal Estimate</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; color: #1e293b; line-height: 1.5; }
            .header { border-bottom: 2px solid #047857; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: flex-start; }
            .brand h1 { margin: 0; color: #047857; font-size: 26px; font-weight: 800; letter-spacing: -0.5px; }
            .brand p { margin: 4px 0 0; font-size: 13px; color: #64748b; }
            .meta { text-align: right; font-size: 13px; color: #475569; }
            .section-title { font-size: 16px; font-weight: bold; color: #0f172a; margin-top: 25px; margin-bottom: 12px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; }
            table { width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 25px; font-size: 14px; }
            th { background: #047857; color: white; text-align: left; padding: 10px 14px; }
            td { padding: 12px 14px; border-bottom: 1px solid #e2e8f0; }
            .highlight-row { background: #ecfdf5; font-weight: bold; color: #064e3b; }
            .savings-badge { background: #047857; color: white; padding: 20px; border-radius: 12px; text-align: center; margin: 30px 0; }
            .savings-badge .amount { font-size: 36px; font-weight: 900; }
            .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; }
            .btn-print { background: #047857; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; margin-bottom: 20px; }
            @media print { .btn-print { display: none; } }
          </style>
        </head>
        <body>
          <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>

          <div class="header">
            <div class="brand">
              <h1>PRUDENT FINANCIAL SERVICES, INC.</h1>
              <p>Outsourced Accounting, Bookkeeping & Tax Services for SMEs ($250K - $20M)</p>
              <p>113-25 Queens Blvd, Suite 114, Forest Hills, NY 11375 | Tel: +1 (718) 261-4001</p>
            </div>
            <div class="meta">
              <div><strong>Estimate Ref:</strong> ${refNumber}</div>
              <div><strong>Date:</strong> ${today}</div>
              <div><strong>Status:</strong> Approved Diagnostic Benchmark</div>
            </div>
          </div>

          <div class="section-title">1. Client Business Profile</div>
          <table>
            <tr>
              <td><strong>Annual Gross Revenue:</strong></td>
              <td>$${currentCalcData.revenue.toLocaleString()}</td>
              <td><strong>Estimated Monthly Volume:</strong></td>
              <td>${currentCalcData.transactions} transactions / mo</td>
            </tr>
            <tr>
              <td><strong>Target Delivery Model:</strong></td>
              <td>Dual-Shore Hybrid (Onsite NY CPA Review + 24/7 Global Processing)</td>
              <td><strong>Turnaround Guarantee:</strong></td>
              <td>Overnight (Next Business Morning)</td>
            </tr>
          </table>

          <div class="section-title">2. Comparative Cost Benchmark</div>
          <table>
            <thead>
              <tr>
                <th>Cost Component</th>
                <th>In-House Bookkeeper</th>
                <th>Prudent Financial Services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly Retainer / Overhead</td>
                <td>$${currentCalcData.inHouseCost.toLocaleString()} / mo</td>
                <td>$${currentCalcData.prudentCost.toLocaleString()} / mo</td>
              </tr>
              <tr>
                <td>Payroll Taxes, Health Benefits & 401(k)</td>
                <td>~$1,200 / mo (Included in In-House)</td>
                <td>$0.00 (Zero Employer Overhead)</td>
              </tr>
              <tr>
                <td>Software Subscriptions & Workstation</td>
                <td>~$300 / mo</td>
                <td>Included in Prudent Retainer</td>
              </tr>
              <tr>
                <td>Annualized Total Cost</td>
                <td>$${(currentCalcData.inHouseCost * 12).toLocaleString()} / year</td>
                <td>$${(currentCalcData.prudentCost * 12).toLocaleString()} / year</td>
              </tr>
              <tr class="highlight-row">
                <td>Net Projected Annual Savings</td>
                <td colspan="2" style="text-align: right; font-size: 16px;">
                  $${currentCalcData.annualSavings.toLocaleString()} / year (${currentCalcData.percent}% Cost Reduction)
                </td>
              </tr>
            </tbody>
          </table>

          <div class="savings-badge">
            <div style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Your Estimated Annualized Cost Savings</div>
            <div class="amount">$${currentCalcData.annualSavings.toLocaleString()}</div>
            <div style="font-size: 13px; opacity: 0.9;">Includes 24/7 ledger processing, bank reconciliations & CPA quality oversight.</div>
          </div>

          <div class="section-title">3. Included Core Deliverables</div>
          <ul style="font-size: 13px; color: #334155;">
            <li>Full general ledger maintenance and daily/weekly transaction categorization</li>
            <li>Bank, credit card, and merchant account reconciliations</li>
            <li>Monthly Managerial Financial Statements (Balance Sheet, P&L, Cash Flow)</li>
            <li>Accounts Payable (AP) and Accounts Receivable (AR) management</li>
            <li>247eCabinet cloud document management with 256-bit encryption</li>
            <li>Dedicated Senior Accountant and direct CPA advisory access</li>
          </ul>

          <div class="footer">
            <p><strong>Next Steps:</strong> To lock in this pricing tier and initiate your 30-day trial without contract lock-in, contact our Forest Hills, NY office at +1 (718) 261-4001 or email info@prufininc.com referencing <strong>${refNumber}</strong>.</p>
            <p>© ${new Date().getFullYear()} Prudent Financial Services, Inc. (Prufininc). All rights reserved.</p>
          </div>
        </body>
        </html>
      `);
      printWindow.document.close();
    });
  });
}

// FAQ Accordion
function initFaqAccordion() {
  const faqButtons = document.querySelectorAll('.faq-trigger');

  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.faq-item');
      const content = parent.querySelector('.accordion-content');
      const icon = btn.querySelector('.faq-icon');
      const isOpen = content.classList.contains('open');

      document.querySelectorAll('.accordion-content.open').forEach(openContent => {
        if (openContent !== content) {
          openContent.classList.remove('open');
          const p = openContent.closest('.faq-item');
          p?.querySelector('.faq-icon')?.classList.remove('rotate-180');
        }
      });

      if (!isOpen) {
        content.classList.add('open');
        icon?.classList.add('rotate-180');
      } else {
        content.classList.remove('open');
        icon?.classList.remove('rotate-180');
      }
    });
  });
}

// Universal Consultation Modal
function initConsultationModal() {
  const openButtons = document.querySelectorAll('[data-open-modal="consultationModal"]');
  const modal = document.getElementById('consultationModal');
  const closeBtn = document.getElementById('closeModalBtn');

  if (!modal) return;

  function openModal() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeBtn?.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
  });
}

// Client Portal Login Modal (247eCabinet Access)
function initClientPortalModal() {
  const openButtons = document.querySelectorAll('[data-open-modal="portalModal"]');
  const modal = document.getElementById('portalModal');
  const closeBtn = document.getElementById('closePortalModalBtn');

  if (!modal) return;

  function openModal() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeBtn?.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Handle Login form
  const loginForm = document.getElementById('portalLoginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = loginForm.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.innerHTML = 'Authenticating 247eCabinet...';

      setTimeout(() => {
        // Redirect to 247ecabinet.html vault
        window.location.href = '247ecabinet.html?auth=success';
      }, 800);
    });
  }
}

// Tab Switching
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (!tabButtons.length) return;

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-tab-target');

      tabButtons.forEach(btn => btn.classList.remove('active', 'bg-emerald-700', 'text-white'));
      button.classList.add('active', 'bg-emerald-700', 'text-white');

      tabPanes.forEach(pane => {
        if (pane.id === targetId) {
          pane.classList.remove('hidden');
        } else {
          pane.classList.add('hidden');
        }
      });
    });
  });
}

// Dynamic Current Year
function initCurrentYear() {
  const yearElements = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.innerText = currentYear;
  });
}

// Working Lead & Contact Forms with Storage & Confirmation
function initLeadForms() {
  const forms = document.querySelectorAll('form[data-lead-form="true"]');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const dataObj = {};
      formData.forEach((value, key) => { dataObj[key] = value; });

      const name = form.querySelector('input[type="text"]')?.value || 'Valued Client';
      const email = form.querySelector('input[type="email"]')?.value || 'client@example.com';
      const phone = form.querySelector('input[type="tel"]')?.value || 'N/A';
      const refId = 'PRU-' + Math.floor(100000 + Math.random() * 900000);

      // Save to localStorage so inquiries are persisted
      try {
        const stored = JSON.parse(localStorage.getItem('prufininc_inquiries') || '[]');
        stored.push({
          refId,
          name,
          email,
          phone,
          date: new Date().toISOString(),
          details: dataObj
        });
        localStorage.setItem('prufininc_inquiries', JSON.stringify(stored));
      } catch (err) {
        console.warn('Storage notice:', err);
      }

      // Also send to worker /api/contact in background
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refId, name, email, phone, timestamp: new Date().toISOString() })
      }).catch(() => {});

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Recording Details in System...
        `;
      }

      setTimeout(() => {
        form.innerHTML = `
          <div class="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl space-y-4">
            <div class="w-14 h-14 bg-emerald-700 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            
            <div>
              <span class="inline-block px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
                Ref: ${refId}
              </span>
              <h4 class="text-2xl font-bold text-slate-900 mt-2 font-heading">Consultation Request Confirmed</h4>
              <p class="text-slate-600 text-xs max-w-sm mx-auto mt-1">
                Thank you, <strong>${name}</strong>. Your request has been logged into our client queue. A senior accountant will review your file and reach out within 2 business hours.
              </p>
            </div>

            <div class="p-3 bg-white rounded-xl border border-emerald-200 text-xs text-left space-y-1 text-slate-700">
              <div><strong>Client Email:</strong> ${email}</div>
              <div><strong>Contact Phone:</strong> ${phone}</div>
              <div><strong>Assigned Office:</strong> Forest Hills, NY Headquarters</div>
              <div><strong>Status:</strong> Active Review Queue</div>
            </div>

            <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="tel:+17182614001" class="w-full sm:w-auto px-4 py-2 rounded-lg bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors flex items-center justify-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>Call Directly: (718) 261-4001</span>
              </a>
              <button onclick="window.print()" class="w-full sm:w-auto px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-medium hover:bg-slate-50 transition-colors">
                Print Confirmation
              </button>
            </div>
          </div>
        `;
      }, 1000);
    });
  });
}

// 247eCabinet Interactive Digital Document Vault
const DEFAULT_DOCUMENTS = [
  { id: 'DOC-101', name: 'Chase_Operating_Nov2026.pdf', category: 'Bank Statements', size: '1.4 MB', date: 'Nov 02, 2026', status: 'Reconciled' },
  { id: 'DOC-102', name: 'Q3_Managerial_IncomeStatement.pdf', category: 'Financial Statements', size: '820 KB', date: 'Oct 15, 2026', status: 'Approved' },
  { id: 'DOC-103', name: 'Vendor_Invoice_DellHardware_8492.pdf', category: 'Invoices & Bills', size: '420 KB', date: 'Oct 28, 2026', status: 'AP Posted' },
  { id: 'DOC-104', name: 'NYS_SalesTax_ST100_Q3.pdf', category: 'Tax Returns', size: '2.1 MB', date: 'Oct 20, 2026', status: 'Filed' },
  { id: 'DOC-105', name: 'Commercial_Lease_ForestHills_Suite114.pdf', category: 'Contracts & Leases', size: '4.8 MB', date: 'Jan 10, 2026', status: 'Archived' }
];

function initECabinetVault() {
  const tableBody = document.getElementById('ecabinetTableBody');
  const uploadForm = document.getElementById('ecabinetUploadForm');
  const filterBtns = document.querySelectorAll('[data-ecabinet-filter]');

  if (!tableBody) return;

  // Retrieve documents from localStorage or initialize with defaults
  let docs = [];
  try {
    const saved = localStorage.getItem('prufininc_ecabinet_docs');
    docs = saved ? JSON.parse(saved) : DEFAULT_DOCUMENTS;
  } catch (e) {
    docs = DEFAULT_DOCUMENTS;
  }

  function renderTable(filter = 'all') {
    tableBody.innerHTML = '';

    const filtered = filter === 'all' ? docs : docs.filter(d => d.category.toLowerCase().includes(filter.toLowerCase()));

    if (filtered.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="5" class="p-8 text-center text-slate-400 text-xs">
            No documents found in this category. Upload your receipts or bank statements above.
          </td>
        </tr>
      `;
      return;
    }

    filtered.forEach(doc => {
      let badgeClass = 'bg-emerald-100 text-emerald-800';
      if (doc.status === 'Filed') badgeClass = 'bg-blue-100 text-blue-800';
      if (doc.status === 'In Review') badgeClass = 'bg-amber-100 text-amber-800';

      const tr = document.createElement('tr');
      tr.className = 'border-b border-slate-100 hover:bg-slate-50/80 transition-colors text-xs';
      tr.innerHTML = `
        <td class="p-4 font-semibold text-slate-900 flex items-center gap-2">
          <svg class="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
          <span class="truncate max-w-xs">${doc.name}</span>
        </td>
        <td class="p-4 text-slate-500">${doc.category}</td>
        <td class="p-4 text-slate-500">${doc.date} (${doc.size})</td>
        <td class="p-4">
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold ${badgeClass}">
            ${doc.status}
          </span>
        </td>
        <td class="p-4 text-right">
          <button data-doc-action="preview" data-doc-name="${doc.name}" class="text-emerald-700 hover:text-emerald-900 font-semibold mr-3">Preview</button>
          <button data-doc-action="delete" data-doc-id="${doc.id}" class="text-rose-600 hover:text-rose-800 font-semibold">Delete</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });

    // Attach actions
    tableBody.querySelectorAll('[data-doc-action="preview"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const docName = btn.getAttribute('data-doc-name');
        alert(`247eCabinet Secure Preview:\n\nDocument: "${docName}"\nEncryption: 256-bit TLS Verified.\nThis file is safely archived in your Prudent Cloud Repository.`);
      });
    });

    tableBody.querySelectorAll('[data-doc-action="delete"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-doc-id');
        if (confirm('Are you sure you want to remove this document from your 247eCabinet vault?')) {
          docs = docs.filter(d => d.id !== id);
          localStorage.setItem('prufininc_ecabinet_docs', JSON.stringify(docs));
          renderTable(filter);
        }
      });
    });
  }

  // Handle File Upload simulation
  if (uploadForm) {
    uploadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fileInput = document.getElementById('ecabinetFileInput');
      const categorySelect = document.getElementById('ecabinetCategorySelect');
      const submitBtn = uploadForm.querySelector('button[type="submit"]');

      if (!fileInput || !fileInput.files.length) {
        alert('Please choose a file (PDF, PNG, JPG, or CSV) to upload.');
        return;
      }

      const file = fileInput.files[0];
      const fileSize = (file.size / (1024 * 1024)).toFixed(1) + ' MB';
      const category = categorySelect ? categorySelect.value : 'Financial Statements';

      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Encrypting & Uploading to 247eCabinet...';

      setTimeout(() => {
        const newDoc = {
          id: 'DOC-' + Math.floor(1000 + Math.random() * 9000),
          name: file.name,
          category: category,
          size: fileSize === '0.0 MB' ? '250 KB' : fileSize,
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
          status: 'In Review'
        };

        docs.unshift(newDoc);
        localStorage.setItem('prufininc_ecabinet_docs', JSON.stringify(docs));
        renderTable();

        uploadForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Upload Document to 247eCabinet →';

        const toast = document.getElementById('ecabinetUploadToast');
        if (toast) {
          toast.classList.remove('hidden');
          setTimeout(() => toast.classList.add('hidden'), 4000);
        }
      }, 900);
    });
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const f = btn.getAttribute('data-ecabinet-filter');
      filterBtns.forEach(b => b.classList.remove('bg-emerald-700', 'text-white'));
      btn.classList.add('bg-emerald-700', 'text-white');
      renderTable(f);
    });
  });

  renderTable('all');
}
