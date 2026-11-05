<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
    <!-- Global Header -->
    <TheNavbar />

    <!-- Routed Page Content -->
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Global Footer -->
    <TheFooter />

    <!-- Modals -->
    <ConsultationModal />
    <PortalModal />
  </div>
</template>

<script setup>
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';
import ConsultationModal from '@/components/ConsultationModal.vue';
import PortalModal from '@/components/PortalModal.vue';
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
