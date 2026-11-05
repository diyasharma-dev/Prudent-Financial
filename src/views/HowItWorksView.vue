<template>
  <div>
    <!-- Header -->
    <section class="py-16 lg:py-24 bg-gradient-to-b from-emerald-900 to-navy-950 text-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          Seamless Execution
        </span>
        <h1 class="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
          How Partnering With Prudent Works
        </h1>
        <p class="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          From smooth onboarding and data migration to 24/7 overnight reconciliation and month-end financial reviews.
        </p>
      </div>
    </section>

    <!-- 4-Step Process -->
    <section class="py-20 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2 class="text-3xl font-extrabold font-heading text-slate-900">4 Steps to Stress-Free Accounting</h2>
          <p class="text-slate-600 text-sm">We handle the technical heavy lifting so your transition is completely frictionless.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div class="w-10 h-10 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-sm">1</div>
            <h3 class="font-bold text-slate-900 font-heading text-base">Diagnostic Review</h3>
            <p class="text-xs text-slate-600 leading-relaxed">We audit your current QuickBooks or accounting files, chart of accounts, and backlog at no charge.</p>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div class="w-10 h-10 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-sm">2</div>
            <h3 class="font-bold text-slate-900 font-heading text-base">Secure Connection</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Setup read-only bank feeds, 247eCabinet™ folders, and grant our accounting team software access.</p>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div class="w-10 h-10 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-sm">3</div>
            <h3 class="font-bold text-slate-900 font-heading text-base">Historical Cleanup</h3>
            <p class="text-xs text-slate-600 leading-relaxed">We clean up past unclassified transactions, reconcile past statements, and balance the ledger.</p>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div class="w-10 h-10 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-sm">4</div>
            <h3 class="font-bold text-slate-900 font-heading text-base">Live 24/7 Operations</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Overnight processing begins. Open your dashboard every morning to balanced accounts and ready reports.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 gradient-cta text-white text-center space-y-6">
      <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white max-w-2xl mx-auto">
        Ready to Experience Frictionless Accounting?
      </h2>
      <div class="pt-2 flex justify-center gap-4">
        <button @click="openConsultationModal" class="px-8 py-3.5 rounded-xl bg-white text-emerald-950 font-bold text-sm shadow-xl hover:bg-emerald-50 transition-all">
          Schedule Your 30-Minute Diagnostic
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useApp } from '@/composables/useApp';

const { openConsultationModal } = useApp();
</script>
