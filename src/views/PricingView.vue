<template>
  <div>
    <!-- Header with Architectural Visual Backdrop -->
    <section class="py-16 lg:py-24 relative overflow-hidden bg-emerald-950 text-white" style="background: linear-gradient(135deg, #022c22 0%, #064e3b 60%, #0f172a 100%) !important;">
      <img src="/images/ny-skyline.jpg" alt="New York Accounting Rates" class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-25" />
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
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Monthly general ledger balancing</li>
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Up to 2 bank &amp; credit card accounts</li>
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Monthly Balance Sheet &amp; P&amp;L</li>
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> 247eCabinet document storage</li>
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
                <li class="flex items-center gap-2"><span class="text-emerald-400 font-bold">✓</span> Weekly transaction coding &amp; reconciliation</li>
                <li class="flex items-center gap-2"><span class="text-emerald-400 font-bold">✓</span> Up to 5 bank, card &amp; merchant accounts</li>
                <li class="flex items-center gap-2"><span class="text-emerald-400 font-bold">✓</span> Full Accounts Payable &amp; Receivable tracking</li>
                <li class="flex items-center gap-2"><span class="text-emerald-400 font-bold">✓</span> Dedicated New York Account Manager</li>
                <li class="flex items-center gap-2"><span class="text-emerald-400 font-bold">✓</span> Monthly CPA financial review session</li>
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
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Daily ledger postings &amp; cash tracking</li>
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Unlimited bank &amp; credit accounts</li>
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> 13-week rolling cash flow &amp; budget modeling</li>
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Full payroll tax compliance &amp; W-2/1099 filings</li>
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Bi-weekly executive strategy briefing</li>
              </ul>
            </div>
            <button @click="openConsultationModal" class="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors">
              Select Virtual Controller
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