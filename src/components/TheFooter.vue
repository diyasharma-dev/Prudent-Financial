<template>
  <footer class="bg-navy-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        <!-- Brand Column with Official Logo -->
        <div class="lg:col-span-2 space-y-4">
          <router-link to="/" class="inline-block" aria-label="Prudent Financial Homepage">
            <img 
              src="/images/prufininc-logo-white.png" 
              alt="Prudent Financial Services, Inc. (Prufininc)" 
              class="h-14 w-auto object-contain"
            />
          </router-link>
          
          <p class="text-xs text-slate-400 leading-relaxed max-w-sm">
            Providing complete outsourced bookkeeping, managerial financial analysis, cash flow budgeting, and tax advisory for SMEs ($250K to $20M).
          </p>
          <div class="pt-2 text-xs text-slate-400 space-y-1">
            <p><strong>USA Office:</strong> 113-25 Queens Blvd, Suite 114, Forest Hills, NY 11375</p>
            <p><strong>Phone:</strong> +1 (718) 261-4001 | <strong>Email:</strong> info@prufininc.com</p>
          </div>
        </div>

        <div>
          <h4 class="font-heading font-semibold text-white text-sm mb-4 uppercase">Main Menu</h4>
          <ul class="space-y-2.5 text-xs">
            <li><router-link to="/" class="hover:text-emerald-400 transition-colors">Home</router-link></li>
            <li><router-link to="/about" class="hover:text-emerald-400 transition-colors">About Us</router-link></li>
            <li><router-link to="/outsourcing" class="hover:text-emerald-400 transition-colors">Outsourcing</router-link></li>
            <li><router-link to="/services" class="hover:text-emerald-400 transition-colors">Services</router-link></li>
            <li><router-link to="/consulting" class="hover:text-emerald-400 transition-colors">Consulting</router-link></li>
            <li><router-link to="/pricing" class="hover:text-emerald-400 transition-colors">Pricing</router-link></li>
          </ul>
        </div>

        <div>
          <h4 class="font-heading font-semibold text-white text-sm mb-4 uppercase">Portals &amp; Tools</h4>
          <ul class="space-y-2.5 text-xs">
            <li><router-link to="/247bookkeeper" class="hover:text-emerald-400 transition-colors">247Bookkeeper™ System</router-link></li>
            <li><router-link to="/247ecabinet" class="hover:text-emerald-400 transition-colors">247eCabinet™ Vault</router-link></li>
            <li><button @click="openPortalModal" class="hover:text-emerald-400 transition-colors text-left">Client Login</button></li>
            <li><router-link to="/outsourcing#savings-calculator" class="hover:text-emerald-400 transition-colors">ROI Calculator</router-link></li>
          </ul>
        </div>

        <div>
          <h4 class="font-heading font-semibold text-white text-sm mb-4 uppercase">Contact &amp; Support</h4>
          <ul class="space-y-2.5 text-xs">
            <li><router-link to="/contact" class="hover:text-emerald-400 transition-colors">Contact Us</router-link></li>
            <li><a href="tel:+17182614001" class="hover:text-emerald-400 transition-colors">+1 (718) 261-4001</a></li>
            <li><a href="tel:+914023543811" class="hover:text-emerald-400 transition-colors">+91 40 2354 3811</a></li>
            <li><span class="text-emerald-400 font-medium">NY Office (EST): 9 AM - 6 PM</span></li>
            <li><span class="text-slate-500">24/7 Overnight Processing</span></li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          © {{ currentYear }} Prudent Financial Services, Inc. (Prufininc). All rights reserved.
        </div>
        <div class="flex items-center gap-6">
          <router-link to="/about" class="hover:text-slate-400">Security &amp; Encryption</router-link>
          <router-link to="/services" class="hover:text-slate-400">US GAAP Compliance</router-link>
          <router-link to="/contact" class="hover:text-slate-400">Privacy &amp; Terms</router-link>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { useApp } from '@/composables/useApp';

const { openPortalModal } = useApp();
const currentYear = computed(() => new Date().getFullYear());
</script>