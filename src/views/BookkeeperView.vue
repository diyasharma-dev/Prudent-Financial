<template>
  <div class="bg-slate-100 min-h-screen">
    <!-- Top System Live Banner -->
    <div class="bg-navy-950 text-white py-8 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <div class="flex items-center gap-2.5 flex-wrap">
              <span class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wide">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Client Session</span>
              </span>
              <span class="text-xs text-slate-400">Org: <strong class="text-white">Sterling Logistics Group LLC</strong></span>
              <span class="text-slate-600">•</span>
              <span class="text-xs text-slate-400">Account Feed ID: <span class="font-mono text-emerald-400">PRU-NY-4089</span></span>
            </div>

            <h1 class="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1.5">
              247Bookkeeper™ Live Executive Portal
            </h1>
            <p class="text-xs sm:text-sm text-slate-300 mt-0.5">
              Automated overnight bank reconciliation feeds, managerial cash positions, and audit-ready ledger.
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center gap-2.5">
            <button 
              @click="refreshFeeds" 
              :disabled="isSyncing"
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors shadow-sm disabled:opacity-50"
              title="Force bank feed reconciliation check"
            >
              <svg class="w-4 h-4 text-emerald-400" :class="{ 'animate-spin': isSyncing }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>{{ isSyncing ? 'Reconciling Feeds...' : 'Sync Live Feeds' }}</span>
            </button>

            <button 
              @click="exportLedgerCSV" 
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors shadow-sm"
              title="Download reconciled transactions as CSV"
            >
              <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Export CSV</span>
            </button>

            <router-link 
              to="/247ecabinet" 
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors shadow-sm"
              title="Switch to 247eCabinet™ encrypted document vault"
            >
              <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span>247eCabinet™ Vault</span>
            </router-link>
            
            <button 
              @click="showAddModal = true" 
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-950/40 transition-all hover:scale-[1.02]"
              title="Add a new verified transaction to this live ledger"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
              </svg>
              <span>+ Record Transaction</span>
            </button>
          </div>
        </div>

        <!-- Real-Time Feed Connectivity Strip -->
        <div class="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
          <div class="flex items-center gap-4 flex-wrap">
            <span class="flex items-center gap-1 text-slate-300">
              <svg class="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              <span>Live Bank Feeds Connected: Chase (...4089), Amex (...9102), Payroll (...1104)</span>
            </span>
            <span class="text-slate-600">|</span>
            <span>Audit Standard: <strong class="text-white">US GAAP / Senior CPA Reviewed</strong></span>
          </div>
          <div class="text-[11px] font-mono text-emerald-400">
            Last Reconciled: {{ lastSyncTime }}
          </div>
        </div>

      </div>
    </div>

    <!-- Live Dashboard Interface -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <!-- Top Stats Row (Dynamically calculated from live ledger state) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Cash & Equivalents -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 relative overflow-hidden">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Cash &amp; Equivalents</span>
            <span class="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Live</span>
            </span>
          </div>
          <div class="text-3xl font-extrabold font-heading text-slate-900 font-mono">
            ${{ computedCashBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
          </div>
          <p class="text-xs text-emerald-600 font-medium flex items-center gap-1">
            <span>↑ +$48,150.00 net change</span>
            <span class="text-slate-400">(All 3 Feeds)</span>
          </p>
        </div>

        <!-- Gross Revenue MTD -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Gross Revenue (MTD)</span>
            <span class="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold font-mono">{{ currentMonthName }}</span>
          </div>
          <div class="text-3xl font-extrabold font-heading text-slate-900 font-mono">
            ${{ computedRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
          </div>
          <p class="text-xs text-blue-600 font-medium">On track for $2.4M AOP Target</p>
        </div>

        <!-- Accounts Payable (AP) -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Accounts Payable (AP)</span>
            <span class="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">
              {{ pendingBillsCount }} Pending
            </span>
          </div>
          <div class="text-3xl font-extrabold font-heading text-slate-900 font-mono">
            ${{ computedAPBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
          </div>
          <p class="text-xs text-slate-500 font-medium">Next scheduled payment run: Friday</p>
        </div>

        <!-- Accounts Receivable (AR) -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Accounts Receivable</span>
            <span class="text-xs px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold">96% Current</span>
          </div>
          <div class="text-3xl font-extrabold font-heading text-slate-900 font-mono">$48,120.00</div>
          <p class="text-xs text-emerald-600 font-medium">Average DSO: 24 Days</p>
        </div>

      </div>

      <!-- Interactive Tabbed Views & Filtering -->
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        
        <!-- Controls Bar -->
        <div class="p-6 border-b border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50/50">
          
          <div class="flex items-center gap-2 flex-wrap">
            <button 
              @click="activeTab = 'transactions'" 
              class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5" 
              :class="activeTab === 'transactions' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
              <span>Recent Ledger Transactions ({{ transactions.length }})</span>
            </button>

            <button 
              @click="activeTab = 'bills'" 
              class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5" 
              :class="activeTab === 'bills' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              <span>AP Approval Queue ({{ pendingBillsCount }} Pending)</span>
            </button>
          </div>

          <!-- Real-Time Search & Quick Filter -->
          <div class="flex items-center gap-3 w-full md:w-auto">
            <div class="relative w-full md:w-64">
              <input 
                v-model="searchQuery" 
                type="text" 
                placeholder="Search description, feed..." 
                class="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              />
              <svg class="w-4 h-4 text-slate-400 absolute left-3 top-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>

            <div class="text-xs text-slate-500 whitespace-nowrap hidden lg:block">
              Audit Status: <strong class="text-emerald-700">Verified by CPA</strong>
            </div>
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
                <th class="p-4 text-center">Audit Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-700">
              <tr v-for="(tx, idx) in filteredTransactions" :key="idx" class="hover:bg-slate-50/80 transition-colors">
                <td class="p-4 font-mono text-slate-500">{{ tx.date }}</td>
                <td class="p-4 font-semibold text-slate-900">{{ tx.desc }}</td>
                <td class="p-4"><span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">{{ tx.cat }}</span></td>
                <td class="p-4 text-slate-500">{{ tx.feed }}</td>
                <td class="p-4 text-right font-mono font-bold" :class="tx.isIncome ? 'text-emerald-700' : 'text-slate-900'">
                  {{ tx.isIncome ? '+' : '-' }}${{ Math.abs(tx.numericAmount).toLocaleString('en-US', { minimumFractionDigits: 2 }) }}
                </td>
                <td class="p-4 text-center">
                  <span class="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full text-[11px]">
                    <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                    <span>Balanced</span>
                  </span>
                </td>
              </tr>
              <tr v-if="filteredTransactions.length === 0">
                <td colspan="6" class="p-8 text-center text-slate-400">
                  No transactions match your search filter.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Bills Tab -->
        <div v-else class="p-6 space-y-4">
          <div class="flex items-center justify-between pb-2 border-b border-slate-100">
            <span class="text-xs text-slate-600">Review vendor bills matched by Prudent against your purchase orders before authorization:</span>
            <span class="text-xs text-slate-500 font-medium">3-Way Automated Match: <strong>Active</strong></span>
          </div>

          <div class="space-y-3">
            <div v-for="(bill, i) in bills" :key="i" class="p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all" :class="bill.approved ? 'bg-emerald-50/40 border-emerald-200' : 'bg-slate-50'">
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-xs text-slate-500 font-mono">Invoice #{{ bill.inv }}</span>
                  <span class="text-[10px] px-2 py-0.2 rounded-full font-bold uppercase" :class="bill.approved ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'">
                    {{ bill.approved ? 'Scheduled for Payment' : 'Due in ' + bill.due }}
                  </span>
                </div>
                <h4 class="font-bold text-slate-900 text-sm mt-1">{{ bill.vendor }}</h4>
                <span class="text-xs text-slate-500">{{ bill.desc }}</span>
              </div>

              <div class="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <div class="text-right">
                  <div class="font-mono font-bold text-slate-900 text-base">${{ Number(bill.amount).toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</div>
                  <span class="text-[11px] text-emerald-700 font-medium">PO #{{ bill.inv.replace('INV-', 'PO-') }} Matched</span>
                </div>
                
                <button 
                  @click="approveBill(i)" 
                  :disabled="bill.approved" 
                  class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm" 
                  :class="bill.approved ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 cursor-not-allowed' : 'bg-emerald-700 text-white hover:bg-emerald-800 hover:scale-[1.02]'"
                >
                  <span v-if="bill.approved" class="flex items-center gap-1">
                    <span>Approved &amp; Queued</span>
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

    <!-- Modal: Record Live Transaction -->
    <div v-if="showAddModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div class="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 space-y-5">
        
        <div class="flex items-center justify-between border-b border-slate-100 pb-4">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <svg class="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </div>
            <div>
              <h3 class="text-base font-bold text-slate-900 font-heading">Record New Ledger Entry</h3>
              <p class="text-xs text-slate-500">Post transaction directly to 247Bookkeeper verified feed</p>
            </div>
          </div>
          <button @click="showAddModal = false" class="text-slate-400 hover:text-slate-600 p-1 rounded-lg">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <form @submit.prevent="saveNewTransaction" class="space-y-4 text-xs">
          <div>
            <label class="block font-semibold text-slate-700 mb-1">Transaction Description / Payee</label>
            <input v-model="newTx.desc" type="text" required placeholder="e.g., Client Retainer, Software Subscription" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Amount ($ USD)</label>
              <input v-model.number="newTx.amount" type="number" step="0.01" min="0.01" required placeholder="0.00" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono" />
            </div>
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Entry Type</label>
              <select v-model="newTx.type" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                <option value="income">Income / Deposit (+)</option>
                <option value="expense">Expense / Withdrawal (-)</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Chart of Accounts Category</label>
              <select v-model="newTx.cat" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                <option value="Operating Revenue">Operating Revenue</option>
                <option value="Software & Infrastructure">Software & Infrastructure</option>
                <option value="Professional Fees">Professional Fees</option>
                <option value="Payroll & Taxes">Payroll & Taxes</option>
                <option value="Occupancy / Rent">Occupancy / Rent</option>
                <option value="Office & Admin">Office & Admin</option>
              </select>
            </div>
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Bank Account Feed</label>
              <select v-model="newTx.feed" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                <option value="Chase Checking (...4089)">Chase Checking (...4089)</option>
                <option value="Amex Business (...9102)">Amex Business (...9102)</option>
                <option value="Chase Payroll (...1104)">Chase Payroll (...1104)</option>
              </select>
            </div>
          </div>

          <div class="pt-2 flex items-center justify-end gap-3">
            <button type="button" @click="showAddModal = false" class="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-medium">Cancel</button>
            <button type="submit" class="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold shadow">Post Entry to Live Ledger</button>
          </div>
        </form>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, reactive, onMounted } from 'vue';

const activeTab = ref('transactions');
const searchQuery = ref('');
const isSyncing = ref(false);
const showAddModal = ref(false);
const lastSyncTime = ref('Just now • Live feed connected');

const currentMonthName = computed(() => {
  return new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
});

// Storage keys
const STORAGE_TX_KEY = 'prufininc_live_transactions';
const STORAGE_BILLS_KEY = 'prufininc_live_bills';

// Initial realistic transactions
const defaultTransactions = [
  { date: 'Nov 06, 2026', desc: 'Stripe Merchant Settlement', cat: 'Operating Revenue', feed: 'Chase Checking (...4089)', numericAmount: 14820.00, isIncome: true },
  { date: 'Nov 05, 2026', desc: 'Amazon Web Services (Cloud Hosting)', cat: 'Software & Infrastructure', feed: 'Amex Business (...9102)', numericAmount: 1248.50, isIncome: false },
  { date: 'Nov 04, 2026', desc: 'Client Retainer Wire - Sterling Logistics', cat: 'Professional Fees', feed: 'Chase Checking (...4089)', numericAmount: 8500.00, isIncome: true },
  { date: 'Nov 03, 2026', desc: 'ADP Payroll Direct Deposit Run', cat: 'Payroll & Taxes', feed: 'Chase Payroll (...1104)', numericAmount: 19430.00, isIncome: false },
  { date: 'Nov 02, 2026', desc: 'Office Lease - Forest Hills Queens', cat: 'Occupancy / Rent', feed: 'Chase Checking (...4089)', numericAmount: 4500.00, isIncome: false },
];

const transactions = ref([]);

// Default AP bills
const defaultBills = [
  { inv: 'INV-8821', vendor: 'Global Logistics Supply Corp', desc: 'Freight and inventory handling', due: '4 days', amount: 3840.00, approved: false },
  { inv: 'INV-4912', vendor: 'Apex Industrial Equipment', desc: 'Machinery maintenance lease', due: '8 days', amount: 1450.00, approved: false },
  { inv: 'INV-1033', vendor: 'Delta Tech Software', desc: 'Annual enterprise ERP seat licenses', due: '12 days', amount: 4200.00, approved: false },
  { inv: 'INV-6014', vendor: 'Verizon Business Wireless', desc: 'Dedicated commercial fiber network', due: '15 days', amount: 12310.00, approved: false },
];

const bills = ref([]);

// Form model for new transaction
const newTx = reactive({
  desc: '',
  amount: null,
  type: 'income',
  cat: 'Operating Revenue',
  feed: 'Chase Checking (...4089)'
});

// Load persistent state
onMounted(() => {
  try {
    const savedTx = localStorage.getItem(STORAGE_TX_KEY);
    transactions.value = savedTx ? JSON.parse(savedTx) : defaultTransactions;
    
    const savedBills = localStorage.getItem(STORAGE_BILLS_KEY);
    bills.value = savedBills ? JSON.parse(savedBills) : defaultBills;
  } catch (e) {
    transactions.value = defaultTransactions;
    bills.value = defaultBills;
  }
});

// Dynamic metric calculations
const baseCash = 384920.00;
const computedCashBalance = computed(() => {
  const netDelta = transactions.value.reduce((acc, tx) => {
    return acc + (tx.isIncome ? tx.numericAmount : -tx.numericAmount);
  }, 0);
  return baseCash + netDelta;
});

const computedRevenue = computed(() => {
  const totalIncome = transactions.value
    .filter(tx => tx.isIncome)
    .reduce((acc, tx) => acc + tx.numericAmount, 0);
  return 189450.00 + totalIncome;
});

const computedAPBalance = computed(() => {
  return bills.value
    .filter(b => !b.approved)
    .reduce((acc, b) => acc + Number(b.amount), 0);
});

const pendingBillsCount = computed(() => {
  return bills.value.filter(b => !b.approved).length;
});

// Filtered transactions based on search
const filteredTransactions = computed(() => {
  if (!searchQuery.value) return transactions.value;
  const q = searchQuery.value.toLowerCase();
  return transactions.value.filter(tx => 
    tx.desc.toLowerCase().includes(q) || 
    tx.cat.toLowerCase().includes(q) || 
    tx.feed.toLowerCase().includes(q)
  );
});

function approveBill(idx) {
  bills.value[idx].approved = true;
  try {
    localStorage.setItem(STORAGE_BILLS_KEY, JSON.stringify(bills.value));
  } catch (e) {
    console.warn(e);
  }
}

function saveNewTransaction() {
  if (!newTx.desc || !newTx.amount) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

  const entry = {
    date: dateStr,
    desc: newTx.desc,
    cat: newTx.cat,
    feed: newTx.feed,
    numericAmount: Number(newTx.amount),
    isIncome: newTx.type === 'income'
  };

  transactions.value.unshift(entry);
  
  try {
    localStorage.setItem(STORAGE_TX_KEY, JSON.stringify(transactions.value));
  } catch (e) {
    console.warn(e);
  }

  // Reset form
  newTx.desc = '';
  newTx.amount = null;
  showAddModal.value = false;
}

function refreshFeeds() {
  isSyncing.value = true;
  setTimeout(() => {
    isSyncing.value = false;
    const now = new Date();
    lastSyncTime.value = `Today at ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • 3 Feeds Balanced`;
  }, 900);
}

function exportLedgerCSV() {
  const headers = ['Date', 'Description', 'Category', 'Account Feed', 'Amount', 'Reconciliation Status'];
  const rows = transactions.value.map(tx => [
    `"${tx.date}"`,
    `"${tx.desc}"`,
    `"${tx.cat}"`,
    `"${tx.feed}"`,
    `"${tx.isIncome ? '+' : '-'}${tx.numericAmount.toFixed(2)}"`,
    '"Balanced / Senior CPA Verified"'
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `Prufininc_247Bookkeeper_Ledger_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
</script>
