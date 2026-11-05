import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import OutsourcingView from '@/views/OutsourcingView.vue';
import ServicesView from '@/views/ServicesView.vue';
import ConsultingView from '@/views/ConsultingView.vue';
import PricingView from '@/views/PricingView.vue';
import ContactView from '@/views/ContactView.vue';
import BookkeeperView from '@/views/BookkeeperView.vue';
import ECabinetView from '@/views/ECabinetView.vue';
import HowItWorksView from '@/views/HowItWorksView.vue';
import IndustriesView from '@/views/IndustriesView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView, alias: ['/index.html'] },
  { path: '/about', name: 'about', component: AboutView, alias: ['/about.html'] },
  { path: '/outsourcing', name: 'outsourcing', component: OutsourcingView, alias: ['/outsourcing.html'] },
  { path: '/services', name: 'services', component: ServicesView, alias: ['/services.html'] },
  { path: '/consulting', name: 'consulting', component: ConsultingView, alias: ['/consulting.html'] },
  { path: '/pricing', name: 'pricing', component: PricingView, alias: ['/pricing.html'] },
  { path: '/contact', name: 'contact', component: ContactView, alias: ['/contact.html'] },
  { path: '/247bookkeeper', name: 'bookkeeper', component: BookkeeperView, alias: ['/247bookkeeper.html'] },
  { path: '/247ecabinet', name: 'ecabinet', component: ECabinetView, alias: ['/247ecabinet.html'] },
  { path: '/how-it-works', name: 'how-it-works', component: HowItWorksView, alias: ['/how-it-works.html'] },
  { path: '/industries', name: 'industries', component: IndustriesView, alias: ['/industries.html'] },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  },
});

export default router;
