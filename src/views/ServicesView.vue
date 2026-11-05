<template>
  <div>
    <!-- Header -->
    <section class="py-16 lg:py-24 bg-gradient-to-b from-emerald-900 to-navy-950 text-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          Complete Accounting Solutions
        </span>
        <h1 class="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
          Comprehensive Services For High-Growth SMEs
        </h1>
        <p class="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          From everyday general ledger transaction processing to executive managerial statements and tax filings, Prudent provides end-to-end back-office peace of mind.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div v-for="(service, idx) in serviceList" :key="idx" class="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-2xl">
                {{ service.icon }}
              </div>
              <h3 class="font-heading font-bold text-xl text-slate-900">{{ service.title }}</h3>
              <p class="text-sm text-slate-600 leading-relaxed">{{ service.desc }}</p>
              <ul class="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-200">
                <li v-for="(item, i) in service.bullets" :key="i" class="flex items-center gap-2">
                  <span class="text-emerald-600 font-bold">✓</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
            <div class="pt-4">
              <button @click="openConsultationModal" class="text-xs font-bold text-emerald-700 hover:underline">
                Request Service Scope →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 gradient-cta text-white text-center space-y-6">
      <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white max-w-2xl mx-auto">
        Need a Tailored Accounting Scope for Your Business?
      </h2>
      <p class="text-slate-200 text-sm sm:text-base max-w-xl mx-auto">
        We customize every contract to match your monthly transaction volume and software stack.
      </p>
      <div class="pt-2 flex justify-center gap-4">
        <button @click="openConsultationModal" class="px-8 py-3.5 rounded-xl bg-white text-emerald-950 font-bold text-sm shadow-xl hover:bg-emerald-50 transition-all">
          Get Custom Scope & Proposal
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useApp } from '@/composables/useApp';

const { openConsultationModal } = useApp();

const serviceList = [
  {
    icon: '📑',
    title: 'Bookkeeping & Record Keeping',
    desc: 'Daily and weekly journal entry processing, ledger balancing, and accurate classification of every expense and income source.',
    bullets: ['Chart of accounts alignment', 'Transaction categorization', 'Zero backlog maintenance']
  },
  {
    icon: '📊',
    title: 'Financial Analysis for Management',
    desc: 'Translating financial raw data into strategic operational metrics to help owners make informed business decisions.',
    bullets: ['Gross margin analysis', 'EBITDA tracking', 'Executive monthly scorecards']
  },
  {
    icon: '💳',
    title: 'Accounts Payable & Receivable',
    desc: 'Full vendor bill processing, 3-way matching, invoice generation, customer statements, and cash collection acceleration.',
    bullets: ['Vendor 1099 tracking', 'Automated approval flows', 'DSO reduction']
  },
  {
    icon: '💰',
    title: 'Budgetary & Cash Flow Analysis',
    desc: '13-week rolling cash flow forecasts to predict financing needs, avoid liquidity crunches, and manage working capital.',
    bullets: ['Operating budget vs actuals', 'Working capital planning', 'Bank covenant tracking']
  },
  {
    icon: '📝',
    title: 'Tax Return Preparation & Consulting',
    desc: 'Proactive tax compliance and advisory for S-Corps, C-Corps, LLCs, and partnerships to optimize write-offs and prevent audits.',
    bullets: ['Corporate tax filings', 'Multi-state compliance', 'Estimated quarterly taxes']
  },
  {
    icon: '💻',
    title: 'Accounting Software & IT Consulting',
    desc: 'Complete setup, migration, and technical support for QuickBooks Online/Desktop, Xero, Sage, and connected fintech applications.',
    bullets: ['QuickBooks ProAdvisor setup', 'Bank feed integrations', 'Staff workflow training']
  }
];
</script>
