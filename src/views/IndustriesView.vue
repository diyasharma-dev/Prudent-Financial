<template>
  <div>
    <!-- Header -->
    <section class="py-16 lg:py-24 bg-gradient-to-b from-emerald-900 to-navy-950 text-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          Specialized Accounting
        </span>
        <h1 class="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
          Industry Solutions Built for American SMEs
        </h1>
        <p class="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Accounting is never one-size-fits-all. Discover how we tailor our chart of accounts and workflows to your exact sector.
        </p>
      </div>
    </section>

    <!-- Industries Grid -->
    <section class="py-20 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div v-for="(ind, idx) in industries" :key="idx" class="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:border-emerald-500 transition-all flex flex-col justify-between">
            <div class="space-y-3">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <svg v-if="ind.id === 'healthcare'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                <svg v-else-if="ind.id === 'retail'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                <svg v-else-if="ind.id === 'legal'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>
                <svg v-else-if="ind.id === 'construction'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                <svg v-else-if="ind.id === 'wholesale'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h3 class="font-heading font-bold text-xl text-slate-900">{{ ind.title }}</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">{{ ind.desc }}</p>
              <ul class="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-200">
                <li v-for="(b, i) in ind.bullets" :key="i" class="flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                  <span>{{ b }}</span>
                </li>
              </ul>
            </div>
            <div class="pt-4">
              <button @click="openConsultationModal" class="text-xs font-bold text-emerald-700 hover:underline">
                Consult for This Sector →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 gradient-cta text-white text-center space-y-6">
      <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white max-w-2xl mx-auto">
        Don't See Your Industry Listed?
      </h2>
      <p class="text-slate-200 text-sm sm:text-base max-w-xl mx-auto">
        With 20+ years in financial accounting, we support over 40 distinct commercial sectors.
      </p>
      <div class="pt-2 flex justify-center gap-4">
        <button @click="openConsultationModal" class="px-8 py-3.5 rounded-xl bg-white text-emerald-950 font-bold text-sm shadow-xl hover:bg-emerald-50 transition-all">
          Discuss Your Industry Requirements
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useApp } from '@/composables/useApp';

const { openConsultationModal } = useApp();

const industries = [
  {
    id: 'healthcare',
    title: 'Healthcare & Medical Practices',
    desc: 'HIPAA-compliant document handling, patient co-pay reconciliations, medical equipment depreciation, and multi-provider P&L allocations.',
    bullets: ['HIPAA compliant', 'Insurance billing matching', 'Provider P&L distribution']
  },
  {
    id: 'retail',
    title: 'E-Commerce & Retail Brands',
    desc: 'Multi-channel sales reconciliation across Shopify, Amazon, Stripe, and PayPal, plus automated multi-state sales tax filing and inventory costing.',
    bullets: ['Multi-channel sales tax', 'Stripe & PayPal reconciliation', 'Inventory valuation']
  },
  {
    id: 'legal',
    title: 'Legal & Professional Services',
    desc: 'IOLTA trust account compliance, retainer tracking, billable hour expense allocations, and partner distribution accounting.',
    bullets: ['IOLTA trust accounting', 'Retainer drawdown audits', 'Partner allocations']
  },
  {
    id: 'construction',
    title: 'Construction & Real Estate',
    desc: 'Job costing, WIP (Work In Progress) calculations, subcontractor 1099 filing, AIA progress billing, and property rental ledger tracking.',
    bullets: ['Job costing & WIP', 'Subcontractor 1099s', 'AIA progress billing']
  },
  {
    id: 'wholesale',
    title: 'Wholesale & Distribution',
    desc: 'High-volume transaction processing, supply chain purchase order 3-way matching, landed cost calculations, and vendor credit terms management.',
    bullets: ['3-way PO matching', 'Landed cost calculations', 'High-volume batching']
  },
  {
    id: 'tech',
    title: 'Tech Startups & SaaS',
    desc: 'ASC 606 recurring revenue recognition, monthly cash burn rate monitoring, 13-week runway modeling, and investor-ready financial packages.',
    bullets: ['ASC 606 revenue recognition', 'Monthly cash runway', 'Cap table assistance']
  }
];
</script>
