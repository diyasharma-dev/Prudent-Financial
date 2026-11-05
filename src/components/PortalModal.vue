<template>
  <div v-if="isPortalModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay">
    <div class="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
      
      <button @click="closePortalModal" aria-label="Close Modal" class="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>

      <div class="text-center space-y-2 mb-6">
        <img src="/images/prufininc-logo-transparent.png" alt="Prudent Financial Services, Inc." class="h-16 w-auto mx-auto object-contain mb-2" />
        <h3 class="text-xl font-bold font-heading text-slate-900">247eCabinet™ Client Access</h3>
        <p class="text-xs text-slate-500">Sign in to your encrypted digital document repository</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Client ID / Email</label>
          <input v-model="email" type="email" required class="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50">
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Password</label>
          <input v-model="password" type="password" required class="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50">
        </div>

        <button type="submit" :disabled="isLoading" class="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow">
          <span v-if="!isLoading">Sign In to 247eCabinet →</span>
          <span v-else>Authenticating...</span>
        </button>

        <div class="text-center">
          <span class="text-[11px] text-slate-400">Demo credentials pre-filled. Click Sign In to view live vault demo.</span>
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

const email = ref('client@prufininc.com');
const password = ref('demo123456');
const isLoading = ref(false);

function handleLogin() {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    closePortalModal();
    router.push('/247ecabinet');
  }, 700);
}
</script>
