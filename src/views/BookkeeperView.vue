<template>
  <div class="bg-slate-100 min-h-screen">
    <!-- Top banner -->
    <div class="bg-navy-950 text-white py-12 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span class="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase">
            Proprietary Client System
          </span>
          <h1 class="text-3xl font-extrabold font-heading text-white mt-1">
            247Bookkeeper™ Live Executive Portal
          </h1>
          <p class="text-xs sm:text-sm text-slate-300">
            Real-time managerial reporting, daily cash positions, and automated reconciliation feeds.
          </p>
        </div>
        <div class="flex items-center gap-3">
          <router-link to="/247ecabinet" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium border border-slate-700">
            Switch to 247eCabinet™ Vault
          </router-link>
          <button @click="openConsultationModal" class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow">
            Deploy for My Business
          </button>
        </div>
      </div>
    </div>

    <!-- Live Dashboard Interface -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <!-- Top Stats Row -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500 uppercase">Cash & Equivalents</span>
            <span class="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Live</span>
          </div>
          <div class="text-3xl font-extrabold font-heading text-slate-900">$384,920</div>
          <p class="text-xs text-emerald-600 font-medium">↑ +$48,150 vs previous month</p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500 uppercase">Gross Revenue (MTD)</span>
            <span class="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">Month 11</span>
          </div>
          <div class="text-3xl font-extrabold font-heading text-slate-900">$189,450</div>
          <p class="text-xs text-blue-600 font-medium">On track for $2.4M AOP Target</p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500 uppercase">Accounts Payable (AP)</span>
            <span class="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">4 Due</span>
          </div>
          <div class="text-3xl font-extrabold font-heading text-slate-900">$21,800</div>
          <p class="text-xs text-slate-500 font-medium">Next scheduled run: Friday</p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500 uppercase">Accounts Receivable</span>
            <span class="text-xs px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold">96% Current</span>
          </div>
          <div class="text-3xl font-extrabold font-heading text-slate-900">$48,120</div>
          <p class="text-xs text-emerald-600 font-medium">Average DSO: 24 Days</p>
        </div>
      </div>

      <!-- Interactive Tabbed Views -->
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        
        <div class="p-6 border-b border-slate-200 flex flex-wrap justify-between items-center gap-4">
          <div class="flex items-center gap-2">
            <button @click="activeTab = 'transactions'" class="px-4 py-2 rounded-xl text-xs font-bold transition-colors" :class="activeTab === 'transactions' ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'">
              Recent Ledger Transactions (Overnight Reconciled)
            </button>
            <button @click="activeTab = 'bills'" class="px-4 py-2 rounded-xl text-xs font-bold transition-colors" :class="activeTab === 'bills' ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'">
              AP Approval Queue
            </button>
          </div>
          <div class="text-xs text-slate-400">
            Audit status: <strong class="text-emerald-700">Verified by Senior CPA</strong>
          </div>
        </div>

        <!-- Transactions Tab -->
        <div v-if="activeTab === 'transactions'" class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="bg-slate-50 text-slate-500 uppercase font-semibold border-b border-slate-200">
                <th class="p-4">Date</th>
                <th class="p-4">Description</th>
                <th class="p-4">Category / Chart of Accounts</th>
                <th class="p-4">Account Feed</th>
                <th class="p-4 text-right">Amount</th>
                <th class="p-4 text-center">Reconciliation</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-700">
              <tr v-for="(tx, idx) in transactions" :key="idx" class="hover:bg-slate-50/80">
                <td class="p-4 font-mono text-slate-500">{{ tx.date }}</td>
                <td class="p-4 font-semibold text-slate-900">{{ tx.desc }}</td>
                <td class="p-4"><span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700">{{ tx.cat }}</span></td>
                <td class="p-4 text-slate-500">{{ tx.feed }}</td>
                <td class="p-4 text-right font-mono font-bold" :class="tx.isIncome ? 'text-emerald-700' : 'text-slate-900'">
                  {{ tx.amount }}
                </td>
                <td class="p-4 text-center">
                  <span class="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full text-[11px]">
                    <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                    <span>Balanced</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Bills Tab -->
        <div v-else class="p-6 space-y-4">
          <div class="text-xs text-slate-600 mb-2">Review vendor bills matched by Prudent against your purchase orders before authorization:</div>
          <div class="space-y-3">
            <div v-for="(bill, i) in bills" :key="i" class="p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-50">
              <div>
                <span class="text-xs text-slate-500">Invoice #{{ bill.inv }} • Due in {{ bill.due }}</span>
                <h4 class="font-bold text-slate-900 text-sm mt-0.5">{{ bill.vendor }}</h4>
                <span class="text-xs text-slate-500">{{ bill.desc }}</span>
              </div>
              <div class="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <div class="text-right">
                  <div class="font-mono font-bold text-slate-900 text-base">${{ bill.amount }}</div>
                  <span class="text-[11px] text-emerald-700">3-Way Matched</span>
                </div>
                <button @click="approveBill(i)" :disabled="bill.approved" class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5" :class="bill.approved ? 'bg-slate-200 text-slate-500 cursor-not-allowed' : 'bg-emerald-700 text-white hover:bg-emerald-800'">
                  <span v-if="bill.approved" class="flex items-center gap-1">
                    <span>Approved</span>
                    <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                  </span>
                  <span v-else>Approve for Payment</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useApp } from '@/composables/useApp';

const { openConsultationModal } = useApp();

const activeTab = ref('transactions');

const transactions = [
  { date: 'Nov 04, 2026', desc: 'Stripe Merchant Settlement', cat: 'Operating Revenue', feed: 'Chase Checking (...4089)', amount: '+$14,820.00', isIncome: true },
  { date: 'Nov 04, 2026', desc: 'Amazon Web Services (Cloud Hosting)', cat: 'Software & Infrastructure', feed: 'Amex Business (...9102)', amount: '-$1,248.50', isIncome: false },
  { date: 'Nov 03, 2026', desc: 'Client Retainer Wire - Sterling LLC', cat: 'Professional Fees', feed: 'Chase Checking (...4089)', amount: '+$8,500.00', isIncome: true },
  { date: 'Nov 03, 2026', desc: 'ADP Payroll Direct Deposit Run', cat: 'Payroll & Taxes', feed: 'Chase Payroll (...1104)', amount: '-$19,430.00', isIncome: false },
  { date: 'Nov 02, 2026', desc: 'Office Lease - Forest Hills Queens', cat: 'Occupancy / Rent', feed: 'Chase Checking (...4089)', amount: '-$4,500.00', isIncome: false },
];

const bills = ref([
  { inv: 'INV-8821', vendor: 'Global Logistics Supply Corp', desc: 'Freight and inventory handling', due: '4 days', amount: '3,840.00', approved: false },
  { inv: 'INV-4912', vendor: 'Apex Industrial Equipment', desc: 'Machinery maintenance lease', due: '8 days', amount: '1,450.00', approved: false },
  { inv: 'INV-1033', vendor: 'Delta Tech Software', desc: 'Annual enterprise ERP seat licenses', due: '12 days', amount: '4,200.00', approved: false },
]);

function approveBill(idx) {
  bills.value[idx].approved = true;
}
</script>
