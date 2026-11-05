<template>
  <div class="space-y-0">
    <!-- ========================================================================= -->
    <!-- HERO SECTION WITH HIGH-IMPACT VISUAL & CPA DASHBOARD PREVIEW              -->
    <!-- ========================================================================= -->
    <section class="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white border-b border-slate-200">
      <!-- Background subtle grid pattern -->
      <div class="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Hero Content -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold tracking-wide shadow-sm">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Complete Outsourced Financial Services for SMEs ($250K – $20M)</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-heading leading-[1.12]">
              High-Performance <span class="gradient-text-emerald">Bookkeeping & Tax Strategy</span> For Growing Businesses
            </h1>

            <p class="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <strong>Prudent Financial Services, Inc. (Prufininc)</strong> delivers comprehensive outsourced bookkeeping, managerial financial reporting, taxation, 247Bookkeeper™, and 247eCabinet™ paperless systems. Combining cost-effective data management with expert US CPA review.
            </p>

            <div class="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button @click="openConsultationModal" class="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-base shadow-lg shadow-emerald-700/25 hover:shadow-emerald-700/40 transition-all flex items-center justify-center gap-3 group">
                <span>Book Free 30-Min Consultation</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
              <a href="#calculator" class="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-base border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2">
                <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                <span>Calculate Cost Savings</span>
              </a>
            </div>

            <!-- Trust Badges Row -->
            <div class="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200 text-left">
              <div class="p-3 bg-white/70 backdrop-blur rounded-xl border border-slate-200/80">
                <div class="text-2xl font-bold font-heading text-slate-900">40%–60%</div>
                <div class="text-xs text-slate-500 font-medium">Overhead Cost Reduction</div>
              </div>
              <div class="p-3 bg-white/70 backdrop-blur rounded-xl border border-slate-200/80">
                <div class="text-2xl font-bold font-heading text-slate-900">99.9%</div>
                <div class="text-xs text-slate-500 font-medium">Audit-Ready Accuracy</div>
              </div>
              <div class="p-3 bg-white/70 backdrop-blur rounded-xl border border-slate-200/80">
                <div class="text-2xl font-bold font-heading text-slate-900">24/7</div>
                <div class="text-xs text-slate-500 font-medium">Document & Ledger Access</div>
              </div>
              <div class="p-3 bg-white/70 backdrop-blur rounded-xl border border-slate-200/80">
                <div class="text-2xl font-bold font-heading text-slate-900">20+ Yrs</div>
                <div class="text-xs text-slate-500 font-medium">Established Track Record</div>
              </div>
            </div>
          </div>

          <!-- Right Hero Visual: Real Corporate Photography + Floating Glass Analytics Card -->
          <div class="lg:col-span-5 relative">
            <div class="relative mx-auto max-w-md lg:max-w-none">
              
              <!-- Ambient Glow behind image -->
              <div class="absolute -inset-2 bg-gradient-to-r from-emerald-600/30 to-teal-500/30 rounded-3xl blur-2xl opacity-60 transform -rotate-1"></div>

              <!-- Main Hero Image Card -->
              <div class="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 group">
                <div class="relative h-80 sm:h-96 overflow-hidden">
                  <img 
                    src="/images/hero-accounting.jpg" 
                    alt="Prudent Senior Accountant Analyzing Financial Records" 
                    class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <!-- Gradient overlay for text readability -->
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                  <!-- In-Image Header Pill -->
                  <div class="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      US CPA Supervision
                    </span>
                    <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-xs font-semibold">
                      Audit-Ready
                    </span>
                  </div>

                  <!-- In-Image Bottom Text -->
                  <div class="absolute bottom-4 left-4 right-4 text-white">
                    <div class="text-xs text-emerald-300 font-bold uppercase tracking-wider">Executive Financial Intelligence</div>
                    <div class="text-lg font-bold font-heading leading-tight">Daily Balanced Books & Live Tax Advisory</div>
                  </div>
                </div>

                <!-- Floating Bottom Stats Ribbon -->
                <div class="p-5 bg-white border-t border-slate-100 space-y-3">
                  <div class="grid grid-cols-2 gap-3 text-left">
                    <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div class="text-[11px] text-slate-500 font-semibold uppercase">Monthly In-House Saved</div>
                      <div class="text-xl font-extrabold text-emerald-700 font-heading mt-0.5">$3,600 / mo</div>
                      <span class="text-[10px] text-emerald-600 font-medium">58% Overhead Reduction</span>
                    </div>
                    <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div class="text-[11px] text-slate-500 font-semibold uppercase">Daily Feed Reconciled</div>
                      <div class="text-xl font-extrabold text-slate-900 font-heading mt-0.5">100% Accurate</div>
                      <span class="text-[10px] text-slate-500 font-medium">QuickBooks & Xero Sync</span>
                    </div>
                  </div>

                  <div class="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                    <span class="text-slate-500 flex items-center gap-1">
                      <svg class="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                      Encrypted 247eCabinet™ Vault
                    </span>
                    <router-link to="/247bookkeeper" class="text-emerald-700 font-bold hover:underline flex items-center gap-1">
                      <span>Launch Portal</span>
                      <span>→</span>
                    </router-link>
                  </div>
                </div>
              </div>

              <!-- Floating badge top-right -->
              <div class="hidden sm:flex absolute -top-5 -right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200 items-center gap-3 z-20">
                <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                  ⚡
                </div>
                <div>
                  <div class="text-xs font-bold text-slate-900">Overnight Processing</div>
                  <div class="text-[11px] text-slate-500">Dual-Shore Turnaround</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- WELCOME TO PRUDENT SECTION (ELEVATED 2-COLUMN DESIGN WITH IMAGES)        -->
    <!-- (Addresses user feedback & screenshot: rich imagery, badges, & layout)    -->
    <!-- ========================================================================= -->
    <section class="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          <!-- Left Column: Rich Content & Feature Points -->
          <div class="lg:col-span-6 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <span>Company Heritage &amp; Mission</span>
            </div>

            <div class="border-b-2 border-emerald-600 pb-3">
              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading leading-tight">
                Welcome to Prudent!
              </h2>
              <p class="text-sm sm:text-base text-emerald-700 font-semibold mt-1">
                Your Trusted Outsourced Financial &amp; Bookkeeping Partner
              </p>
            </div>

            <p class="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <strong>Prudent Financial Services, Inc. (Prufininc)</strong> provides complete outsourced bookkeeping, financial analysis, taxation and support services to SME's. We have experts to take care of all your Accounting needs including bookkeeping, financial analysis, financial statement for managerial review, budgetary analysis, tax return preparation &amp; consulting, computer consulting and host of other ancillary services.
            </p>

            <p class="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Our state-of-the-art web-based system for outsourced bookkeeping provides business owners and financial professionals with the tools required to reduce financial and operational expenses while also providing timely and accurate financial record keeping and reporting.
            </p>

            <!-- 4 Visual Feature Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">✓</div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900">Full-Cycle Bookkeeping</h4>
                  <p class="text-xs text-slate-600 mt-0.5">AP/AR, bank reconciliation &amp; GL</p>
                </div>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">✓</div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900">Managerial Review</h4>
                  <p class="text-xs text-slate-600 mt-0.5">Monthly P&amp;L, balance sheets &amp; cash flows</p>
                </div>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">✓</div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900">US Taxation &amp; CPA</h4>
                  <p class="text-xs text-slate-600 mt-0.5">Federal, state &amp; payroll tax filings</p>
                </div>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">✓</div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900">Cloud Technology</h4>
                  <p class="text-xs text-slate-600 mt-0.5">247Bookkeeper™ &amp; 247eCabinet™</p>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="pt-4 flex flex-wrap gap-4">
              <router-link to="/outsourcing" class="px-7 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                <span>Explore Outsourcing Solutions</span>
                <span>→</span>
              </router-link>
              <router-link to="/about" class="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-sm transition-all">
                Learn About Our Heritage
              </router-link>
            </div>
          </div>

          <!-- Right Column: High Quality Image Collage with Badge -->
          <div class="lg:col-span-6 relative">
            <div class="relative mx-auto max-w-lg lg:max-w-none">
              
              <!-- Main Corporate Image -->
              <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-100">
                <img 
                  src="/images/heritage-meeting.jpg" 
                  alt="Prudent Financial Advisory Meeting" 
                  class="w-full h-80 sm:h-96 object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                
                <div class="absolute bottom-4 left-5 right-5 text-white">
                  <span class="text-xs text-emerald-300 font-bold uppercase tracking-wider">Dual-Shore Advantage</span>
                  <p class="text-base font-bold font-heading">Forest Hills, New York HQ • Hyderabad Global Technology Center</p>
                </div>
              </div>

              <!-- Overlapping Secondary Image / Trust Card -->
              <div class="hidden sm:block absolute -bottom-8 -left-8 w-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img 
                  src="/images/accountant-desk.jpg" 
                  alt="Accountant Ledger & Calculator" 
                  class="w-full h-36 object-cover"
                />
                <div class="p-3 text-left">
                  <div class="text-[11px] font-bold text-emerald-700 uppercase">Audit-Ready Precision</div>
                  <div class="text-xs font-semibold text-slate-800">100% CPA Compliant</div>
                </div>
              </div>

              <!-- Floating Experience Badge -->
              <div class="absolute -top-6 -right-4 sm:-right-6 bg-slate-900 text-white p-4 rounded-2xl shadow-xl border border-slate-700 text-left">
                <div class="text-2xl font-extrabold text-emerald-400 font-heading">20+ Years</div>
                <div class="text-xs text-slate-300 font-medium">Serving US Small &amp; Mid Businesses</div>
                <div class="flex items-center gap-1 text-amber-400 text-xs mt-1">
                  ★★★★★
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- INTERACTIVE ROI & COST SAVINGS CALCULATOR SECTION                         -->
    <!-- ========================================================================= -->
    <section class="py-24 bg-slate-100 border-b border-slate-200" id="calculator">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span class="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            Interactive Cost Benchmark &amp; Estimate
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

    <!-- ========================================================================= -->
    <!-- PROPRIETARY TECHNOLOGY ADVANTAGE WITH REAL PREVIEW IMAGES                 -->
    <!-- ========================================================================= -->
    <section class="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <span class="inline-block px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            Proprietary Cloud Technology
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            The Prudent Technology Advantage: <span class="text-emerald-700">247Bookkeeper™ &amp; 247eCabinet™</span>
          </h2>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
            Say goodbye to sluggish desktop software, corrupted backup files, and lost paper receipts. Prudent delivers 24/7 web-based access to your balanced financial records and an encrypted document vault.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Card 1: 247Bookkeeper -->
          <div class="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-emerald-500 hover:shadow-2xl transition-all group">
            <div>
              <div class="relative h-48 overflow-hidden bg-slate-200">
                <img 
                  src="/images/technology-analytics.jpg" 
                  alt="247Bookkeeper™ Live Analytics" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div class="absolute bottom-3 left-4">
                  <span class="px-2.5 py-1 rounded-md bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider">Real-Time Portal</span>
                </div>
              </div>

              <div class="p-6 space-y-4">
                <div>
                  <h3 class="text-xl font-bold font-heading text-slate-900">247Bookkeeper™ System</h3>
                  <span class="text-xs text-slate-500">Live Web-Based Financial Ledger</span>
                </div>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Live web-based accounting portal providing business owners and financial managers with instant access to daily bank balances, vendor invoice statuses, and profitability metrics from any browser.
                </p>
                <ul class="text-xs text-slate-600 space-y-2 pt-3 border-t border-slate-200">
                  <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Real-time KPI revenue &amp; expense dashboard</li>
                  <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> AP bill approval &amp; automated payment scheduling</li>
                  <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> AR aging analysis &amp; overdue collection alerts</li>
                </ul>
              </div>
            </div>

            <div class="p-6 pt-0">
              <router-link to="/247bookkeeper" class="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors">
                <span>Explore 247Bookkeeper™ Features</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </router-link>
            </div>
          </div>

          <!-- Card 2: 247eCabinet -->
          <div class="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-emerald-500 hover:shadow-2xl transition-all group">
            <div>
              <div class="relative h-48 overflow-hidden bg-slate-200">
                <img 
                  src="/images/cloud-vault.jpg" 
                  alt="247eCabinet™ Encrypted Document Vault" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div class="absolute bottom-3 left-4">
                  <span class="px-2.5 py-1 rounded-md bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider">Encrypted Vault</span>
                </div>
              </div>

              <div class="p-6 space-y-4">
                <div>
                  <h3 class="text-xl font-bold font-heading text-slate-900">247eCabinet™ Repository</h3>
                  <span class="text-xs text-slate-500">256-Bit Bank-Grade Paperless Storage</span>
                </div>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Paperless digital document management with 256-bit bank-grade encryption. Securely store, index, and instantly retrieve vendor receipts, customer invoices, tax filings, and bank statements.
                </p>
                <ul class="text-xs text-slate-600 space-y-2 pt-3 border-t border-slate-200">
                  <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> 256-Bit SSL/TLS cloud document storage</li>
                  <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Audit-ready trail with optical OCR indexing</li>
                  <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Role-based permission controls &amp; disaster recovery</li>
                </ul>
              </div>
            </div>

            <div class="p-6 pt-0">
              <router-link to="/247ecabinet" class="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors">
                <span>View 247eCabinet™ Live Vault Demo</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </router-link>
            </div>
          </div>

          <!-- Card 3: Dual Shore Operations -->
          <div class="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-emerald-500 hover:shadow-2xl transition-all group">
            <div>
              <div class="relative h-48 overflow-hidden bg-slate-200">
                <img 
                  src="/images/ny-skyline.jpg" 
                  alt="New York Corporate Office & Hyderabad Processing" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div class="absolute bottom-3 left-4">
                  <span class="px-2.5 py-1 rounded-md bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider">Dual-Shore Speed</span>
                </div>
              </div>

              <div class="p-6 space-y-4">
                <div>
                  <h3 class="text-xl font-bold font-heading text-slate-900">Dual-Shore Speed &amp; Savings</h3>
                  <span class="text-xs text-slate-500">NY CPA Oversight + Hyderabad Center</span>
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
            </div>

            <div class="p-6 pt-0">
              <router-link to="/outsourcing" class="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors">
                <span>Learn About Our Outsourced Model</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </router-link>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- COMPREHENSIVE SERVICES VISUAL SHOWCASE                                    -->
    <!-- ========================================================================= -->
    <section class="py-20 bg-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div class="space-y-3 max-w-2xl">
            <span class="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Comprehensive Financial Suite
            </span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              End-to-End Accounting, Tax &amp; Advisory
            </h2>
            <p class="text-base text-slate-600">
              Tailored for American SMEs looking for institutional precision without the cost of an internal finance department.
            </p>
          </div>
          <router-link to="/services" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-emerald-600 text-slate-800 font-semibold text-sm shadow-sm transition-all self-start md:self-auto">
            <span>View All 15+ Services</span>
            <span>→</span>
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Service Card 1 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all">
            <div class="h-44 overflow-hidden relative">
              <img src="/images/accountant-desk.jpg" alt="Outsourced Bookkeeping" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
              <h3 class="absolute bottom-3 left-4 text-white font-bold font-heading text-lg">Full-Cycle Bookkeeping</h3>
            </div>
            <div class="p-6 space-y-3">
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Daily bank reconciliation, accounts payable 3-way matching, accounts receivable invoicing, credit card reconciliation, and payroll journal entries.
              </p>
              <router-link to="/services" class="text-xs font-bold text-emerald-700 hover:underline inline-block">
                Learn more about Bookkeeping →
              </router-link>
            </div>
          </div>

          <!-- Service Card 2 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all">
            <div class="h-44 overflow-hidden relative">
              <img src="/images/service-tax.jpg" alt="Tax Preparation & Advisory" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
              <h3 class="absolute bottom-3 left-4 text-white font-bold font-heading text-lg">US Taxation &amp; Filings</h3>
            </div>
            <div class="p-6 space-y-3">
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Corporate tax returns (Form 1120, 1120S, 1065), state franchise taxes, quarterly estimated payments, payroll taxes, and multi-state nexus compliance.
              </p>
              <router-link to="/services" class="text-xs font-bold text-emerald-700 hover:underline inline-block">
                Learn more about Tax Strategy →
              </router-link>
            </div>
          </div>

          <!-- Service Card 3 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all">
            <div class="h-44 overflow-hidden relative">
              <img src="/images/service-consulting.jpg" alt="Financial Consulting & CFO" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
              <h3 class="absolute bottom-3 left-4 text-white font-bold font-heading text-lg">Managerial &amp; CFO Advisory</h3>
            </div>
            <div class="p-6 space-y-3">
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Budgetary analysis, rolling 13-week cash flow forecasts, financial statement managerial review, software migration, and fractional CFO guidance.
              </p>
              <router-link to="/consulting" class="text-xs font-bold text-emerald-700 hover:underline inline-block">
                Learn more about Consulting →
              </router-link>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- SPECIALIZED INDUSTRY SOLUTIONS MATRIX                                     -->
    <!-- ========================================================================= -->
    <section class="py-20 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <span class="inline-block px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            Tailored For American SMEs
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Industry-Specific Accounting &amp; Bookkeeping Expertise
          </h2>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every industry has distinct accounting nuances. We tailor our chart of accounts, compliance checks, and reporting to match your exact business model.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-emerald-500 hover:shadow-md transition-all">
            <div class="text-2xl">🩺</div>
            <h3 class="font-heading font-bold text-slate-900 text-base">Healthcare &amp; Medical Practices</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              HIPAA-compliant document handling, patient co-pay reconciliations, medical equipment depreciation, and multi-provider P&amp;L allocations.
            </p>
          </div>

          <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-emerald-500 hover:shadow-md transition-all">
            <div class="text-2xl">🛒</div>
            <h3 class="font-heading font-bold text-slate-900 text-base">E-Commerce &amp; Retail Brands</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Multi-channel sales reconciliation across Shopify, Amazon, Stripe, and PayPal, plus automated multi-state sales tax filing and inventory costing.
            </p>
          </div>

          <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-emerald-500 hover:shadow-md transition-all">
            <div class="text-2xl">⚖️</div>
            <h3 class="font-heading font-bold text-slate-900 text-base">Legal &amp; Professional Services</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              IOLTA trust account compliance, retainer tracking, billable hour expense allocations, and partner distribution accounting.
            </p>
          </div>

          <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-emerald-500 hover:shadow-md transition-all">
            <div class="text-2xl">🏗️</div>
            <h3 class="font-heading font-bold text-slate-900 text-base">Construction &amp; Real Estate</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Job costing, WIP (Work In Progress) calculations, subcontractor 1099 filing, AIA progress billing, and property rental ledger tracking.
            </p>
          </div>

          <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-emerald-500 hover:shadow-md transition-all">
            <div class="text-2xl">📦</div>
            <h3 class="font-heading font-bold text-slate-900 text-base">Wholesale &amp; Distribution</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              High-volume transaction processing, supply chain purchase order 3-way matching, landed cost calculations, and vendor credit terms management.
            </p>
          </div>

          <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-emerald-500 hover:shadow-md transition-all">
            <div class="text-2xl">💻</div>
            <h3 class="font-heading font-bold text-slate-900 text-base">Tech Startups &amp; SaaS</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ASC 606 recurring revenue recognition, monthly cash burn rate monitoring, 13-week runway modeling, and investor-ready financial packages.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- CLIENT TRUST & EXECUTIVE TESTIMONIALS SECTION (WITH REAL PORTRAITS)       -->
    <!-- ========================================================================= -->
    <section class="py-20 bg-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div class="text-center max-w-2xl mx-auto space-y-3">
          <span class="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Verified Client Outcomes
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Trusted by American Business Leaders
          </h2>
          <p class="text-sm sm:text-base text-slate-600">
            Hear why CFOs, managing partners, and SME founders rely on Prudent for their financial backbone.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Testimonial 1 -->
          <div class="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm space-y-5">
            <div class="flex items-center gap-1 text-amber-400 text-sm">
              ★★★★★
            </div>
            <p class="text-slate-700 text-sm sm:text-base leading-relaxed italic">
              "Switching to Prudent Financial cut our accounting overhead by $3,800 every month. Their dual-shore team finishes bank reconciliation overnight while we sleep. When we open our office in NY, our numbers are ready."
            </p>
            <div class="flex items-center gap-4 pt-3 border-t border-slate-100">
              <img src="/images/client-director.jpg" alt="Michael R. - Logistics Managing Director" class="w-12 h-12 rounded-full object-cover border-2 border-emerald-500" />
              <div>
                <h4 class="font-bold text-slate-900 text-sm">Michael R. Reynolds</h4>
                <p class="text-xs text-slate-500">Managing Director, Tri-State Logistics Corp ($8M ARR)</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm space-y-5">
            <div class="flex items-center gap-1 text-amber-400 text-sm">
              ★★★★★
            </div>
            <p class="text-slate-700 text-sm sm:text-base leading-relaxed italic">
              "The 247eCabinet™ system replaced all our physical filing cabinets. During our annual corporate audit, our CPA retrieved every single receipt and invoice in minutes. Prudent's attention to detail is unmatched."
            </p>
            <div class="flex items-center gap-4 pt-3 border-t border-slate-100">
              <img src="/images/cpa-profile.jpg" alt="Elena Vasquez - Healthcare Practice CFO" class="w-12 h-12 rounded-full object-cover border-2 border-emerald-500" />
              <div>
                <h4 class="font-bold text-slate-900 text-sm">Elena Vasquez</h4>
                <p class="text-xs text-slate-500">CFO, North Shore Medical &amp; Dental Partners</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Global Dual-Shore Presence Banner -->
        <div class="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 rounded-3xl p-8 text-white max-w-4xl mx-auto shadow-xl">
          <div class="grid sm:grid-cols-3 gap-6 text-center sm:text-left items-center">
            <div class="sm:border-r sm:border-emerald-800/60 sm:pr-6">
              <div class="text-xs text-emerald-400 font-bold uppercase">New York Headquarters</div>
              <div class="text-lg font-bold font-heading mt-1">Forest Hills, NY</div>
              <div class="text-xs text-slate-300 mt-0.5">US CPA Supervision &amp; Client Relations</div>
            </div>
            <div class="sm:border-r sm:border-emerald-800/60 sm:pr-6">
              <div class="text-xs text-emerald-400 font-bold uppercase">Global Tech Center</div>
              <div class="text-lg font-bold font-heading mt-1">Hyderabad, India</div>
              <div class="text-xs text-slate-300 mt-0.5">24/7 Overnight Ledger Processing</div>
            </div>
            <div class="text-center sm:text-left">
              <div class="text-xs text-emerald-400 font-bold uppercase">Compliance Standard</div>
              <div class="text-lg font-bold font-heading mt-1">US GAAP &amp; IRS</div>
              <div class="text-xs text-slate-300 mt-0.5">100% Audit-Ready Financials</div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- DEDICATED ON-PAGE CONSULTATION & LEAD CAPTURE FORM SECTION                -->
    <!-- ========================================================================= -->
    <ConsultationForm />

    <!-- ========================================================================= -->
    <!-- CALL TO ACTION BANNER (WITH HIGH-CONTRAST IMAGE OVERLAY)                  -->
    <!-- ========================================================================= -->
    <section class="py-20 relative overflow-hidden bg-emerald-950 text-white" style="background: linear-gradient(135deg, #022c22 0%, #064e3b 60%, #0f172a 100%) !important;">
      <!-- Subtle architectural background image -->
      <img src="/images/ny-skyline.jpg" alt="New York Corporate Financial District" class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-25" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <span class="inline-block px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold uppercase tracking-wider">
          Start With Confidence
        </span>

        <h2 class="text-3xl sm:text-5xl font-extrabold font-heading text-white max-w-3xl mx-auto leading-tight drop-shadow-md">
          Ready For Audit-Ready Books and 50% Lower Overhead?
        </h2>

        <p class="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Schedule a complimentary 30-minute consultation with a senior Prudent accountant. We'll analyze your current accounting setup and show you exact areas to reduce cost.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button @click="openConsultationModal" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-base shadow-xl transition-all">
            Book Your Free Financial Diagnostic
          </button>
          <a href="tel:+17182614001" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-900/60 hover:bg-emerald-900 text-white font-semibold text-base border border-emerald-400/30 transition-all flex items-center justify-center gap-2">
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