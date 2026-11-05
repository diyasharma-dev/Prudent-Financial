<template>
  <div class="bg-slate-100 min-h-screen">
    <!-- Top banner -->
    <div class="bg-navy-950 text-white py-12 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span class="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase">
            Encrypted Document Repository
          </span>
          <h1 class="text-3xl font-extrabold font-heading text-white mt-1">
            247eCabinet™ Live Document Vault
          </h1>
          <p class="text-xs sm:text-sm text-slate-300">
            256-Bit SSL/TLS AES cloud document storage. Instant search, optical OCR indexing, and SOC-2 compliant audit trails.
          </p>
        </div>
        <div class="flex items-center gap-3">
          <router-link to="/247bookkeeper" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium border border-slate-700">
            Switch to 247Bookkeeper™
          </router-link>
          <button @click="openConsultationModal" class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow">
            Deploy Vault for My Company
          </button>
        </div>
      </div>
    </div>

    <!-- Vault Application Shell -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid lg:grid-cols-12 min-h-[580px]">
        
        <!-- Sidebar Folders -->
        <div class="lg:col-span-4 border-r border-slate-200 p-6 space-y-6 bg-slate-50">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Document Folders</span>
            <span class="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono font-bold">256-Bit AES</span>
          </div>

          <div class="space-y-1 text-xs">
            <button v-for="folder in folders" :key="folder.id" @click="activeFolder = folder.id" class="w-full text-left p-3 rounded-xl flex items-center justify-between font-medium transition-colors" :class="activeFolder === folder.id ? 'bg-emerald-700 text-white shadow-sm font-semibold' : 'text-slate-700 hover:bg-slate-200/60'">
              <span class="flex items-center gap-2">
                <span>{{ folder.icon }}</span>
                <span>{{ folder.name }}</span>
              </span>
              <span class="text-[11px] opacity-75 font-mono">({{ folder.count }})</span>
            </button>
          </div>

          <div class="pt-4 border-t border-slate-200 space-y-3">
            <span class="text-xs font-bold text-slate-700 block">Instant OCR Search</span>
            <input v-model="searchQuery" type="text" placeholder="Search invoices, receipts, tax..." class="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
          </div>

          <div class="p-4 rounded-2xl bg-emerald-950 text-white text-xs space-y-1">
            <span class="text-emerald-400 font-bold block">Paperless Security</span>
            <p class="text-slate-300 leading-relaxed text-[11px]">
              Every document is encrypted both in transit and at rest with geo-redundant backups.
            </p>
          </div>
        </div>

        <!-- Files List & Preview -->
        <div class="lg:col-span-8 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 class="text-lg font-bold font-heading text-slate-900 capitalize">{{ activeFolder.replace('-', ' ') }}</h3>
                <span class="text-xs text-slate-500">{{ filteredDocs.length }} documents stored in this secure partition</span>
              </div>
              <button @click="simulateUpload" class="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors">
                <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                <span>Upload Document</span>
              </button>
            </div>

            <div class="space-y-2">
              <div v-for="(doc, idx) in filteredDocs" :key="idx" class="p-4 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 flex items-center justify-between text-xs transition-colors">
                <div class="flex items-center gap-3">
                  <span class="text-xl">📄</span>
                  <div>
                    <h4 class="font-bold text-slate-900">{{ doc.title }}</h4>
                    <span class="text-slate-400 text-[11px]">{{ doc.size }} • Uploaded {{ doc.date }} by Prudent NY Team</span>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px] uppercase">Verified</span>
                  <button @click="previewDoc(doc)" class="text-emerald-700 font-bold hover:underline">
                    View / Download
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex items-center justify-between">
            <span>Client ID: <strong>PRU-CLIENT-7810</strong></span>
            <span>Current Encryption: <strong>AES-256 GCM</strong></span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useApp } from '@/composables/useApp';

const { openConsultationModal } = useApp();

const activeFolder = ref('tax-filings');
const searchQuery = ref('');

const folders = [
  { id: 'tax-filings', name: 'Federal & State Tax Filings', icon: '📁', count: 3 },
  { id: 'financial-statements', name: 'Managerial Financial Statements', icon: '📊', count: 4 },
  { id: 'bank-statements', name: 'Reconciled Bank Statements', icon: '🏦', count: 3 },
  { id: 'vendor-bills', name: 'Accounts Payable & Vendor Bills', icon: '🧾', count: 3 },
];

const allDocuments = ref([
  { folder: 'tax-filings', title: '2025 Form 1120-S Federal Income Tax Return.pdf', size: '2.4 MB', date: 'Oct 14, 2026' },
  { folder: 'tax-filings', title: '2025 New York State Corporate Tax Filing (CT-3).pdf', size: '1.8 MB', date: 'Oct 14, 2026' },
  { folder: 'tax-filings', title: 'Form 941 Employer Quarterly Federal Tax Q3.pdf', size: '480 KB', date: 'Oct 31, 2026' },

  { folder: 'financial-statements', title: 'October 2026 Monthly Managerial P&L and Balance Sheet.pdf', size: '1.2 MB', date: 'Nov 04, 2026' },
  { folder: 'financial-statements', title: 'Q3 2026 Comprehensive Financial Performance Review.pdf', size: '3.1 MB', date: 'Oct 12, 2026' },
  { folder: 'financial-statements', title: '13-Week Rolling Cash Flow & Runway Forecast Model.xlsx', size: '890 KB', date: 'Nov 01, 2026' },
  { folder: 'financial-statements', title: 'Annual Operating Budget vs Actuals Variance Report.pdf', size: '1.6 MB', date: 'Oct 28, 2026' },

  { folder: 'bank-statements', title: 'Chase Operating Checking Reconciled Statement Oct 2026.pdf', size: '640 KB', date: 'Nov 02, 2026' },
  { folder: 'bank-statements', title: 'Amex Business Card Monthly Expense Summary Oct 2026.pdf', size: '820 KB', date: 'Nov 02, 2026' },
  { folder: 'bank-statements', title: 'Stripe Merchant Gateway Monthly Payout Summary.pdf', size: '410 KB', date: 'Nov 03, 2026' },

  { folder: 'vendor-bills', title: 'AP Invoice #8821 - Global Logistics Supply Corp.pdf', size: '320 KB', date: 'Nov 03, 2026' },
  { folder: 'vendor-bills', title: 'AP Invoice #4912 - Apex Industrial Equipment.pdf', size: '290 KB', date: 'Nov 01, 2026' },
  { folder: 'vendor-bills', title: 'AP Invoice #1033 - Delta Tech Software Licenses.pdf', size: '510 KB', date: 'Oct 29, 2026' },
]);

const filteredDocs = computed(() => {
  return allDocuments.value.filter(d => {
    const matchesFolder = d.folder === activeFolder.value;
    const matchesSearch = !searchQuery.value || d.title.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesFolder && matchesSearch;
  });
});

function previewDoc(doc) {
  alert(`Viewing document: "${doc.title}"\nSecurely loaded from Prudent 247eCabinet encrypted repository.`);
}

function simulateUpload() {
  const newName = prompt('Enter a document title to upload to 247eCabinet:', 'Uploaded Bill - ' + new Date().toLocaleDateString() + '.pdf');
  if (newName) {
    allDocuments.value.unshift({
      folder: activeFolder.value,
      title: newName,
      size: '1.1 MB',
      date: 'Just now'
    });
  }
}
</script>
