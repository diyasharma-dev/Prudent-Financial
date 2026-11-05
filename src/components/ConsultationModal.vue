<template>
  <div v-if="isConsultationModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay">
    <div class="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
      
      <!-- Close button -->
      <button @click="closeConsultationModal" aria-label="Close Modal" class="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>

      <!-- Confirmation state -->
      <div v-if="submittedRefId" class="text-center py-6 space-y-4">
        <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
          <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
        </div>
        <div>
          <span class="inline-block px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
            Ref: {{ submittedRefId }}
          </span>
          <h3 class="text-2xl font-bold font-heading text-slate-900 mt-2">Consultation Request Confirmed</h3>
          <p class="text-slate-600 text-xs sm:text-sm max-w-xs mx-auto mt-2 leading-relaxed">
            Thank you, <strong>{{ form.name }}</strong>. Your inquiry has been routed to our Forest Hills senior accounting team. We will call you within 2 business hours.
          </p>
        </div>
        <button @click="resetAndClose" class="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800">
          Done
        </button>
      </div>

      <!-- Form state -->
      <div v-else>
        <div class="text-center mb-5">
          <img src="/images/prufininc-logo-transparent.png" alt="Prudent Financial Services, Inc." class="h-14 w-auto mx-auto object-contain mb-3" />
          <span class="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-1">Free 30-Min Diagnostic</span>
          <h3 class="text-2xl font-bold font-heading text-slate-900">Book Your Discovery Call</h3>
          <p class="text-xs text-slate-500 mt-1">A senior Prudent accountant will review your current bookkeeping and show you exact savings.</p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-3.5">
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
            <input v-model="form.name" type="text" required placeholder="John Miller" class="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50">
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
              <input v-model="form.email" type="email" required placeholder="john@company.com" class="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
              <input v-model="form.phone" type="tel" required placeholder="+1 (718) 000-0000" class="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50">
            </div>
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

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Primary Focus Area</label>
            <select v-model="form.service" class="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
              <option>Complete Outsourced Bookkeeping</option>
              <option>Financial Analysis & 13-Week Cash Flow</option>
              <option>QuickBooks Cleanup & Migration</option>
              <option>Virtual CFO / Controller Services</option>
              <option>Tax Preparation & Compliance</option>
            </select>
          </div>

          <button type="submit" :disabled="isSubmitting" class="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2">
            <span v-if="!isSubmitting">Submit Consultation Request →</span>
            <span v-else>Connecting with Accounting Queue...</span>
          </button>

          <p class="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            <span>256-Bit Encrypted • Strictly Confidential Under NDA</span>
          </p>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useApp } from '@/composables/useApp';

const { isConsultationModalOpen, closeConsultationModal, submitLead } = useApp();

const form = reactive({
  name: '',
  email: '',
  phone: '',
  revenue: '$1M - $5M',
  service: 'Complete Outsourced Bookkeeping',
});

const isSubmitting = ref(false);
const submittedRefId = ref('');

async function handleSubmit() {
  isSubmitting.value = true;
  const refId = await submitLead({ ...form });
  submittedRefId.value = refId;
  isSubmitting.value = false;
}

function resetAndClose() {
  form.name = '';
  form.email = '';
  form.phone = '';
  submittedRefId.value = '';
  closeConsultationModal();
}
</script>
