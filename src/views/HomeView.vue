<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden gradient-bg-hero border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Hero Content -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold tracking-wide shadow-sm">
              <span class="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Complete Outsourced Financial Services for SMEs ($250K – $20M)</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-heading leading-[1.12]">
              High-Performance <span class="gradient-text-emerald">Bookkeeping & Tax Strategy</span> For Growing Businesses
            </h1>

            <p class="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <strong>Prudent Financial Services, Inc. (Prufininc)</strong> delivers comprehensive outsourced bookkeeping, managerial financial reporting, taxation, 247Bookkeeper™, and 247eCabinet™ paperless systems. Combining cost-effective data management with expert US CPA review.
            </p>

            <div class="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button @click="openConsultationModal" class="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-base shadow-lg shadow-emerald-700/25 hover:shadow-emerald-700/40 transition-all flex items-center justify-center gap-3">
                <span>Book Free 30-Min Consultation</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
              <a href="#calculator" class="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2">
                <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                <span>Calculate Cost Savings</span>
              </a>
            </div>

            <!-- Trust Badges Row -->
            <div class="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200/80 text-left">
              <div>
                <div class="text-2xl font-bold font-heading text-slate-900">40%–60%</div>
                <div class="text-xs text-slate-500 font-medium">Overhead Cost Reduction</div>
              </div>
              <div>
                <div class="text-2xl font-bold font-heading text-slate-900">99.9%</div>
                <div class="text-xs text-slate-500 font-medium">Audit-Ready Accuracy</div>
              </div>
              <div>
                <div class="text-2xl font-bold font-heading text-slate-900">24/7</div>
                <div class="text-xs text-slate-500 font-medium">Document & Ledger Access</div>
              </div>
              <div>
                <div class="text-2xl font-bold font-heading text-slate-900">20+ Yrs</div>
                <div class="text-xs text-slate-500 font-medium">Established Track Record</div>
              </div>
            </div>
          </div>

          <!-- Right Hero Visual: Real-time KPI Preview Dashboard Card -->
          <div class="lg:col-span-5 relative">
            <div class="relative bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200/90 space-y-6">
              
              <div class="flex items-center justify-between pb-4 border-b border-slate-100">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">24/7</div>
                  <div>
                    <h3 class="font-heading font-bold text-slate-900 text-sm">Prudent Executive Dashboard</h3>
                    <span class="text-xs text-emerald-700 flex items-center gap-1 font-medium">
                      <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                      Real-time Feed Reconciled
                    </span>
                  </div>
                </div>
                <router-link to="/247bookkeeper" class="text-xs text-emerald-700 font-bold hover:underline">Launch Demo</router-link>
              </div>

              <!-- Metrics Grid -->
              <div class="grid grid-cols-2 gap-3">
                <div class="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <span class="text-[11px] text-slate-500 uppercase font-semibold">Cash On Hand</span>
                  <div class="text-xl font-extrabold text-slate-900 font-heading mt-0.5">$384,920</div>
                  <span class="text-[11px] text-emerald-600 font-medium">↑ +14.2% vs last mo</span>
                </div>
                <div class="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <span class="text-[11px] text-slate-500 uppercase font-semibold">Net Profit (MTD)</span>
                  <div class="text-xl font-extrabold text-slate-900 font-heading mt-0.5">$92,450</div>
                  <span class="text-[11px] text-emerald-600 font-medium">24.1% Gross Margin</span>
                </div>
                <div class="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <span class="text-[11px] text-slate-500 uppercase font-semibold">Open Receivables (AR)</span>
                  <div class="text-xl font-extrabold text-slate-900 font-heading mt-0.5">$48,120</div>
                  <span class="text-[11px] text-slate-500 font-medium">96% Current &lt; 30d</span>
                </div>
                <div class="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <span class="text-[11px] text-slate-500 uppercase font-semibold">Monthly In-House Saved</span>
                  <div class="text-xl font-extrabold text-emerald-700 font-heading mt-0.5">$3,600</div>
                  <span class="text-[11px] text-emerald-700 font-medium">58% Overhead Reduction</span>
                </div>
              </div>

              <!-- Live Queue Status -->
              <div class="p-4 rounded-2xl bg-emerald-950 text-white space-y-2">
                <div class="flex items-center justify-between text-xs">
                  <span class="text-emerald-400 font-semibold uppercase tracking-wider">Dual-Shore Processing Status</span>
                  <span class="text-xs bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-300">Active</span>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed">
                  Yesterday's transactions, bank deposits, and merchant accounts have been posted, balanced, and verified by senior US-CPA supervisors.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Welcome to Prudent Section (Mirroring prufininc.com Heritage Text) -->
    <section class="py-20 bg-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="max-w-4xl mx-auto space-y-6">
          <div class="border-b-2 border-emerald-600 pb-3">
            <span class="text-xs font-bold text-emerald-700 uppercase tracking-widest">Company Heritage</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-1">Welcome to Prudent!</h2>
          </div>

          <p class="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <strong>Prudent Financial Services, Inc. (Prufininc)</strong> provides complete outsourced bookkeeping, financial analysis, taxation and support services to SME's. We have experts to take care of all your Accounting needs including bookkeeping, financial analysis, financial statement for managerial review, budgetary analysis, tax return preparation &amp; consulting, computer consulting and host of other ancillary services.
          </p>

          <p class="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Our state-of-the-art web-based system for outsourced bookkeeping provides business owners and financial professionals with the tools required to reduce financial and operational expenses while also providing timely and accurate financial record keeping and reporting.
          </p>

          <div class="pt-4 flex flex-wrap gap-4">
            <router-link to="/outsourcing" class="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow transition-all">
              Explore Outsourcing Solutions →
            </router-link>
            <router-link to="/about" class="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-300 transition-all">
              Learn About Our Heritage
            </router-link>
          </div>
        </div>

      </div>
    </section>

    <!-- Interactive ROI & Cost Savings Calculator Section -->
    <section class="py-24 bg-slate-100 border-b border-slate-200" id="calculator">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span class="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            Interactive Cost Benchmark & Estimate
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Calculate Your Annual In-House vs Outsourced Savings
          </h2>
          <p class="text-base sm:text-lg text-slate-600">
            Compare the total cost of hiring full-time internal staff against Prudent's dedicated outsourced bookkeeping model.
          </p>
        </div>

        <!-- Reusable SavingsCalculator Component -->
        <SavingsCalculator />
      </div>
    </section>

    <!-- Proprietary Technology & Dual-Shore Delivery Section -->
    <section class="py-20 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <span class="inline-block px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            Proprietary Cloud Technology
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            The Prudent Technology Advantage: <span class="text-emerald-700">247Bookkeeper™ & 247eCabinet™</span>
          </h2>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
            Say goodbye to sluggish desktop software, corrupted backup files, and lost paper receipts. Prudent delivers 24/7 web-based access to your balanced financial records and an encrypted document vault.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div class="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 flex flex-col justify-between hover:border-emerald-500 hover:shadow-xl transition-all">
            <div class="space-y-4">
              <div class="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-2xl shadow-inner">
                📊
              </div>
              <div>
                <span class="text-xs font-bold text-emerald-700 uppercase tracking-wider">Real-Time Portal</span>
                <h3 class="text-xl font-bold font-heading text-slate-900 mt-1">247Bookkeeper™ System</h3>
              </div>
              <p class="text-sm text-slate-600 leading-relaxed">
                Live web-based accounting portal providing business owners and financial managers with instant access to daily bank balances, vendor invoice statuses, and profitability metrics from any browser.
              </p>
              <ul class="text-xs text-slate-600 space-y-2 pt-3 border-t border-slate-200">
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Real-time KPI revenue & expense dashboard</li>
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> AP bill approval & automated payment scheduling</li>
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> AR aging analysis & overdue collection alerts</li>
              </ul>
            </div>
            <div class="pt-4">
              <router-link to="/247bookkeeper" class="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors">
                <span>Explore 247Bookkeeper™ Features</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </router-link>
            </div>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 flex flex-col justify-between hover:border-emerald-500 hover:shadow-xl transition-all">
            <div class="space-y-4">
              <div class="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-2xl shadow-inner">
                🔐
              </div>
              <div>
                <span class="text-xs font-bold text-emerald-700 uppercase tracking-wider">Encrypted Vault</span>
                <h3 class="text-xl font-bold font-heading text-slate-900 mt-1">247eCabinet™ Repository</h3>
              </div>
              <p class="text-sm text-slate-600 leading-relaxed">
                Paperless digital document management with 256-bit bank-grade encryption. Securely store, index, and instantly retrieve vendor receipts, customer invoices, tax filings, and bank statements.
              </p>
              <ul class="text-xs text-slate-600 space-y-2 pt-3 border-t border-slate-200">
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> 256-Bit SSL/TLS cloud document storage</li>
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Audit-ready trail with optical OCR indexing</li>
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Role-based permission controls & disaster recovery</li>
              </ul>
            </div>
            <div class="pt-4">
              <router-link to="/247ecabinet" class="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors">
                <span>View 247eCabinet™ Live Vault Demo</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </router-link>
            </div>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 flex flex-col justify-between hover:border-emerald-500 hover:shadow-xl transition-all">
            <div class="space-y-4">
              <div class="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-2xl shadow-inner">
                ⚡
              </div>
              <div>
                <span class="text-xs font-bold text-emerald-700 uppercase tracking-wider">Global Operations</span>
                <h3 class="text-xl font-bold font-heading text-slate-900 mt-1">Dual-Shore Speed & Savings</h3>
              </div>
              <p class="text-sm text-slate-600 leading-relaxed">
                Our New York headquarters provides US CPA direction and regulatory compliance, while our 24/7 technical processing centers in Hyderabad, India deliver overnight transaction turnaround.
              </p>
              <ul class="text-xs text-slate-600 space-y-2 pt-3 border-t border-slate-200">
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Over-the-counter NY client service (EST time zone)</li>
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Overnight transaction processing while you sleep</li>
                <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> 50% to 60% operational overhead cost reduction</li>
              </ul>
            </div>
            <div class="pt-4">
              <router-link to="/outsourcing" class="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors">
                <span>Learn About Our Outsourced Model</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </router-link>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Specialized Industry Solutions Matrix -->
    <section class="py-20 bg-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <span class="inline-block px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            Tailored For American SMEs
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Industry-Specific Accounting & Bookkeeping Expertise
          </h2>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every industry has distinct accounting nuances. We tailor our chart of accounts, compliance checks, and reporting to match your exact business model.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-emerald-500 transition-all">
            <div class="text-2xl">🩺</div>
            <h3 class="font-heading font-bold text-slate-900 text-base">Healthcare & Medical Practices</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              HIPAA-compliant document handling, patient co-pay reconciliations, medical equipment depreciation, and multi-provider P&L allocations.
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-emerald-500 transition-all">
            <div class="text-2xl">🛒</div>
            <h3 class="font-heading font-bold text-slate-900 text-base">E-Commerce & Retail Brands</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Multi-channel sales reconciliation across Shopify, Amazon, Stripe, and PayPal, plus automated multi-state sales tax filing and inventory costing.
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-emerald-500 transition-all">
            <div class="text-2xl">⚖️</div>
            <h3 class="font-heading font-bold text-slate-900 text-base">Legal & Professional Services</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              IOLTA trust account compliance, retainer tracking, billable hour expense allocations, and partner distribution accounting.
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-emerald-500 transition-all">
            <div class="text-2xl">🏗️</div>
            <h3 class="font-heading font-bold text-slate-900 text-base">Construction & Real Estate</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Job costing, WIP (Work In Progress) calculations, subcontractor 1099 filing, AIA progress billing, and property rental ledger tracking.
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-emerald-500 transition-all">
            <div class="text-2xl">📦</div>
            <h3 class="font-heading font-bold text-slate-900 text-base">Wholesale & Distribution</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              High-volume transaction processing, supply chain purchase order 3-way matching, landed cost calculations, and vendor credit terms management.
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-emerald-500 transition-all">
            <div class="text-2xl">💻</div>
            <h3 class="font-heading font-bold text-slate-900 text-base">Tech Startups & SaaS</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ASC 606 recurring revenue recognition, monthly cash burn rate monitoring, 13-week runway modeling, and investor-ready financial packages.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- Dedicated On-Page Consultation & Lead Capture Form Section -->
    <ConsultationForm />

    <!-- Big Call to Action Banner (High Contrast) -->
    <section class="py-20 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white relative overflow-hidden" style="background: linear-gradient(135deg, #022c22 0%, #064e3b 50%, #0f172a 100%) !important;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <span class="inline-block px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold uppercase tracking-wider">
          Start With Confidence
        </span>

        <h2 class="text-3xl sm:text-5xl font-extrabold font-heading text-white max-w-3xl mx-auto leading-tight">
          Ready For Audit-Ready Books and 50% Lower Overhead?
        </h2>

        <p class="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Schedule a complimentary 30-minute consultation with a senior Prudent accountant. We'll analyze your current accounting setup and show you exact areas to reduce cost.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button @click="openConsultationModal" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-base shadow-xl transition-all">
            Book Your Free Financial Diagnostic
          </button>
          <a href="tel:+17182614001" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-950/60 hover:bg-emerald-950 text-white font-semibold text-base border border-emerald-400/30 transition-all flex items-center justify-center gap-2">
            <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <span>Call Us: +1 (718) 261-4001</span>
          </a>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-200 pt-4">
          <span>✓ No long-term contracts</span>
          <span>✓ Free 30-min setup audit</span>
          <span>✓ 100% confidential under NDA</span>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { useApp } from '@/composables/useApp';
import SavingsCalculator from '@/components/SavingsCalculator.vue';
import ConsultationForm from '@/components/ConsultationForm.vue';

const { openConsultationModal } = useApp();
</script>
