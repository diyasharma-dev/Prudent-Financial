<template>
  <div>
    <!-- Hero Section with Visual Split -->
    <section class="relative pt-16 pb-20 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white border-b border-slate-200 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
              <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
              Prudent Financial Advisory &amp; Consulting
            </div>
            
            <h1 class="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
              Strategic Business &amp; Financial Consulting for <span class="gradient-text-emerald">Growing SMEs</span>
            </h1>
            
            <p class="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From diagnostic financial analysis and 13-week cash flow modeling to QuickBooks system overhauls and business acquisition due diligence, Prudent equips business owners with the insights needed to maximize profitability and eliminate costly blind spots.
            </p>

            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button @click="openConsultationModal" class="px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-lg shadow-emerald-700/20 transition-all flex items-center gap-2">
                <span>Book Free 30-Min Diagnostic</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
              <a href="#consulting-pillars" class="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-sm transition-all flex items-center gap-2">
                <span>Explore Practice Areas</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
              </a>
            </div>

            <div class="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-slate-200/80">
              <div class="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-sm">
                <div class="text-2xl font-black font-heading text-emerald-700">13-Week</div>
                <div class="text-xs font-medium text-slate-600 mt-1">Cash Flow Models</div>
              </div>
              <div class="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-sm">
                <div class="text-2xl font-black font-heading text-slate-900">Certified</div>
                <div class="text-xs font-medium text-slate-600 mt-1">QuickBooks Pro</div>
              </div>
              <div class="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-sm">
                <div class="text-2xl font-black font-heading text-emerald-700">M&amp;A Ready</div>
                <div class="text-xs font-medium text-slate-600 mt-1">Due Diligence</div>
              </div>
              <div class="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-sm">
                <div class="text-2xl font-black font-heading text-slate-900">Virtual CFO</div>
                <div class="text-xs font-medium text-slate-600 mt-1">Advisory On Demand</div>
              </div>
            </div>
          </div>

          <!-- Hero Right Image Card -->
          <div class="lg:col-span-5 relative">
            <div class="relative mx-auto max-w-md lg:max-w-none">
              <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white group">
                <img src="/images/service-consulting.jpg" alt="Strategic Financial Advisory Session" class="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div class="absolute bottom-4 left-5 right-5 text-white">
                  <div class="text-xs text-emerald-300 font-bold uppercase tracking-wider">C-Suite Intelligence</div>
                  <div class="text-base font-bold font-heading">Fractional CFO &amp; Strategic Advisory</div>
                  <p class="text-xs text-slate-300 mt-1">Profitability roadmaps, cost modeling, and growth projections.</p>
                </div>
              </div>

              <!-- Floating badge -->
              <div class="hidden sm:flex absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                  📈
                </div>
                <div>
                  <div class="text-xs font-bold text-slate-900">30-Min Diagnostic</div>
                  <div class="text-[11px] text-emerald-700 font-semibold">Free Financial Analysis</div>
                </div>
              </div>
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
            Whether you need emergency cash flow turnaround, cloud ERP software implementation, or investor-ready reporting packages, our advisory team delivers measurable ROI.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Pillar 1 -->
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-7 space-y-4 hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col justify-between">
            <div class="space-y-3">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">💡</div>
              <h3 class="font-heading font-bold text-lg text-slate-900">Financial Diagnostic &amp; Operational Health Check</h3>
              <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Comprehensive 50-point audit of your current chart of accounts, expense leakages, margin compression points, and hidden vendor redundancies.
              </p>
              <ul class="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-200">
                <li>• General ledger diagnostic review</li>
                <li>• Gross margin variance benchmarking</li>
                <li>• Overhead expenditure consolidation</li>
              </ul>
            </div>
            <button @click="openConsultationModal" class="pt-4 text-xs font-bold text-emerald-700 hover:underline inline-flex items-center gap-1">
              <span>Book Diagnostic Review</span>
              <span>→</span>
            </button>
          </div>

          <!-- Pillar 2 -->
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-7 space-y-4 hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col justify-between">
            <div class="space-y-3">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">🌊</div>
              <h3 class="font-heading font-bold text-lg text-slate-900">13-Week Cash Flow &amp; Runway Modeling</h3>
              <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Replace guesswork with dynamic, rolling 13-week cash forecasting that tracks collections, payroll cycles, debt service, and vendor payables.
              </p>
              <ul class="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-200">
                <li>• Dynamic liquidity scenarios (Base / Bull / Bear)</li>
                <li>• Working capital optimization</li>
                <li>• Capex investment scheduling</li>
              </ul>
            </div>
            <button @click="openConsultationModal" class="pt-4 text-xs font-bold text-emerald-700 hover:underline inline-flex items-center gap-1">
              <span>Build Cash Model</span>
              <span>→</span>
            </button>
          </div>

          <!-- Pillar 3 -->
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-7 space-y-4 hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col justify-between">
            <div class="space-y-3">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">💻</div>
              <h3 class="font-heading font-bold text-lg text-slate-900">Computer &amp; Accounting Systems Consulting</h3>
              <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Migrate smoothly from outdated desktop files or fragmented spreadsheets to clean QuickBooks Online, Xero, or modern cloud ERP systems.
              </p>
              <ul class="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-200">
                <li>• Historical ledger migration &amp; cleanup</li>
                <li>• App stack integration (Stripe, Gusto, Bill.com)</li>
                <li>• Staff workflow training</li>
              </ul>
            </div>
            <button @click="openConsultationModal" class="pt-4 text-xs font-bold text-emerald-700 hover:underline inline-flex items-center gap-1">
              <span>Modernize Systems</span>
              <span>→</span>
            </button>
          </div>

          <!-- Pillar 4 -->
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-7 space-y-4 hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col justify-between">
            <div class="space-y-3">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">🤝</div>
              <h3 class="font-heading font-bold text-lg text-slate-900">M&amp;A Due Diligence &amp; Business Valuation</h3>
              <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Preparing to buy a competitor or sell your business? We conduct rigorous buy-side/sell-side financial due diligence and Quality of Earnings (QofE).
              </p>
              <ul class="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-200">
                <li>• Quality of Earnings (QofE) analysis</li>
                <li>• Normalized EBITDA add-backs</li>
                <li>• Virtual data room management</li>
              </ul>
            </div>
            <button @click="openConsultationModal" class="pt-4 text-xs font-bold text-emerald-700 hover:underline inline-flex items-center gap-1">
              <span>Request M&amp;A Advisory</span>
              <span>→</span>
            </button>
          </div>

          <!-- Pillar 5 -->
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-7 space-y-4 hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col justify-between">
            <div class="space-y-3">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">🏛️</div>
              <h3 class="font-heading font-bold text-lg text-slate-900">Corporate Restructuring &amp; Entity Tax Strategy</h3>
              <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Aligning corporate entity structures (LLC, S-Corp, C-Corp, Holding Company) to minimize state franchise taxes and maximize pass-through deductions.
              </p>
              <ul class="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-200">
                <li>• S-Corporation salary optimization</li>
                <li>• Multi-entity intercompany transfer pricing</li>
                <li>• State tax nexus minimization</li>
              </ul>
            </div>
            <button @click="openConsultationModal" class="pt-4 text-xs font-bold text-emerald-700 hover:underline inline-flex items-center gap-1">
              <span>Optimize Entity Structure</span>
              <span>→</span>
            </button>
          </div>

          <!-- Pillar 6 -->
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-7 space-y-4 hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col justify-between">
            <div class="space-y-3">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">👔</div>
              <h3 class="font-heading font-bold text-lg text-slate-900">Fractional / Virtual CFO Retainers</h3>
              <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Get senior-level financial direction on demand without the $250,000+ executive salary. We attend board meetings, liaise with banks, and steer strategy.
              </p>
              <ul class="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-200">
                <li>• Monthly executive financial review</li>
                <li>• Banking &amp; debt covenant compliance</li>
                <li>• KPI board decks &amp; investor reporting</li>
              </ul>
            </div>
            <button @click="openConsultationModal" class="pt-4 text-xs font-bold text-emerald-700 hover:underline inline-flex items-center gap-1">
              <span>Engage Fractional CFO</span>
              <span>→</span>
            </button>
          </div>

        </div>

      </div>
    </section>

    <!-- Consultation CTA Banner -->
    <section class="py-20 text-white text-center space-y-6 relative overflow-hidden" style="background: linear-gradient(135deg, #022c22 0%, #064e3b 60%, #0f172a 100%) !important;">
      <img src="/images/ny-skyline.jpg" alt="New York Corporate" class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20" />
      <div class="relative z-10 max-w-2xl mx-auto px-4 space-y-4">
        <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white">
          Book Your Complimentary 30-Minute Financial Diagnostic
        </h2>
        <p class="text-slate-200 text-sm sm:text-base">
          Our senior New York financial advisors will review your balance sheet, identify operational bottlenecks, and provide actionable recommendations.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <button @click="openConsultationModal" class="px-8 py-3.5 rounded-xl bg-white text-emerald-950 font-bold text-sm shadow-xl hover:bg-emerald-50 transition-all">
            Schedule Diagnostic Call
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useApp } from '@/composables/useApp';

const { openConsultationModal } = useApp();
</script>