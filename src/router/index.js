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
  {
    path: '/',
    name: 'home',
    component: HomeView,
    alias: ['/index.html'],
    meta: {
      title: 'Prudent Financial Services, Inc. (Prufininc) | Outsourced Accounting & Bookkeeping',
      description: 'Complete outsourced bookkeeping, managerial financial reporting, US taxation, 247Bookkeeper™, and 247eCabinet™ systems for growing SMEs ($250K - $20M). 50% lower overhead with US CPA review.'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    alias: ['/about.html'],
    meta: {
      title: 'About Us | Prudent Financial Services, Inc. (Prufininc)',
      description: 'Founded in Forest Hills, NY with 20+ years of excellence. Discover our dual-shore accounting delivery model combining US CPA oversight with 24/7 technical horsepower.'
    }
  },
  {
    path: '/outsourcing',
    name: 'outsourcing',
    component: OutsourcingView,
    alias: ['/outsourcing.html'],
    meta: {
      title: 'Outsourced Bookkeeping & Accounting Services | Prudent Financial',
      description: 'High-precision outsourced general ledger accounting, AP/AR management, bank reconciliation, and payroll compliance for American SMEs. Save 50% over in-house staff.'
    }
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView,
    alias: ['/services.html'],
    meta: {
      title: 'Comprehensive Financial & Tax Services | Prudent Financial',
      description: 'Full suite of accounting services: full-cycle bookkeeping, GAAP managerial review, US corporate tax preparation (Form 1120/1065), and software consulting.'
    }
  },
  {
    path: '/consulting',
    name: 'consulting',
    component: ConsultingView,
    alias: ['/consulting.html'],
    meta: {
      title: 'Strategic Financial Consulting & Fractional CFO | Prudent Financial',
      description: 'Expert financial consulting: 13-week cash flow modeling, operational health checks, QuickBooks cloud modernizations, and M&A due diligence.'
    }
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: PricingView,
    alias: ['/pricing.html'],
    meta: {
      title: 'Transparent Flat-Rate Accounting Pricing | Prudent Financial',
      description: 'Predictable monthly accounting & bookkeeping plans starting at $699/month. Zero payroll taxes, no hidden onboarding fees, and no long-term lock-in.'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    alias: ['/contact.html'],
    meta: {
      title: 'Contact Our New York & Global Offices | Prudent Financial',
      description: 'Schedule your free 30-minute accounting consultation or contact our Forest Hills, NY headquarters (+1 718-261-4001) and Hyderabad tech center.'
    }
  },
  {
    path: '/247bookkeeper',
    name: 'bookkeeper',
    component: BookkeeperView,
    alias: ['/247bookkeeper.html'],
    meta: {
      title: '247Bookkeeper™ System | Live Executive Accounting Portal',
      description: 'Proprietary cloud accounting portal providing 24/7 web access to real-time bank balances, daily reconciled feeds, and managerial KPI reports.'
    }
  },
  {
    path: '/247ecabinet',
    name: 'ecabinet',
    component: ECabinetView,
    alias: ['/247ecabinet.html'],
    meta: {
      title: '247eCabinet™ Vault | Encrypted Paperless Document System',
      description: 'Bank-grade 256-bit encrypted paperless repository for vendor receipts, customer invoices, bank statements, and tax audit trails.'
    }
  },
  {
    path: '/how-it-works',
    name: 'how-it-works',
    component: HowItWorksView,
    alias: ['/how-it-works.html'],
    meta: {
      title: 'How It Works | 4-Step Seamless Accounting Onboarding',
      description: 'Learn our streamlined 4-step onboarding process: setup audit, cloud system connection, overnight ledger processing, and monthly CPA review.'
    }
  },
  {
    path: '/industries',
    name: 'industries',
    component: IndustriesView,
    alias: ['/industries.html'],
    meta: {
      title: 'Industry Accounting Solutions | Healthcare, Retail, Tech & Real Estate',
      description: 'Tailored charts of accounts and compliance protocols for medical practices, e-commerce brands, legal firms, construction, wholesale, and tech startups.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
    meta: {
      title: '404 Page Not Found | Prudent Financial Services, Inc.',
      description: 'The page you requested does not exist. Return to Prudent Financial Services homepage.'
    }
  },
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

// Dynamic SEO Navigation Guard
router.afterEach((to) => {
  const defaultTitle = 'Prudent Financial Services, Inc. (Prufininc) | Outsourced Accounting & Bookkeeping';
  const defaultDesc = 'Complete outsourced bookkeeping, managerial financial reporting, taxation, 247Bookkeeper™, and 247eCabinet™ systems for growing SMEs.';

  // Update Document Title
  document.title = to.meta.title || defaultTitle;

  // Update Meta Description
  let descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) {
    descMeta.setAttribute('content', to.meta.description || defaultDesc);
  }

  // Update OpenGraph Title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', to.meta.title || defaultTitle);
  }

  // Update OpenGraph Description
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute('content', to.meta.description || defaultDesc);
  }

  // Update OpenGraph URL
  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute('content', `https://www.prufininc.com${to.path}`);
  }

  // Update Canonical URL Link
  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', `https://www.prufininc.com${to.path}`);
  }
});

export default router;