<template>
  <div class="bg-slate-100 min-h-screen">
    <!-- Top banner -->
    <div class="bg-navy-950 text-white py-8 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <div class="flex items-center gap-2.5 flex-wrap">
              <span class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wide">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Vault Session</span>
              </span>
              <span class="text-xs text-slate-400">Vault Partition: <strong class="text-white">Sterling Logistics Group LLC</strong></span>
              <span class="text-slate-600">•</span>
              <span class="text-xs text-slate-400">Client ID: <span class="font-mono text-emerald-400">PRU-CLIENT-7810</span></span>
            </div>

            <h1 class="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1.5">
              247eCabinet™ Live Document Vault
            </h1>
            <p class="text-xs sm:text-sm text-slate-300 mt-0.5">
              256-Bit SSL/TLS AES cloud document management. Instant OCR search, tax archival, and SOC-2 compliant audit trails.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-2.5">
            <router-link 
              to="/247bookkeeper" 
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors shadow-sm"
              title="Switch to 247Bookkeeper™ real-time ledger portal"
            >
              <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>View 247Bookkeeper™ Portal</span>
            </router-link>
            
            <button 
              @click="triggerFileInput" 
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-950/40 transition-all hover:scale-[1.02]"
              title="Upload PDF, invoices, receipts or tax records to this vault"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
              </svg>
              <span>+ Upload New Document</span>
            </button>
            <input 
              type="file" 
              ref="fileInputRef" 
              @change="handleFileUpload" 
              multiple 
              class="hidden" 
              accept=".pdf,.png,.jpg,.jpeg,.doc,.docx,.xls,.xlsx" 
            />
          </div>
        </div>

        <div class="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
          <div class="flex items-center gap-4 flex-wrap">
            <span class="flex items-center gap-1 text-slate-300">
              <svg class="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              <span>Security Standard: AES-256 GCM High-Grade Encryption</span>
            </span>
            <span class="text-slate-600">|</span>
            <span>Total Vault Storage Used: <strong class="text-white">{{ totalStorageUsed }}</strong></span>
          </div>
          <div class="text-[11px] font-mono text-emerald-400">
            Audit Retention: 7 Years IRS Compliant
          </div>
        </div>

      </div>
    </div>

    <!-- Vault Application Shell -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid lg:grid-cols-12 min-h-[580px]">
        
        <!-- Sidebar Folders -->
        <div class="lg:col-span-4 border-r border-slate-200 p-6 space-y-6 bg-slate-50">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Document Partitions</span>
            <span class="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono font-bold">256-Bit Encrypted</span>
          </div>

          <div class="space-y-1.5 text-xs">
            <button 
              v-for="folder in folders" 
              :key="folder.id" 
              @click="activeFolder = folder.id" 
              class="w-full text-left p-3 rounded-xl flex items-center justify-between font-medium transition-colors" 
              :class="activeFolder === folder.id ? 'bg-emerald-700 text-white shadow-sm font-semibold' : 'text-slate-700 hover:bg-slate-200/60'"
            >
              <span class="flex items-center gap-2.5">
                <svg v-if="folder.id === 'tax-filings'" class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>
                <svg v-else-if="folder.id === 'financial-statements'" class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                <svg v-else-if="folder.id === 'bank-statements'" class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/></svg>
                <svg v-else class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <span>{{ folder.name }}</span>
              </span>
              <span class="text-[11px] opacity-80 font-mono font-bold">({{ getFolderCount(folder.id) }})</span>
            </button>
          </div>

          <div class="pt-4 border-t border-slate-200 space-y-3">
            <span class="text-xs font-bold text-slate-700 block">Instant Vault OCR Search</span>
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Search documents, invoices, tax..." 
              class="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
            />
          </div>

          <!-- Drag and Drop Active Upload Dropzone -->
          <div 
            @dragover.prevent="isDragging = true"
            @dragleave.prevent="isDragging = false"
            @drop.prevent="handleDrop"
            @click="triggerFileInput"
            class="p-4 rounded-2xl border-2 border-dashed transition-all cursor-pointer text-center space-y-1.5"
            :class="isDragging ? 'border-emerald-500 bg-emerald-50/80' : 'border-slate-300 hover:border-emerald-400 bg-white'"
          >
            <div class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
            </div>
            <span class="text-xs font-bold text-slate-800 block">Drag &amp; Drop Files Here</span>
            <p class="text-[11px] text-slate-500">Supports PDF, Excel, Word, or Scanned receipts</p>
          </div>

          <div class="p-4 rounded-2xl bg-emerald-950 text-white text-xs space-y-1">
            <span class="text-emerald-400 font-bold block">Paperless Security</span>
            <p class="text-slate-300 leading-relaxed text-[11px]">
              Every document is encrypted both in transit and at rest with geo-redundant backups across US East &amp; Central nodes.
            </p>
          </div>
        </div>

        <!-- Files List & Preview -->
        <div class="lg:col-span-8 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          <div class="space-y-4">
            
            <div class="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 class="text-lg font-bold font-heading text-slate-900 capitalize">{{ currentFolderName }}</h3>
                <span class="text-xs text-slate-500">{{ filteredDocs.length }} documents stored in this secure partition</span>
              </div>
              
              <button 
                @click="triggerFileInput" 
                class="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                <span>Upload Document</span>
              </button>
            </div>

            <div class="space-y-2.5">
              <div 
                v-for="(doc, idx) in filteredDocs" 
                :key="doc.id || idx" 
                class="p-4 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 flex items-center justify-between text-xs transition-colors group"
              >
                <div class="flex items-center gap-3">
                  <span class="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                  </span>
                  <div>
                    <h4 class="font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">{{ doc.title }}</h4>
                    <span class="text-slate-400 text-[11px]">{{ doc.size }} • Uploaded {{ doc.date }} {{ doc.uploader ? 'by ' + doc.uploader : 'by Client Upload' }}</span>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px] uppercase font-mono">Verified</span>
                  
                  <button 
                    @click="previewDoc(doc)" 
                    class="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-emerald-700 hover:text-emerald-800 hover:border-emerald-300 font-bold text-xs shadow-xs transition-all flex items-center gap-1"
                  >
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    <span>View / Download</span>
                  </button>

                  <button 
                    v-if="doc.isUserUploaded" 
                    @click="deleteDoc(doc.id)" 
                    class="text-slate-400 hover:text-red-600 p-1 rounded transition-colors"
                    title="Delete document"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  </button>
                </div>
              </div>

              <div v-if="filteredDocs.length === 0" class="p-12 text-center text-slate-400 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <p class="font-medium text-slate-600 text-sm">No documents found in this partition.</p>
                <p class="text-xs text-slate-400 mt-1">Upload files or drag and drop to store them in this vault folder.</p>
              </div>
            </div>

          </div>

          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2">
            <span>Partition Key: <strong class="text-slate-700">0x8821...AES-GCM</strong></span>
            <span>Audit Trail: <strong class="text-emerald-700">SOC-2 Type II Certified</strong></span>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const fileInputRef = ref(null);
const activeFolder = ref('tax-filings');
const searchQuery = ref('');
const isDragging = ref(false);

const STORAGE_DOCS_KEY = 'prufininc_ecabinet_docs';

const folders = [
  { id: 'tax-filings', name: 'Federal & State Tax Filings' },
  { id: 'financial-statements', name: 'Managerial Financial Statements' },
  { id: 'bank-statements', name: 'Reconciled Bank Statements' },
  { id: 'vendor-bills', name: 'Accounts Payable & Vendor Bills' },
];

const currentFolderName = computed(() => {
  const f = folders.find(folder => folder.id === activeFolder.value);
  return f ? f.name : activeFolder.value;
});

const defaultDocuments = [
  { id: 'doc-1', folder: 'tax-filings', title: '2025 Form 1120-S Federal Income Tax Return.pdf', size: '2.4 MB', date: 'Oct 14, 2026', uploader: 'Prudent NY Team', isUserUploaded: false },
  { id: 'doc-2', folder: 'tax-filings', title: '2025 New York State Corporate Tax Filing (CT-3).pdf', size: '1.8 MB', date: 'Oct 14, 2026', uploader: 'Prudent NY Team', isUserUploaded: false },
  { id: 'doc-3', folder: 'tax-filings', title: 'Form 941 Employer Quarterly Federal Tax Q3.pdf', size: '480 KB', date: 'Oct 31, 2026', uploader: 'Prudent NY Team', isUserUploaded: false },

  { id: 'doc-4', folder: 'financial-statements', title: 'October 2026 Monthly Managerial P&L and Balance Sheet.pdf', size: '1.2 MB', date: 'Nov 04, 2026', uploader: 'Senior CPA Review', isUserUploaded: false },
  { id: 'doc-5', folder: 'financial-statements', title: 'Q3 2026 Comprehensive Financial Performance Review.pdf', size: '3.1 MB', date: 'Oct 12, 2026', uploader: 'Senior CPA Review', isUserUploaded: false },
  { id: 'doc-6', folder: 'financial-statements', title: '13-Week Rolling Cash Flow & Runway Forecast Model.xlsx', size: '890 KB', date: 'Nov 01, 2026', uploader: 'Senior CPA Review', isUserUploaded: false },
  { id: 'doc-7', folder: 'financial-statements', title: 'Annual Operating Budget vs Actuals Variance Report.pdf', size: '1.6 MB', date: 'Oct 28, 2026', uploader: 'Senior CPA Review', isUserUploaded: false },

  { id: 'doc-8', folder: 'bank-statements', title: 'Chase Operating Checking Reconciled Statement Oct 2026.pdf', size: '640 KB', date: 'Nov 02, 2026', uploader: 'Chase Direct Feed', isUserUploaded: false },
  { id: 'doc-9', folder: 'bank-statements', title: 'Amex Business Card Monthly Expense Summary Oct 2026.pdf', size: '820 KB', date: 'Nov 02, 2026', uploader: 'Amex Direct Feed', isUserUploaded: false },
  { id: 'doc-10', folder: 'bank-statements', title: 'Stripe Merchant Gateway Monthly Payout Summary.pdf', size: '410 KB', date: 'Nov 03, 2026', uploader: 'Stripe API', isUserUploaded: false },

  { id: 'doc-11', folder: 'vendor-bills', title: 'AP Invoice #8821 - Global Logistics Supply Corp.pdf', size: '320 KB', date: 'Nov 03, 2026', uploader: 'Vendor Portal Intake', isUserUploaded: false },
  { id: 'doc-12', folder: 'vendor-bills', title: 'AP Invoice #4912 - Apex Industrial Equipment.pdf', size: '290 KB', date: 'Nov 01, 2026', uploader: 'Vendor Portal Intake', isUserUploaded: false },
  { id: 'doc-13', folder: 'vendor-bills', title: 'AP Invoice #1033 - Delta Tech Software Licenses.pdf', size: '510 KB', date: 'Oct 29, 2026', uploader: 'Vendor Portal Intake', isUserUploaded: false },
];

const allDocuments = ref([]);

onMounted(() => {
  try {
    const saved = localStorage.getItem(STORAGE_DOCS_KEY);
    allDocuments.value = saved ? JSON.parse(saved) : defaultDocuments;
  } catch (e) {
    allDocuments.value = defaultDocuments;
  }
});

function getFolderCount(folderId) {
  return allDocuments.value.filter(d => d.folder === folderId).length;
}

const totalStorageUsed = computed(() => {
  return `${(allDocuments.value.length * 1.4).toFixed(1)} MB (Encrypted)`;
});

const filteredDocs = computed(() => {
  return allDocuments.value.filter(d => {
    const matchesFolder = d.folder === activeFolder.value;
    const matchesSearch = !searchQuery.value || d.title.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesFolder && matchesSearch;
  });
});

function triggerFileInput() {
  if (fileInputRef.value) {
    fileInputRef.value.click();
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function processFiles(files) {
  if (!files || files.length === 0) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const objectUrl = URL.createObjectURL(file);

    allDocuments.value.unshift({
      id: 'usr-' + Date.now() + '-' + i,
      folder: activeFolder.value,
      title: file.name,
      size: formatBytes(file.size),
      date: dateStr,
      uploader: 'Client Upload',
      isUserUploaded: true,
      blobUrl: objectUrl
    });
  }

  saveDocuments();
}

function handleFileUpload(e) {
  processFiles(e.target.files);
  e.target.value = '';
}

function handleDrop(e) {
  isDragging.value = false;
  if (e.dataTransfer && e.dataTransfer.files) {
    processFiles(e.dataTransfer.files);
  }
}

function saveDocuments() {
  try {
    // Avoid serializing blob URLs
    const serializable = allDocuments.value.map(d => {
      const { blobUrl, ...rest } = d;
      return rest;
    });
    localStorage.setItem(STORAGE_DOCS_KEY, JSON.stringify(serializable));
  } catch (e) {
    console.warn(e);
  }
}

function deleteDoc(id) {
  allDocuments.value = allDocuments.value.filter(d => d.id !== id);
  saveDocuments();
}

function previewDoc(doc) {
  if (doc.blobUrl) {
    window.open(doc.blobUrl, '_blank');
    return;
  }
  
  // Real downloadable dummy file generator for pre-loaded documents
  const dummyContent = `Prudent Financial Services, Inc. (Prufininc)\nDocument Archive: 247eCabinet Encrypted Repository\n\nDocument: ${doc.title}\nFolder Partition: ${doc.folder}\nDate: ${doc.date}\nSecurity Hash: SHA-256 Validated\nStatus: Verified by Senior CPA\n\nThis document is securely loaded from your 247eCabinet cloud archive.`;
  const blob = new Blob([dummyContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = doc.title;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
</script>
