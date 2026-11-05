<template>
  <div>
    <!-- Top Announcement Bar -->
    <div class="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div class="flex items-center gap-4 flex-wrap justify-center">
          <span class="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Now Onboarding Growing SMEs ($250K - $20M Gross Revenue)
          </span>
          <span class="hidden lg:inline text-slate-500">•</span>
          <span class="hidden lg:inline">Forest Hills, NY Headquarters • 24/7 Global Delivery</span>
        </div>
        <div class="flex items-center gap-5">
          <a href="tel:+17182614001" class="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <span>USA: +1 (718) 261-4001</span>
          </a>
          <a href="tel:+914023543811" class="hover:text-emerald-400 transition-colors hidden sm:flex items-center gap-1.5">
            <span>IND: +91 40 2354 3811</span>
          </a>
          <a href="mailto:info@prufininc.com" class="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            <span>info@prufininc.com</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Header -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <!-- Brand Logo -->
        <router-link to="/" class="flex items-center gap-3 group">
          <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="font-heading font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">PRUDENT</span>
              <span class="text-xs font-semibold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 tracking-wide uppercase">Prufininc</span>
            </div>
            <span class="block text-[11px] font-medium tracking-wider text-slate-500 uppercase -mt-0.5">Financial Services, Inc.</span>
          </div>
        </router-link>

        <!-- Desktop Navigation Menu (Matching Original Prufininc Structure) -->
        <nav class="hidden lg:flex items-center gap-6">
          <router-link to="/" class="text-sm font-medium transition-colors" :class="$route.path === '/' ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600 pb-0.5' : 'text-slate-600 hover:text-emerald-700'">Home</router-link>
          <router-link to="/about" class="text-sm font-medium transition-colors" :class="$route.path === '/about' ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600 pb-0.5' : 'text-slate-600 hover:text-emerald-700'">About Us</router-link>
          <router-link to="/outsourcing" class="text-sm font-medium transition-colors" :class="$route.path === '/outsourcing' ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600 pb-0.5' : 'text-slate-600 hover:text-emerald-700'">Outsourcing</router-link>
          <router-link to="/services" class="text-sm font-medium transition-colors" :class="$route.path === '/services' ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600 pb-0.5' : 'text-slate-600 hover:text-emerald-700'">Services</router-link>
          <router-link to="/consulting" class="text-sm font-medium transition-colors" :class="$route.path === '/consulting' ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600 pb-0.5' : 'text-slate-600 hover:text-emerald-700'">Consulting</router-link>
          <router-link to="/pricing" class="text-sm font-medium transition-colors" :class="$route.path === '/pricing' ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600 pb-0.5' : 'text-slate-600 hover:text-emerald-700'">Pricing</router-link>
          
          <!-- Portals Dropdown -->
          <div class="relative group">
            <button class="text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-1 py-2">
              <span>Portals</span>
              <svg class="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-slate-100 p-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
              <router-link to="/247bookkeeper" class="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800">
                <span class="block text-emerald-700">247Bookkeeper™</span>
                <span class="text-[11px] text-slate-500 font-normal">Real-time accounting dashboard</span>
              </router-link>
              <router-link to="/247ecabinet" class="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800">
                <span class="block text-emerald-700">247eCabinet™</span>
                <span class="text-[11px] text-slate-500 font-normal">Encrypted 256-bit document vault</span>
              </router-link>
            </div>
          </div>

          <router-link to="/contact" class="text-sm font-medium transition-colors" :class="$route.path === '/contact' ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600 pb-0.5' : 'text-slate-600 hover:text-emerald-700'">Contact</router-link>
        </nav>

        <!-- Header CTAs -->
        <div class="hidden lg:flex items-center gap-3">
          <button @click="openPortalModal" class="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-emerald-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5">
            <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/></svg>
            <span>Client Login</span>
          </button>
          <button @click="openConsultationModal" class="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm shadow-md shadow-emerald-700/20 transition-all flex items-center gap-2">
            <span>Free Consultation</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button @click="isDrawerOpen = true" aria-label="Open Mobile Menu" class="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
        </button>
      </div>
    </header>

    <!-- Mobile Drawer Backdrop & Menu -->
    <div v-if="isDrawerOpen" @click="isDrawerOpen = false" class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50"></div>
    <div class="fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col" :class="isDrawerOpen ? 'translate-x-0' : 'translate-x-full'">
      <div class="p-5 border-b border-slate-100 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-9 h-9 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold">P</div>
          <span class="font-heading font-bold text-slate-900">Prudent Financial</span>
        </div>
        <button @click="isDrawerOpen = false" aria-label="Close Mobile Menu" class="p-2 rounded-lg text-slate-400 hover:text-slate-700">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <div class="p-5 flex-1 overflow-y-auto space-y-2">
        <router-link to="/" @click="isDrawerOpen = false" class="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors" :class="$route.path === '/' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700 hover:bg-slate-50'">Home</router-link>
        <router-link to="/about" @click="isDrawerOpen = false" class="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors" :class="$route.path === '/about' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700 hover:bg-slate-50'">About Us</router-link>
        <router-link to="/outsourcing" @click="isDrawerOpen = false" class="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors" :class="$route.path === '/outsourcing' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700 hover:bg-slate-50'">Outsourcing</router-link>
        <router-link to="/services" @click="isDrawerOpen = false" class="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors" :class="$route.path === '/services' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700 hover:bg-slate-50'">Services</router-link>
        <router-link to="/consulting" @click="isDrawerOpen = false" class="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors" :class="$route.path === '/consulting' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700 hover:bg-slate-50'">Consulting</router-link>
        <router-link to="/pricing" @click="isDrawerOpen = false" class="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors" :class="$route.path === '/pricing' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700 hover:bg-slate-50'">Pricing</router-link>

        <div class="pt-3 border-t border-slate-100">
          <span class="px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">Proprietary Portals</span>
          <router-link to="/247bookkeeper" @click="isDrawerOpen = false" class="block px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50">247Bookkeeper™ System</router-link>
          <router-link to="/247ecabinet" @click="isDrawerOpen = false" class="block px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50">247eCabinet™ Vault</router-link>
        </div>

        <router-link to="/contact" @click="isDrawerOpen = false" class="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors" :class="$route.path === '/contact' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700 hover:bg-slate-50'">Contact Us</router-link>
      </div>

      <div class="p-5 border-t border-slate-100 space-y-2.5 bg-slate-50">
        <button @click="openPortalModal(); isDrawerOpen = false" class="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 shadow-sm flex items-center justify-center gap-2">
          <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/></svg>
          <span>Client Login</span>
        </button>
        <button @click="openConsultationModal(); isDrawerOpen = false" class="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-sm">
          Request Free Consultation
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useApp } from '@/composables/useApp';

const isDrawerOpen = ref(false);
const { openConsultationModal, openPortalModal } = useApp();
</script>
