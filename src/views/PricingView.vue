<template>
  <div>
    <!-- Header with Architectural Visual Backdrop -->
    <section class="py-16 lg:py-24 relative overflow-hidden bg-emerald-950 text-white" style="background: linear-gradient(135deg, #022c22 0%, #064e3b 60%, #0f172a 100%) !important;">
      <img src="/images/office-conference.jpg" alt="Prudent Corporate Pricing" class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-25" />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
        <span class="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold uppercase tracking-wider">
          Transparent Predictable Rates
        </span>
        <h1 class="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
          Flat-Rate Monthly Pricing with Zero Hidden Fees
        </h1>
        <p class="text-slate-200 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          No long-term contracts. No payroll tax burden. Just audit-ready books, dedicated account management, and up to 60% savings compared to in-house staffing.
        </p>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="py-20 bg-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          <!-- Tier 1: Starter -->
          <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between hover:border-emerald-500 transition-all">
            <div class="space-y-4">
              <div>
                <span class="text-xs font-bold text-slate-500 uppercase">Early Growth</span>
                <h3 class="text-2xl font-bold font-heading text-slate-900">Starter Tier</h3>
              </div>
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-extrabold text-slate-900 font-heading">$699</span>
                <span class="text-xs text-slate-500">/ month</span>
              </div>
              <p class="text-xs text-slate-600">Ideal for businesses with revenue under $500K and up to 150 monthly transactions.</p>
              
              <ul class="text-xs text-slate-600 space-y-2.5 pt-4 border-t border-slate-100">
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Monthly general ledger balancing</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Up to 2 bank &amp; credit card accounts</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Monthly Balance Sheet &amp; P&amp;L</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> 247eCabinet document storage</li>
              </ul>
            </div>
            <button @click="openConsultationModal" class="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors">
              Select Starter Plan
            </button>
          </div>

          <!-- Tier 2: Growth (Highlighted) -->
          <div class="bg-gradient-to-b from-emerald-950 to-slate-950 text-white rounded-3xl p-8 border-2 border-emerald-500 shadow-2xl space-y-6 flex flex-col justify-between relative transform lg:-translate-y-3">
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-slate-950 text-[11px] font-bold uppercase tracking-wider shadow">
              Most Popular For SMEs
            </div>
            
            <div class="space-y-4 pt-2">
              <div>
                <span class="text-xs font-bold text-emerald-300 uppercase">Core SME Tier</span>
                <h3 class="text-2xl font-bold font-heading text-white">Growth Partner</h3>
              </div>
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-extrabold text-white font-heading">$1,499</span>
                <span class="text-xs text-slate-300">/ month</span>
              </div>
              <p class="text-xs text-slate-300">For businesses generating $500K - $3M with active weekly transaction volume.</p>
              
              <ul class="text-xs text-slate-200 space-y-2.5 pt-4 border-t border-emerald-800">
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Weekly transaction coding &amp; reconciliation</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Up to 5 bank, card &amp; merchant accounts</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Full Accounts Payable &amp; Receivable tracking</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Dedicated New York Account Manager</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Monthly CPA financial review session</li>
              </ul>
            </div>
            <button @click="openConsultationModal" class="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow transition-colors">
              Get Started with Growth Plan
            </button>
          </div>

          <!-- Tier 3: Scale / Virtual CFO -->
          <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between hover:border-emerald-500 transition-all">
            <div class="space-y-4">
              <div>
                <span class="text-xs font-bold text-slate-500 uppercase">High Volume / Advisory</span>
                <h3 class="text-2xl font-bold font-heading text-slate-900">Virtual Controller</h3>
              </div>
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-extrabold text-slate-900 font-heading">$2,799</span>
                <span class="text-xs text-slate-500">/ month</span>
              </div>
              <p class="text-xs text-slate-600">For companies $3M - $20M requiring daily accounting operations and CFO advisory.</p>
              
              <ul class="text-xs text-slate-600 space-y-2.5 pt-4 border-t border-slate-100">
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Daily ledger postings &amp; cash tracking</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Unlimited bank &amp; credit accounts</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> 13-week rolling cash flow &amp; budget modeling</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Full payroll tax compliance &amp; W-2/1099 filings</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Bi-weekly executive strategy briefing</li>
              </ul>
            </div>
            <button @click="openConsultationModal" class="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors">
              Select Virtual Controller
            </button>
          </div>

        </div>
      </div>
    </section>

    <!-- Standalone Proprietary Software & Technology Access (Original prufininc.com Offerings) -->
    <section class="py-16 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span class="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Proprietary Technology Platforms
          </span>
          <h2 class="text-3xl font-extrabold text-slate-900 font-heading">
            Standalone Cloud Software &amp; Tool Subscriptions
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            Prefer to handle bookkeeping internally or with your CPA, but need our secure infrastructure? Subscribe directly to our proprietary systems.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- 247Bookkeeper Standalone -->
          <div class="bg-gradient-to-br from-slate-50 to-emerald-50/40 rounded-2xl p-7 border border-emerald-200 shadow-sm flex flex-col justify-between">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">Web-Based Portal</span>
                <span class="text-xs text-slate-500 font-medium">Billed Monthly</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold font-heading text-slate-900">247Bookkeeper™ Platform</h3>
                <p class="text-xs text-slate-600 mt-1">State-of-the-art web-based system for outsourced bookkeeping and workflow tracking.</p>
              </div>
              <div class="flex items-baseline gap-1.5 pt-2">
                <span class="text-xs text-slate-500 font-semibold">Starting from</span>
                <span class="text-3xl font-extrabold text-emerald-700 font-heading">$299</span>
                <span class="text-xs text-slate-500">/ month</span>
              </div>
              <ul class="text-xs text-slate-700 space-y-2 pt-3 border-t border-slate-200">
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Real-time general ledger sync &amp; daily tracking</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Multi-user role-based access for financial team</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Seamless integration with QuickBooks &amp; Xero</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> 24/7 web accessibility from anywhere worldwide</li>
              </ul>
            </div>
            <button @click="openConsultationModal" class="mt-6 w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs transition-colors">
              Request 247Bookkeeper™ Access
            </button>
          </div>

          <!-- 247eCabinet Standalone -->
          <div class="bg-gradient-to-br from-slate-50 to-teal-50/40 rounded-2xl p-7 border border-teal-200 shadow-sm flex flex-col justify-between">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">Document Vault</span>
                <span class="text-xs text-slate-500 font-medium">Billed Monthly</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold font-heading text-slate-900">247eCabinet™ Digital Archive</h3>
                <p class="text-xs text-slate-600 mt-1">Encrypted digital paperless filing system for invoices, bank records &amp; receipts.</p>
              </div>
              <div class="flex items-baseline gap-1.5 pt-2">
                <span class="text-xs text-slate-500 font-semibold">Starting from</span>
                <span class="text-3xl font-extrabold text-teal-700 font-heading">$29.95</span>
                <span class="text-xs text-slate-500">/ month</span>
              </div>
              <ul class="text-xs text-slate-700 space-y-2 pt-3 border-t border-slate-200">
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-teal-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> 256-bit encrypted secure cloud repository</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-teal-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> IRS audit-ready document indexing &amp; search</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-teal-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Automated receipt and vendor invoice ingestion</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-teal-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Instant CPA &amp; auditor export bundle generator</li>
              </ul>
            </div>
            <button @click="openConsultationModal" class="mt-6 w-full py-3 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-semibold text-xs transition-colors">
              Get 247eCabinet™ Vault
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Calculator Section -->
    <section class="py-20 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center max-w-2xl mx-auto space-y-3">
          <h2 class="text-3xl font-extrabold text-slate-900 font-heading">Interactive ROI Calculator</h2>
          <p class="text-slate-600 text-sm">See how your specific revenue and transaction count affect in-house vs outsourced savings.</p>
        </div>
        <SavingsCalculator />
      </div>
    </section>
  </div>
</template>

<script setup>
import { useApp } from '@/composables/useApp';
import SavingsCalculator from '@/components/SavingsCalculator.vue';

const { openConsultationModal } = useApp();
</script>