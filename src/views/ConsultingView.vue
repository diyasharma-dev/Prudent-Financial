<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-16 pb-20 bg-gradient-to-b from-emerald-900/5 via-white to-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto space-y-5">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
            Prudent Financial Advisory & Consulting
          </div>
          
          <h1 class="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
            Strategic Business & Financial Consulting for <span class="text-emerald-700">Growing SMEs</span>
          </h1>
          
          <p class="text-slate-600 text-base sm:text-lg leading-relaxed">
            From diagnostic financial analysis and 13-week cash flow modeling to QuickBooks system overhauls and business acquisition due diligence, Prudent equips business owners with the insights needed to maximize profitability and eliminate costly blind spots.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button @click="openConsultationModal" class="px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-lg shadow-emerald-700/20 transition-all flex items-center gap-2">
              <span>Book Free 30-Min Diagnostic</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
            <a href="#consulting-pillars" class="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-sm transition-all flex items-center gap-2">
              <span>Explore Practice Areas</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
            </a>
          </div>

          <div class="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-slate-200/80 mt-8">
            <div class="bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm">
              <div class="text-2xl font-black font-heading text-emerald-700">13-Week</div>
              <div class="text-xs font-medium text-slate-600 mt-1">Rolling Cash Flow Models</div>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm">
              <div class="text-2xl font-black font-heading text-slate-900">Certified</div>
              <div class="text-xs font-medium text-slate-600 mt-1">QuickBooks ProAdvisors</div>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm">
              <div class="text-2xl font-black font-heading text-emerald-700">M&A Ready</div>
              <div class="text-xs font-medium text-slate-600 mt-1">Due Diligence & Valuation</div>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm">
              <div class="text-2xl font-black font-heading text-slate-900">Virtual CFO</div>
              <div class="text-xs font-medium text-slate-600 mt-1">Senior Advisory on Demand</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Practice Areas Grid -->
    <section id="consulting-pillars" class="py-16 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-bold text-emerald-700 uppercase tracking-wider">Practice Areas</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
            Tailored Consulting Solutions for Every Business Stage
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            Our senior accountants and financial consultants bring decades of real-world experience guiding companies from $250K to $20M through key strategic decisions.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Pillar 1 -->
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-emerald-500 transition-all">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-2xl">🔍</div>
              <div>
                <h3 class="font-heading font-bold text-lg text-slate-900">Financial Analysis & Managerial Review</h3>
                <p class="text-xs text-emerald-700 font-semibold">Transform raw numbers into actionable profit drivers</p>
              </div>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              Our experienced staff assists management in evaluating underlying performance metrics to uncover hidden costs and capitalize on highest-margin lines.
            </p>
            <ul class="space-y-2 text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-200">
              <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Gross Margin, EBITDA, and Unit Economics Benchmarking</li>
              <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Overhead & Operating Expense (OpEx) Efficiency Audits</li>
              <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Monthly Managerial KPI Scorecards & Executive Dashboards</li>
            </ul>
          </div>

          <!-- Pillar 2 -->
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-emerald-500 transition-all">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-2xl">💰</div>
              <div>
                <h3 class="font-heading font-bold text-lg text-slate-900">Cash Flow & Budgeting Analysis</h3>
                <p class="text-xs text-emerald-700 font-semibold">Prevent liquidity shortfalls before they occur</p>
              </div>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              Profitable businesses often fail due to sudden cash flow crunches. We help you project accurate financing needs and monitor sources and uses of cash.
            </p>
            <ul class="space-y-2 text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-200">
              <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> 13-Week Rolling Cash Flow & Liquidity Forecasting</li>
              <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Annual Operating Budget (AOP) Creation & Variance Alerts</li>
              <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Working Capital & Inventory Cash Cycle Optimization</li>
            </ul>
          </div>

          <!-- Pillar 3 -->
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-emerald-500 transition-all">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-2xl">💻</div>
              <div>
                <h3 class="font-heading font-bold text-lg text-slate-900">QuickBooks & Accounting Software Consulting</h3>
                <p class="text-xs text-emerald-700 font-semibold">Clean architecture, automation, and error-free setups</p>
              </div>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              Stop fighting with corrupted files or disorganized charts of accounts. We optimize QuickBooks, Xero, and Sage so your system runs effortlessly.
            </p>
            <ul class="space-y-2 text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-200">
              <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> QuickBooks Online / Desktop Setup, Migration, and Cleanup</li>
              <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Custom Chart of Accounts Tailored to Your Industry</li>
              <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> 3rd-Party Integrations: Bill.com, Gusto, Stripe, Shopify</li>
            </ul>
          </div>

          <!-- Pillar 4 -->
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-emerald-500 transition-all">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-2xl">🤝</div>
              <div>
                <h3 class="font-heading font-bold text-lg text-slate-900">Buying & Selling a Business (M&A Advisory)</h3>
                <p class="text-xs text-emerald-700 font-semibold">Maximize enterprise value and verify every dollar</p>
              </div>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              Structuring an acquisition or disposition requires meticulous financial due diligence to protect your capital and minimize tax consequences.
            </p>
            <ul class="space-y-2 text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-200">
              <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Buy-Side Financial Due Diligence & Quality of Earnings</li>
              <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Sell-Side Book Readiness & Valuation Multiple Enhancement</li>
              <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Asset vs. Stock Purchase Tax Structuring Guidance</li>
            </ul>
          </div>

        </div>

      </div>
    </section>

    <!-- FAQ Accordion -->
    <section class="py-16 bg-slate-50 border-b border-slate-200">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center space-y-3">
          <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
            Frequently Asked Questions About Consulting
          </h2>
          <p class="text-slate-600 text-sm">Clear answers about how we partner with your business.</p>
        </div>

        <div class="space-y-4">
          <div v-for="(faq, idx) in faqs" :key="idx" class="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
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
    <section class="py-20 gradient-cta text-white text-center space-y-6">
      <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white max-w-2xl mx-auto">
        Ready to Uncover Profitability Bottlenecks in Your Business?
      </h2>
      <p class="text-slate-200 text-sm sm:text-base max-w-xl mx-auto">
        Book a complimentary 30-minute consultation with a senior Prudent consultant.
      </p>
      <div class="pt-2 flex justify-center gap-4">
        <button @click="openConsultationModal" class="px-8 py-3.5 rounded-xl bg-white text-emerald-950 font-bold text-sm shadow-xl hover:bg-emerald-50 transition-all">
          Book Your Free Advisory Session
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useApp } from '@/composables/useApp';

const { openConsultationModal } = useApp();

const openFaqIndex = ref(0);

function toggleFaq(idx) {
  openFaqIndex.value = openFaqIndex.value === idx ? -1 : idx;
}

const faqs = [
  {
    q: 'Can you work alongside our existing in-house bookkeeper or tax CPA?',
    a: 'Absolutely. We frequently collaborate with internal staff or external tax CPAs. We provide the higher-level analysis, software optimization, and cash forecasting that internal staff may not have time or specialized expertise to handle.'
  },
  {
    q: 'How are consulting engagements structured and billed?',
    a: 'We offer both project-based fixed fee engagements (e.g., QuickBooks cleanup, financial diagnostic, M&A due diligence) and ongoing monthly retainers (e.g., Virtual CFO, monthly budgeting & variance review). Pricing is always agreed upon in advance with zero hidden surprises.'
  },
  {
    q: 'Can you clean up messy historical QuickBooks files that are years behind?',
    a: 'Yes. Catch-up and cleanup is one of our most requested specialties. We have salvaged accounts that were 2-5 years out of balance, reconciling thousands of transactions and delivering clean, CPA-ready files for past-due tax returns or financing requests.'
  }
];
</script>
