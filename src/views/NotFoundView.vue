<template>
  <div class="py-24 px-6 flex items-center justify-center min-h-[60vh]">
    <div class="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-slate-200 text-center space-y-5">
      <div class="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-2xl mx-auto">
        404
      </div>
      <h2 class="text-2xl font-bold text-slate-900 font-heading">Page Not Found</h2>
      <p class="text-sm text-slate-600">The requested page does not exist or has moved. Explore our core sections:</p>
      
      <div class="grid grid-cols-2 gap-2 text-xs font-semibold">
        <router-link to="/" class="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">Home</router-link>
        <router-link to="/about" class="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">About Us</router-link>
        <router-link to="/outsourcing" class="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">Outsourcing</router-link>
        <router-link to="/services" class="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">Services</router-link>
        <router-link to="/consulting" class="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">Consulting</router-link>
        <router-link to="/pricing" class="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">Pricing</router-link>
      </div>

      <router-link to="/" class="inline-block w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow transition-all">
        Return to Homepage →
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>
