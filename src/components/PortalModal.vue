<template>
  <div v-if="isPortalModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/75 backdrop-blur-sm animate-fade-in">
    <div class="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
      
      <!-- Close Button -->
      <button 
        @click="closePortalModal" 
        aria-label="Close Modal" 
        class="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Modal Header -->
      <div class="text-center space-y-2 mb-6">
        <div class="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mx-auto shadow-inner">
          <svg class="w-7 h-7 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
        </div>
        <h3 class="text-2xl font-extrabold font-heading text-slate-900">Client Portal Access</h3>
        <p class="text-xs text-slate-500">Secure 256-Bit SSL/TLS Single Sign-On Gateway</p>
      </div>

      <!-- System Selector Tabs -->
      <div class="grid grid-cols-2 gap-2 p-1.5 bg-slate-100 rounded-2xl mb-5">
        <button 
          type="button"
          @click="selectedSystem = 'bookkeeper'"
          :class="selectedSystem === 'bookkeeper' ? 'bg-white text-emerald-800 font-bold shadow-sm' : 'text-slate-600 hover:text-slate-900 font-medium'"
          class="py-2.5 px-3 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5"
        >
          <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span>247Bookkeeper™</span>
        </button>

        <button 
          type="button"
          @click="selectedSystem = 'ecabinet'"
          :class="selectedSystem === 'ecabinet' ? 'bg-white text-emerald-800 font-bold shadow-sm' : 'text-slate-600 hover:text-slate-900 font-medium'"
          class="py-2.5 px-3 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5"
        >
          <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          <span>247eCabinet™ Vault</span>
        </button>
      </div>

      <!-- Authentication Form -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Corporate Client ID / Email</label>
          <div class="relative">
            <input 
              v-model="email" 
              type="email" 
              required 
              placeholder="e.g. client@sterlinglogistics.com"
              class="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
            />
            <svg class="w-4 h-4 text-slate-400 absolute left-3.5 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between mb-1">
            <label class="block text-xs font-semibold text-slate-700">Account Password</label>
            <span class="text-[11px] text-emerald-700 font-semibold cursor-pointer hover:underline">Forgot password?</span>
          </div>
          <div class="relative">
            <input 
              v-model="password" 
              type="password" 
              required 
              placeholder="Enter password"
              class="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors font-mono"
            />
            <svg class="w-4 h-4 text-slate-400 absolute left-3.5 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>

        <div class="flex items-center justify-between text-xs text-slate-500 pt-1">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked class="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
            <span>Remember this device</span>
          </label>
          <span class="font-mono text-emerald-700 text-[11px]">TLS 1.3 Validated</span>
        </div>

        <button 
          type="submit" 
          :disabled="isLoading" 
          class="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md shadow-emerald-900/20 transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
        >
          <span v-if="!isLoading">
            Sign In to {{ selectedSystem === 'bookkeeper' ? '247Bookkeeper™ Portal' : '247eCabinet™ Vault' }} →
          </span>
          <span v-else class="flex items-center gap-2">
            <svg class="w-4 h-4 animate-spin text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Verifying Credentials &amp; Opening Session...</span>
          </span>
        </button>

        <!-- Alternative Legacy Server Link -->
        <div class="pt-4 border-t border-slate-200 text-center space-y-1.5">
          <p class="text-[11px] text-slate-500">
            Existing client on legacy server infrastructure?
          </p>
          <a 
            href="http://125.16.1.151:81" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:underline"
          >
            <span>Access Direct Client Server (125.16.1.151)</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>
      </form>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useApp } from '@/composables/useApp';

const router = useRouter();
const { isPortalModalOpen, closePortalModal } = useApp();

const selectedSystem = ref('bookkeeper');
const email = ref('sterling.admin@prufininc.com');
const password = ref('••••••••••••');
const isLoading = ref(false);

function handleLogin() {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    closePortalModal();
    if (selectedSystem.value === 'bookkeeper') {
      router.push('/247bookkeeper');
    } else {
      router.push('/247ecabinet');
    }
  }, 600);
}
</script>
