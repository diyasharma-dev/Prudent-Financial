<template>
  <section id="consultation-form-section" class="py-20 bg-white border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="bg-gradient-to-br from-slate-900 via-navy-950 to-emerald-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
        
        <!-- Subtle decorative glow -->
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <!-- Left Column: Value Proposition & Direct Contact -->
          <div class="lg:col-span-6 space-y-6">
            <span class="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-emerald-400/30">
              Free 30-Minute Financial Diagnostic
            </span>

            <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white leading-tight">
              Get an Expert Assessment of Your Accounting & Exact Overhead Savings
            </h2>

            <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
              Schedule a complimentary, confidential 30-minute consultation with a senior Prudent accountant. We will review your current bookkeeping system, identify cost-reduction opportunities, and outline a custom fixed-fee proposal.
            </p>

            <div class="space-y-3 pt-2">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                <div class="text-xs sm:text-sm text-slate-200">
                  <strong>QuickBooks & Chart of Accounts Audit:</strong> We analyze error patterns, un-reconciled items, and software bottlenecks.
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                <div class="text-xs sm:text-sm text-slate-200">
                  <strong>Transparent Fixed-Rate Quote:</strong> Predictable monthly billing with zero employee overhead or hidden software charges.
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                <div class="text-xs sm:text-sm text-slate-200">
                  <strong>100% Confidential Under NDA:</strong> Your sensitive financial figures are strictly protected under bank-grade security.
                </div>
              </div>
            </div>

            <!-- Direct Contact Box -->
            <div class="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div class="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span class="text-emerald-400 font-semibold block">USA Headquarters</span>
                <a href="tel:+17182614001" class="text-white hover:text-emerald-300 font-bold block">+1 (718) 261-4001</a>
                <span class="text-slate-400 text-[11px] block">Forest Hills, NY 11375</span>
              </div>
              <div class="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span class="text-emerald-400 font-semibold block">Email Inquiries</span>
                <a href="mailto:info@prufininc.com" class="text-white hover:text-emerald-300 font-bold block">info@prufininc.com</a>
                <span class="text-slate-400 text-[11px] block">Rapid Response Guarantee</span>
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive Consultation Inquiry Form -->
          <div class="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 text-slate-800 shadow-2xl border border-slate-200">
            
            <div v-if="submittedRefId" class="py-8 text-center space-y-4">
              <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <div>
                <span class="inline-block px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
                  Ref: {{ submittedRefId }}
                </span>
                <h3 class="text-2xl font-bold font-heading text-slate-900 mt-2">Consultation Request Confirmed</h3>
                <p class="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto mt-2 leading-relaxed">
                  Thank you, <strong>{{ form.name }}</strong>. Your request has been logged into our client queue. A senior accountant will review your file and reach out within 2 business hours.
                </p>
              </div>
              <button @click="submittedRefId = ''" class="px-6 py-2.5 rounded-xl bg-emerald-700 text-white font-semibold text-xs hover:bg-emerald-800">
                Submit Another Inquiry
              </button>
            </div>

            <div v-else>
              <div class="mb-5 space-y-1">
                <h3 class="text-xl font-bold font-heading text-slate-900">Request Your Consultation</h3>
                <p class="text-xs text-slate-500">Fill out your details below and a senior Prudent accountant will contact you within 2 business hours.</p>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-3.5">
                
                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input v-model="form.name" type="text" required placeholder="e.g. Robert Davis" class="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50">
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                    <input v-model="form.email" type="email" required placeholder="robert@company.com" class="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50">
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input v-model="form.phone" type="tel" required placeholder="+1 (718) 000-0000" class="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50">
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Company / Organization</label>
                    <input v-model="form.company" type="text" placeholder="Acme Logistics LLC" class="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50">
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Annual Revenue Range</label>
                    <select v-model="form.revenue" class="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                      <option>$250K - $1M</option>
                      <option>$1M - $5M</option>
                      <option>$5M - $15M</option>
                      <option>$15M - $20M+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1">Primary Need of Interest</label>
                  <select v-model="form.service" class="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                    <option>Complete Outsourced Bookkeeping & E-Accounting</option>
                    <option>Financial Analysis & 13-Week Cash Flow Budgeting</option>
                    <option>QuickBooks System Cleanup & Cloud Migration</option>
                    <option>Virtual CFO & Controller Advisory</option>
                    <option>Business Acquisition / Sale (M&A Advisory)</option>
                    <option>Payroll Processing & Tax Return Compliance</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1">Current Accounting Setup / Notes (Optional)</label>
                  <textarea v-model="form.notes" rows="2" placeholder="e.g. Currently on QuickBooks Desktop, need catch-up reconciliations and monthly financial statements..." class="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"></textarea>
                </div>

                <button type="submit" :disabled="isSubmitting" class="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-lg shadow-emerald-700/20 transition-all flex items-center justify-center gap-2">
                  <span v-if="!isSubmitting">Request Free Consultation & Custom Quote</span>
                  <span v-else>Connecting with Accounting Queue...</span>
                  <svg v-if="!isSubmitting" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>

                <div class="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1 text-center">
                  <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                  <span>256-Bit SSL Encrypted • 100% Confidential Under NDA</span>
                </div>

              </form>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useApp } from '@/composables/useApp';

const { submitLead } = useApp();

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  revenue: '$1M - $5M',
  service: 'Complete Outsourced Bookkeeping & E-Accounting',
  notes: '',
});

const isSubmitting = ref(false);
const submittedRefId = ref('');

async function handleSubmit() {
  isSubmitting.value = true;
  const refId = await submitLead({ ...form });
  submittedRefId.value = refId;
  isSubmitting.value = false;
}
</script>
