<template>
  <div>
    <!-- Header with Visual Backdrop -->
    <section class="py-16 lg:py-24 relative overflow-hidden bg-emerald-950 text-white" style="background: linear-gradient(135deg, #022c22 0%, #064e3b 60%, #0f172a 100%) !important;">
      <img src="/images/ny-skyline.jpg" alt="New York Accounting Firm" class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-25" />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
        <span class="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold uppercase tracking-wider">
          Complete Accounting Solutions
        </span>
        <h1 class="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
          Comprehensive Services For High-Growth SMEs
        </h1>
        <p class="text-slate-200 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          From everyday general ledger transaction processing to executive managerial statements and tax filings, Prudent provides end-to-end back-office peace of mind.
        </p>
      </div>
    </section>

    <!-- Visual Service Highlights Banner -->
    <section class="py-12 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group h-48">
            <img src="/images/bookkeeping-sheets.jpg" alt="Full-Cycle Bookkeeping" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
            <div class="absolute bottom-4 left-5 text-white">
              <span class="text-xs text-emerald-400 font-bold uppercase">Core Practice</span>
              <h3 class="text-lg font-bold font-heading">Bookkeeping &amp; General Ledger</h3>
            </div>
          </div>
          <div class="rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group h-48">
            <img src="/images/service-tax.jpg" alt="Taxation & Compliance" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
            <div class="absolute bottom-4 left-5 text-white">
              <span class="text-xs text-emerald-400 font-bold uppercase">CPA Supervised</span>
              <h3 class="text-lg font-bold font-heading">US Corporate Tax &amp; IRS Filings</h3>
            </div>
          </div>
          <div class="rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group h-48">
            <img src="/images/service-consulting.jpg" alt="Managerial & Financial Consulting" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
            <div class="absolute bottom-4 left-5 text-white">
              <span class="text-xs text-emerald-400 font-bold uppercase">Strategic Advisory</span>
              <h3 class="text-lg font-bold font-heading">Managerial Review &amp; CFO</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 bg-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div v-for="(service, idx) in serviceList" :key="idx" class="p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <svg v-if="service.id === 'bookkeeping'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <svg v-else-if="service.id === 'analysis'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                <svg v-else-if="service.id === 'statements'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
                <svg v-else-if="service.id === 'budget'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>
                <svg v-else-if="service.id === 'tax'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/></svg>
                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h3 class="font-heading font-bold text-xl text-slate-900">{{ service.title }}</h3>
              <p class="text-sm text-slate-600 leading-relaxed">{{ service.desc }}</p>
              <ul class="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-100">
                <li v-for="(item, i) in service.bullets" :key="i" class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
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
    <section class="py-20 text-white text-center space-y-6 relative overflow-hidden" style="background: linear-gradient(135deg, #022c22 0%, #064e3b 60%, #0f172a 100%) !important;">
      <img src="/images/ny-skyline.jpg" alt="New York Corporate" class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20" />
      <div class="relative z-10 max-w-2xl mx-auto px-4 space-y-4">
        <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white">
          Need a Tailored Accounting Scope for Your Business?
        </h2>
        <p class="text-slate-200 text-sm sm:text-base">
          We customize every contract to match your monthly transaction volume and software stack.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <button @click="openConsultationModal" class="px-8 py-3.5 rounded-xl bg-white text-emerald-950 font-bold text-sm shadow-xl hover:bg-emerald-50 transition-all">
            Get Custom Scope &amp; Proposal
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useApp } from '@/composables/useApp';

const { openConsultationModal } = useApp();

const serviceList = [
  {
    id: 'bookkeeping',
    title: 'Bookkeeping & Record Keeping',
    desc: 'Daily and weekly journal entry processing, ledger balancing, and accurate classification of every expense and income source.',
    bullets: ['Chart of accounts alignment', 'Transaction categorization', 'Zero backlog maintenance']
  },
  {
    id: 'analysis',
    title: 'Financial Analysis for Management',
    desc: 'Translating financial raw data into strategic operational metrics to help owners make informed business decisions.',
    bullets: ['Departmental P&L breakdown', 'Working capital tracking', 'Executive trend summaries']
  },
  {
    id: 'statements',
    title: 'Financial Statements for Review',
    desc: 'Monthly and quarterly preparation of GAAP-compliant Balance Sheets, Income Statements, and Cash Flow Statements.',
    bullets: ['Balance sheet reconciliations', 'Accrual & cash basis support', 'Board-ready reporting packages']
  },
  {
    id: 'budget',
    title: 'Budgetary Analysis & Forecasting',
    desc: 'Developing comprehensive corporate budgets and monitoring variance between projected vs actual expenditures.',
    bullets: ['12-month rolling projections', 'Departmental budget limits', 'Cash burn rate analysis']
  },
  {
    id: 'tax',
    title: 'Tax Return Preparation & Filings',
    desc: 'Federal, state, and local business tax compliance overseen by seasoned US CPA practitioners.',
    bullets: ['Form 1120 / 1120S / 1065', 'State franchise tax filings', 'Quarterly estimated vouchers']
  },
  {
    id: 'consulting',
    title: 'Computer & Systems Consulting',
    desc: 'Modernizing legacy financial systems, migrating data to cloud accounting platforms, and automating integrations.',
    bullets: ['QuickBooks & Xero setup', 'Bank feed automation', 'Secure digital document vaults']
  }
];
</script>