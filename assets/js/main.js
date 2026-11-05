// Prudent Financial Services, Inc. (Prufininc) - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initStickyHeader();
  initSavingsCalculator();
  initFaqAccordion();
  initConsultationModal();
  initTabs();
  initCurrentYear();
  initLeadForms();
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

  // Close when clicking nav links in mobile menu
  mobileDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
}

// Sticky Header Blur
function initStickyHeader() {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-sm');
    } else {
      header.classList.remove('shadow-sm');
    }
  });
}

// Interactive Cost Savings Calculator
function initSavingsCalculator() {
  const revenueSlider = document.getElementById('calcRevenue');
  const txSlider = document.getElementById('calcTx');
  const staffSlider = document.getElementById('calcStaff');

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
    const staffCount = staffSlider ? parseInt(staffSlider.value) : 1;

    // Display updates
    if (revDisplay) revDisplay.innerText = `$${revenueK.toLocaleString()}K`;
    if (txDisplay) txDisplay.innerText = `${txCount.toLocaleString()} tx/mo`;

    // Benchmark in-house bookkeeping cost:
    // Avg US in-house full-time bookkeeper salary ($55k/yr) + taxes/benefits/overhead/software ($18k/yr) = ~$73,000/yr (~$6,080/mo) per staff
    // Part-time equivalent for smaller scale:
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
    
    // Add transaction volume factor
    const txFactor = Math.floor(txCount / 200) * 350;
    const totalInHouse = baseInHouseMonthly + txFactor;

    // Prudent Hybrid Model Outsourced Cost:
    // Fraction of US overhead thanks to our dual-shore model (Forest Hills, NY oversight + Hyderabad operations)
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
  }

  revenueSlider.addEventListener('input', calculate);
  txSlider.addEventListener('input', calculate);
  staffSlider?.addEventListener('input', calculate);

  calculate();
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

      // Close all others
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

// Consultation Modal
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
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
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

// Form Submission Simulation with Feedback
function initLeadForms() {
  const forms = document.querySelectorAll('form[data-lead-form="true"]');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing Consultation Request...
        `;
      }

      setTimeout(() => {
        // Success state
        form.innerHTML = `
          <div class="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl">
            <div class="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h4 class="text-2xl font-bold text-slate-900 mb-2 font-heading">Thank You! Request Received</h4>
            <p class="text-slate-600 max-w-md mx-auto mb-6">
              A senior accountant from <strong>Prudent Financial Services, Inc.</strong> will contact you within 2 business hours to review your financial requirements.
            </p>
            <div class="inline-flex items-center gap-2 text-sm text-emerald-800 bg-white px-4 py-2 rounded-lg border border-emerald-200 shadow-sm">
              <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span>Need immediate assistance? Call <strong>+1 (718) 261-4001</strong></span>
            </div>
          </div>
        `;
      }, 1200);
    });
  });
}
