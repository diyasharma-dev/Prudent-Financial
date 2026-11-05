<template>
  <div>
    <!-- Header -->
    <section class="py-16 lg:py-24 bg-gradient-to-b from-emerald-900 to-navy-950 text-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          Direct Accounting Support
        </span>
        <h1 class="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
          Connect With Our Senior Accounting Team
        </h1>
        <p class="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Headquartered in Forest Hills, New York with 24/7 technical delivery hubs in India. We are here to answer your questions and optimize your books.
        </p>
      </div>
    </section>

    <!-- Main Contact Section -->
    <section class="py-20 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-12">
          
          <!-- Office Cards -->
          <div class="lg:col-span-5 space-y-6">
            
            <div class="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">NY</div>
                <div>
                  <h3 class="font-heading font-bold text-slate-900 text-lg">USA Headquarters</h3>
                  <span class="text-xs text-slate-500">Corporate & Client Relations</span>
                </div>
              </div>
              <p class="text-sm text-slate-600 leading-relaxed">
                113-25 Queens Blvd, Suite 114<br>
                Forest Hills, NY 11375, USA
              </p>
              <div class="space-y-1.5 pt-2 border-t border-slate-200 text-xs text-slate-700">
                <p><strong>Tel:</strong> <a href="tel:+17182614001" class="text-emerald-700 font-semibold hover:underline">+1 (718) 261-4001</a></p>
                <p><strong>Fax:</strong> +1 (718) 504-6013</p>
                <p><strong>Email:</strong> <a href="mailto:info@prufininc.com" class="text-emerald-700 font-semibold hover:underline">info@prufininc.com</a></p>
              </div>
            </div>

            <div class="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">IN</div>
                <div>
                  <h3 class="font-heading font-bold text-slate-900 text-lg">India Delivery Center</h3>
                  <span class="text-xs text-slate-500">24/7 Processing Operations</span>
                </div>
              </div>
              <p class="text-sm text-slate-600 leading-relaxed">
                Plot # A-32, 2nd Floor, Opp: Film Nagar Co-Op Society<br>
                Road # 5, Film Nagar, Jubilee Hills<br>
                Hyderabad - 500033, India
              </p>
              <div class="space-y-1.5 pt-2 border-t border-slate-200 text-xs text-slate-700">
                <p><strong>Tel:</strong> <a href="tel:+914023543811" class="text-emerald-700 font-semibold hover:underline">+91 40 2354 3811</a></p>
                <p><strong>Operations:</strong> Continuous 24/7 ledger processing</p>
              </div>
            </div>

          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6">
            
            <div v-if="submittedRefId" class="py-12 text-center space-y-4">
              <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto text-3xl font-bold">
                ✓
              </div>
              <div>
                <span class="inline-block px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
                  Reference: {{ submittedRefId }}
                </span>
                <h3 class="text-2xl font-bold font-heading text-slate-900 mt-2">Inquiry Successfully Transmitted</h3>
                <p class="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto mt-2 leading-relaxed">
                  Thank you, <strong>{{ form.name }}</strong>. Your inquiry has been routed to our Forest Hills senior accounting team. We will call you within 2 business hours.
                </p>
              </div>
              <button @click="submittedRefId = ''" class="px-6 py-2.5 rounded-xl bg-emerald-700 text-white font-semibold text-xs hover:bg-emerald-800 shadow">
                Send Another Message
              </button>
            </div>

            <div v-else class="space-y-6">
              <div>
                <h3 class="text-2xl font-bold font-heading text-slate-900">Send an Inquiry to Prudent</h3>
                <p class="text-slate-500 text-xs sm:text-sm mt-1">Please provide some details regarding your accounting requirements and our team will get back to you promptly.</p>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input v-model="form.name" type="text" required placeholder="Robert Davis" class="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50">
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                    <input v-model="form.email" type="email" required placeholder="robert@company.com" class="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50">
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input v-model="form.phone" type="tel" required placeholder="+1 (718) 000-0000" class="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50">
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Service Needed</label>
                    <select v-model="form.service" class="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                      <option>Outsourced Bookkeeping & Accounting</option>
                      <option>Financial Analysis & Managerial Statements</option>
                      <option>QuickBooks Setup, Migration & Cleanup</option>
                      <option>Budgetary & Cash Flow Analysis</option>
                      <option>Tax Preparation & Advisory</option>
                      <option>Virtual CFO / Controller Consulting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1">Your Message / Requirements</label>
                  <textarea v-model="form.notes" rows="4" placeholder="Tell us about your company, current accounting software, and what challenges you are looking to solve..." class="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"></textarea>
                </div>

                <button type="submit" :disabled="isSubmitting" class="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2">
                  <span v-if="!isSubmitting">Send Message Directly to Accounting Team →</span>
                  <span v-else>Transmitting...</span>
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useApp } from '@/composables/useApp';

const { submitLead } = useApp();

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: 'Outsourced Bookkeeping & Accounting',
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
