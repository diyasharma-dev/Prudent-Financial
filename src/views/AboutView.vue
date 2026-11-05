<template>
  <div>
    <!-- Page Header -->
    <section class="py-16 lg:py-24 bg-gradient-to-b from-emerald-900 to-navy-950 text-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          About Prudent Financial Services
        </span>
        <h1 class="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
          Empowering SMEs With Corporate-Grade Financial Power
        </h1>
        <p class="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          For over two decades, Prudent Financial Services, Inc. (Prufininc) has been the trusted back-office finance partner for small and medium-sized enterprises across the United States.
        </p>
      </div>
    </section>

    <!-- Company Story & Mission -->
    <section class="py-20 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 space-y-6">
            <div class="border-l-4 border-emerald-600 pl-4">
              <span class="text-xs font-bold text-emerald-700 uppercase tracking-widest">Our Heritage</span>
              <h2 class="text-3xl font-extrabold text-slate-900 font-heading">
                Bridging The Gap Between Basic Bookkeeping and Expensive CPAs
              </h2>
            </div>
            
            <p class="text-slate-600 text-base leading-relaxed">
              Founded in Forest Hills, New York, <strong>Prudent Financial Services, Inc.</strong> was born from a fundamental observation: growing companies ($250,000 to $20 Million revenue) are underserved. They have outgrown basic freelance bookkeepers who make classification errors, yet cannot justify $150,000+ for an in-house controller or $300/hour CPA rates for everyday data entry.
            </p>

            <p class="text-slate-600 text-base leading-relaxed">
              Prudent pioneered the <strong>Dual-Shore Hybrid Delivery Model</strong>: combining New York accounting leadership and CPA oversight with 24/7 technical delivery centers in Hyderabad, India. The result? Overnight transaction processing, zero backlog, and 40%–60% overhead reduction.
            </p>

            <div class="pt-2 grid grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div class="text-2xl font-bold font-heading text-emerald-700">20+ Years</div>
                <div class="text-xs text-slate-500 font-medium mt-1">Continuous SME Support</div>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div class="text-2xl font-bold font-heading text-slate-900">100% US GAAP</div>
                <div class="text-xs text-slate-500 font-medium mt-1">Standardized Accounting</div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="bg-gradient-to-br from-slate-900 to-emerald-950 p-8 sm:p-10 rounded-3xl text-white shadow-2xl space-y-6">
              <h3 class="text-2xl font-bold font-heading text-white border-b border-emerald-700/50 pb-4">Our Core Philosophy</h3>
              
              <div class="space-y-4">
                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
                  <div>
                    <h4 class="font-bold text-emerald-300">Accuracy is Non-Negotiable</h4>
                    <p class="text-xs text-slate-300 mt-0.5">Every account is reconciled to the penny. No unexplained discrepancies or unresolved suspense balances.</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
                  <div>
                    <h4 class="font-bold text-emerald-300">Overnight Velocity (24/7)</h4>
                    <p class="text-xs text-slate-300 mt-0.5">While your office sleeps, our technical delivery hub posts, matches, and cleans your books for morning review.</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
                  <div>
                    <h4 class="font-bold text-emerald-300">Bank-Grade Confidentiality</h4>
                    <p class="text-xs text-slate-300 mt-0.5">256-bit AES encryption, disabled workstation media ports, restricted biometric access, and strict NDAs.</p>
                  </div>
                </div>
              </div>

              <div class="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span class="text-xs text-slate-400 block">USA Headquarters</span>
                  <span class="text-sm font-bold text-white">Forest Hills, Queens, NY</span>
                </div>
                <button @click="openConsultationModal" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow">
                  Talk to a CPA
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Dual-Shore Delivery Model Breakdown -->
    <section class="py-20 bg-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-bold text-emerald-700 uppercase tracking-widest">Global Architecture</span>
          <h2 class="text-3xl font-extrabold text-slate-900 font-heading">
            How The Dual-Shore Model Works
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            Seamlessly harmonizing domestic client service with 24-hour round-the-clock technical horsepower.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div class="flex items-center gap-3">
              <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">USA Direct</span>
              <h3 class="font-heading font-bold text-xl text-slate-900">New York Headquarters</h3>
            </div>
            <p class="text-xs text-slate-500 font-mono">113-25 Queens Blvd, Suite 114, Forest Hills, NY 11375</p>
            <p class="text-slate-600 text-sm leading-relaxed">
              Our New York team handles client onboarding, strategic financial advisory, US GAAP compliance, complex tax structuring, and direct communication during Eastern Standard Time business hours.
            </p>
            <ul class="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
              <li>• Direct phone support: +1 (718) 261-4001</li>
              <li>• US CPA and Senior Controller oversight</li>
              <li>• State & Federal regulatory compliance</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div class="flex items-center gap-3">
              <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">India Delivery</span>
              <h3 class="font-heading font-bold text-xl text-slate-900">Hyderabad Delivery Center</h3>
            </div>
            <p class="text-xs text-slate-500 font-mono">Plot # A-32, Road # 5, Film Nagar, Jubilee Hills, Hyderabad - 500033</p>
            <p class="text-slate-600 text-sm leading-relaxed">
              Our state-of-the-art technical processing facility houses certified accounting specialists who perform high-volume ledger entries, invoice indexing, bank reconciliation, and document matching around the clock.
            </p>
            <ul class="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
              <li>• Dedicated support line: +91 40 2354 3811</li>
              <li>• 24/7 uninterrupted overnight processing</li>
              <li>• High-volume data verification and matching</li>
            </ul>
          </div>

        </div>

      </div>
    </section>

    <!-- Big CTA Banner -->
    <section class="py-20 gradient-cta text-white text-center space-y-6">
      <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white max-w-2xl mx-auto">
        Partner With An Established Accounting Firm Dedicated to Your Growth
      </h2>
      <p class="text-slate-200 text-sm sm:text-base max-w-xl mx-auto">
        Speak with our senior leadership in New York today and discover how our dual-shore team transforms your financial back-office.
      </p>
      <div class="pt-2 flex justify-center gap-4">
        <button @click="openConsultationModal" class="px-8 py-3.5 rounded-xl bg-white text-emerald-950 font-bold text-sm shadow-xl hover:bg-emerald-50 transition-all">
          Schedule Discovery Call
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useApp } from '@/composables/useApp';

const { openConsultationModal } = useApp();
</script>
