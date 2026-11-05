<template>
  <div>
    <!-- Hero Section with Visual Split -->
    <section class="relative pt-16 pb-20 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white border-b border-slate-200 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
              <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
              Prudent Outsourced Accounting Solutions
            </div>
            
            <h1 class="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
              Complete Outsourced Bookkeeping &amp; E-Accounting for <span class="gradient-text-emerald">Growing SMEs</span>
            </h1>
            
            <p class="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Prufininc provides businesses generating $250,000 to $20 Million annually with high-precision transaction processing, audit-ready financial statements, and continuous 24/7 turnaround at up to 50% lower overhead than in-house staffing.
            </p>

            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a href="#savings-calculator" class="px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-lg shadow-emerald-700/20 transition-all flex items-center gap-2">
                <span>Calculate Outsourcing Savings</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
              </a>
              <button @click="openConsultationModal" class="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-sm transition-all flex items-center gap-2">
                <span>Schedule Discovery Call</span>
              </button>
            </div>

            <div class="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-slate-200/80">
              <div class="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-sm">
                <div class="text-2xl font-black font-heading text-emerald-700">50-60%</div>
                <div class="text-xs font-medium text-slate-600 mt-1">Overhead Savings</div>
              </div>
              <div class="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-sm">
                <div class="text-2xl font-black font-heading text-slate-900">24/7</div>
                <div class="text-xs font-medium text-slate-600 mt-1">Dual-Shore Speed</div>
              </div>
              <div class="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-sm">
                <div class="text-2xl font-black font-heading text-emerald-700">100%</div>
                <div class="text-xs font-medium text-slate-600 mt-1">Audit-Ready GAAP</div>
              </div>
              <div class="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-sm">
                <div class="text-2xl font-black font-heading text-slate-900">256-Bit</div>
                <div class="text-xs font-medium text-slate-600 mt-1">Bank-Grade Vault</div>
              </div>
            </div>
          </div>

          <!-- Hero Right Image Card -->
          <div class="lg:col-span-5 relative">
            <div class="relative mx-auto max-w-md lg:max-w-none">
              <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white group">
                <img src="/images/accountant-desk.jpg" alt="Outsourced Accounting Precision" class="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div class="absolute bottom-4 left-5 right-5 text-white">
                  <div class="text-xs text-emerald-300 font-bold uppercase tracking-wider">Dual-Shore Workflow</div>
                  <div class="text-base font-bold font-heading">Reconciled Daily While You Sleep</div>
                  <p class="text-xs text-slate-300 mt-1">No vacation gaps, no payroll taxes, 100% CPA reviewed.</p>
                </div>
              </div>

              <!-- Floating badge -->
              <div class="hidden sm:flex absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <div>
                  <div class="text-xs font-bold text-slate-900">Zero Payroll Tax</div>
                  <div class="text-[11px] text-emerald-700 font-semibold">Flat Monthly Predictability</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Section 1: In-House vs Outsourced Comparison -->
    <section class="py-16 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
            Why Modern SMEs Are Replacing In-House Bookkeeping
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            Hiring full-time accounting employees introduces payroll taxes, benefits, vacation downtime, and turnover risks. Prudent's outsourced model gives you a seasoned team for a fraction of the cost.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- In-House Drawbacks -->
          <div class="bg-rose-50/50 border border-rose-200 rounded-2xl p-6 sm:p-8 space-y-5">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">✕</div>
              <div>
                <h3 class="font-heading font-bold text-lg text-slate-900">Traditional In-House Hire</h3>
                <p class="text-xs text-rose-600 font-semibold">$65,000 - $95,000+ Annual Burden</p>
              </div>
            </div>
            <ul class="space-y-3 text-sm text-slate-700">
              <li class="flex items-start gap-2.5">
                <span class="text-rose-500 font-bold mt-0.5">•</span>
                <span><strong>Costly Overhead:</strong> Base salary plus 20-30% in health benefits, FICA payroll taxes, 401(k), and paid time off.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-rose-500 font-bold mt-0.5">•</span>
                <span><strong>Single Point of Failure:</strong> If your bookkeeper is sick, on leave, or resigns, financial recordkeeping grinds to an immediate halt.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-rose-500 font-bold mt-0.5">•</span>
                <span><strong>Limited Expertise:</strong> One person rarely excels equally at daily ledger data entry, tax compliance, and executive cash forecasting.</span>
              </li>
            </ul>
          </div>

          <!-- Prudent Outsourced Solution -->
          <div class="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">✓</div>
              <div>
                <h3 class="font-heading font-bold text-lg text-slate-900">Prudent Outsourced Accounting</h3>
                <p class="text-xs text-emerald-700 font-semibold">Flat, Predictable Monthly Fee (Save 50%+)</p>
              </div>
            </div>
            <ul class="space-y-3 text-sm text-slate-700">
              <li class="flex items-start gap-2.5">
                <span class="text-emerald-600 font-bold mt-0.5">✓</span>
                <span><strong>Pure Operational Efficiency:</strong> Zero payroll taxes, zero worker's comp, zero benefits, and no recruiting fees.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-emerald-600 font-bold mt-0.5">✓</span>
                <span><strong>Zero Interruption:</strong> Multi-tiered cross-trained team ensures your books are reconciled every single business day.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-emerald-600 font-bold mt-0.5">✓</span>
                <span><strong>US-CPA Oversight:</strong> Every financial statement is reviewed and signed off by senior accounting supervisors.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: End-to-End Outsourced Functions -->
    <section class="py-16 bg-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-bold text-emerald-700 uppercase tracking-wider">Turnkey Delivery</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
            Complete Outsourced Accounting Workflow
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            From transaction receipt to tax filing, our dual-shore team manages your complete back-office finance department.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:border-emerald-500 transition-all">
            <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">📑</div>
            <h3 class="font-heading font-bold text-slate-900 text-base">General Ledger &amp; Transaction Processing</h3>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Daily classification and posting of all sales, expenses, and journal entries. Keep your general ledger perfectly balanced without backlog.
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:border-emerald-500 transition-all">
            <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">💳</div>
            <h3 class="font-heading font-bold text-slate-900 text-base">Accounts Payable (AP) Management</h3>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Full bill receipt, digital capture, purchase order 3-way matching, duplicate payment prevention, and payment scheduling for owner approval.
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:border-emerald-500 transition-all">
            <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">📈</div>
            <h3 class="font-heading font-bold text-slate-900 text-base">Accounts Receivable (AR) &amp; Cash Application</h3>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Timely invoice generation, merchant payment reconciliation, AR aging reports, customer statements, and dispute management to speed collections.
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:border-emerald-500 transition-all">
            <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">🏦</div>
            <h3 class="font-heading font-bold text-slate-900 text-base">Bank, Card &amp; Merchant Reconciliation</h3>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Continuous monthly and weekly reconciliation of checking, savings, lines of credit, Stripe, PayPal, Square, and corporate credit cards.
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:border-emerald-500 transition-all">
            <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">👥</div>
            <h3 class="font-heading font-bold text-slate-900 text-base">Payroll Processing &amp; Tax Filings</h3>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Flawless payroll calculations, direct deposit execution, statutory tax withholdings, quarterly 941 filings, and annual W-2 / 1099 distribution.
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:border-emerald-500 transition-all">
            <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">📊</div>
            <h3 class="font-heading font-bold text-slate-900 text-base">Managerial Reporting &amp; Statements</h3>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Delivered promptly by the 5th of every month: Balance Sheet, Profit &amp; Loss (P&amp;L), Cash Flow Statement, and executive variance commentary.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Interactive Savings Calculator -->
    <section id="savings-calculator" class="py-16 bg-slate-100 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center max-w-2xl mx-auto space-y-3">
          <span class="text-xs font-bold text-emerald-700 uppercase tracking-wider">ROI &amp; Cost Reduction</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
            Calculate Your Annual Outsourcing Savings
          </h2>
          <p class="text-slate-600 text-sm">
            Adjust the sliders below to your business revenue and monthly transaction volume to see your projected savings with Prudent Financial Services.
          </p>
        </div>

        <SavingsCalculator />
      </div>
    </section>

    <!-- Section 4: Outsourcing FAQ Accordion -->
    <section class="py-16 bg-white border-b border-slate-200">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center space-y-3">
          <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
            Frequently Asked Questions About Outsourcing
          </h2>
          <p class="text-slate-600 text-sm">
            Everything you need to know about our service agreements, data security, and communication.
          </p>
        </div>

        <div class="space-y-4">
          <div v-for="(faq, idx) in faqs" :key="idx" class="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <button @click="toggleFaq(idx)" class="w-full p-4 sm:p-5 text-left font-heading font-bold text-slate-900 text-sm sm:text-base flex justify-between items-center">
              <span>{{ faq.q }}</span>
              <svg class="w-5 h-5 text-slate-400 transform transition-transform" :class="openFaqIndex === idx ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div v-show="openFaqIndex === idx" class="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="py-20 text-white text-center space-y-6 relative overflow-hidden" style="background: linear-gradient(135deg, #022c22 0%, #064e3b 60%, #0f172a 100%) !important;">
      <img src="/images/ny-skyline.jpg" alt="New York Corporate" class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20" />
      <div class="relative z-10 max-w-2xl mx-auto px-4 space-y-4">
        <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white">
          Ready to Cut Bookkeeping Costs by 50% While Getting Audit-Ready Books?
        </h2>
        <p class="text-slate-200 text-sm sm:text-base">
          Schedule a complimentary 30-minute consultation with a senior Prudent accountant.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <button @click="openConsultationModal" class="px-8 py-3.5 rounded-xl bg-white text-emerald-950 font-bold text-sm shadow-xl hover:bg-emerald-50 transition-all">
            Book Your Free Diagnostic
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useApp } from '@/composables/useApp';
import SavingsCalculator from '@/components/SavingsCalculator.vue';

const { openConsultationModal } = useApp();

const openFaqIndex = ref(0);

function toggleFaq(idx) {
  openFaqIndex.value = openFaqIndex.value === idx ? -1 : idx;
}

const faqs = [
  {
    q: 'Will I lose visibility or control over my company\'s finances?',
    a: 'Not at all. In fact, most clients report having far greater visibility than with in-house bookkeepers. You retain 100% control of your bank accounts, signature authority, and payment approvals. We prepare the entries and payment schedules, but only you authorize releases.'
  },
  {
    q: 'What accounting software platforms do you support?',
    a: 'We are certified in QuickBooks Online, QuickBooks Desktop, Xero, Sage 50/100, and NetSuite. If you are using legacy desktop systems or spreadsheets, we can also migrate your data seamlessly to the cloud.'
  },
  {
    q: 'Are there any long-term contracts or lock-in periods?',
    a: 'No. Our outsourcing agreements operate on a straightforward month-to-month basis with transparent, flat-rate pricing. You are never locked into multi-year contracts, and all your financial data remains 100% your property at all times.'
  },
  {
    q: 'How do we communicate with our Prudent accounting team?',
    a: 'You have a direct line to your New York Account Manager via phone (+1 718-261-4001), dedicated email, scheduled video reviews, and our 247eCabinet™ portal messaging system.'
  }
];
</script>