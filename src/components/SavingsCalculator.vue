<template>
  <div class="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
    <div class="grid lg:grid-cols-12">
      
      <!-- Left side: Sliders & Controls -->
      <div class="lg:col-span-7 p-8 sm:p-10 space-y-8">
        <h3 class="text-xl font-bold font-heading text-slate-900">Your Business Profile</h3>
        
        <!-- Revenue slider -->
        <div class="space-y-3">
          <div class="flex justify-between items-center text-sm font-semibold">
            <label class="text-slate-700">Annual Gross Revenue</label>
            <span class="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md font-mono">${{ revenueK.toLocaleString() }}K</span>
          </div>
          <input v-model.number="revenueK" type="range" min="250" max="15000" step="250" class="w-full accent-emerald-600 cursor-pointer">
          <div class="flex justify-between text-[11px] text-slate-400 font-medium">
            <span>$250K (SME)</span>
            <span>$5M</span>
            <span>$15M+</span>
          </div>
        </div>

        <!-- Transactions slider -->
        <div class="space-y-3">
          <div class="flex justify-between items-center text-sm font-semibold">
            <label class="text-slate-700">Estimated Monthly Transactions</label>
            <span class="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md font-mono">{{ txCount.toLocaleString() }} tx/mo</span>
          </div>
          <input v-model.number="txCount" type="range" min="50" max="2500" step="50" class="w-full accent-emerald-600 cursor-pointer">
          <div class="flex justify-between text-[11px] text-slate-400 font-medium">
            <span>50 tx</span>
            <span>1,000 tx</span>
            <span>2,500+ tx</span>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-500 leading-relaxed flex items-start gap-2.5">
          <svg class="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span>
            Based on average US full-time in-house bookkeeper salary ($55,000) + 25% mandatory payroll taxes, health insurance, software licenses, paid leave vs. Prudent flat-fee retainer.
          </span>
        </div>
      </div>

      <!-- Right side: Calculation Output -->
      <div class="lg:col-span-5 bg-gradient-to-br from-emerald-800 to-navy-950 p-8 sm:p-10 text-white flex flex-col justify-between space-y-6">
        
        <div class="space-y-6">
          <div class="flex items-center justify-between border-b border-emerald-700/50 pb-4">
            <span class="text-xs uppercase tracking-wider text-emerald-300 font-semibold">Estimated Comparison</span>
            <span class="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
              {{ savingsPercent }}% Savings
            </span>
          </div>

          <div class="space-y-4">
            <div>
              <div class="text-xs text-slate-300">Traditional In-House Cost</div>
              <div class="text-2xl font-bold font-heading text-slate-200">${{ inHouseCost.toLocaleString() }}/mo</div>
            </div>

            <div>
              <div class="text-xs text-emerald-300">Prudent Outsourced Retainer</div>
              <div class="text-3xl font-extrabold font-heading text-white">${{ prudentCost.toLocaleString() }}/mo</div>
            </div>
          </div>

          <div class="pt-4 border-t border-emerald-700/50">
            <div class="text-xs text-emerald-200 uppercase font-semibold tracking-wider">Your Estimated Annual Savings</div>
            <div class="text-4xl sm:text-5xl font-black font-heading text-emerald-400 mt-1">
              ${{ annualSavings.toLocaleString() }}/yr
            </div>
            <p class="text-xs text-slate-300 mt-2">
              Plus 0 hiring friction, 0 software licenses, and 100% audit-ready accuracy.
            </p>
          </div>
        </div>

        <div class="space-y-2">
          <button @click="printProposal" class="w-full py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-sm shadow-md transition-all text-center flex items-center justify-center gap-2">
            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
            <span>Print / Save Official Proposal PDF</span>
          </button>
          <button @click="openConsultationModal" class="w-full py-2.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-900 text-white font-medium text-xs text-center border border-emerald-500/30 transition-all">
            Lock In This Rate With Our CPAs →
          </button>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useApp } from '@/composables/useApp';

const { openConsultationModal } = useApp();

const revenueK = ref(1500);
const txCount = ref(400);

// Benchmark In-House cost
const inHouseCost = computed(() => {
  let base = 4200;
  if (revenueK.value <= 500) base = 3200;
  else if (revenueK.value <= 1500) base = 4800;
  else if (revenueK.value <= 5000) base = 6800;
  else base = 9500;

  const txFactor = Math.floor(txCount.value / 200) * 350;
  return base + txFactor;
});

// Prudent Outsourced Plan
const prudentCost = computed(() => {
  if (revenueK.value <= 500 && txCount.value <= 200) return 699;
  if (revenueK.value <= 1000) return 1199;
  if (revenueK.value <= 3000) return 1899;
  if (revenueK.value <= 7000) return 2799;
  return 3899;
});

const monthlySavings = computed(() => Math.max(0, inHouseCost.value - prudentCost.value));
const annualSavings = computed(() => monthlySavings.value * 12);
const savingsPercent = computed(() => inHouseCost.value ? Math.round((monthlySavings.value / inHouseCost.value) * 100) : 50);

function printProposal() {
  const refNumber = 'PRU-EST-' + Math.floor(100000 + Math.random() * 900000);
  const printWindow = window.open('', '_blank', 'width=800,height=900');
  if (!printWindow) return;

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Prudent Financial Services - Cost Proposal ${refNumber}</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; color: #1e293b; line-height: 1.5; }
        .header { border-bottom: 2px solid #047857; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center; }
        .title { font-size: 24px; font-weight: bold; color: #047857; }
        .meta { font-size: 13px; color: #64748b; }
        table { width: 100%; border-collapse: collapse; margin: 25px 0; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
        th { background: #f8fafc; font-weight: 600; }
        .savings-badge { background: #ecfdf5; border: 1px solid #a7f3d0; padding: 20px; border-radius: 12px; text-align: center; margin: 30px 0; }
        .savings-badge .amount { font-size: 32px; font-weight: 800; color: #047857; }
        .footer { font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 40px; }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <div class="title">PRUDENT FINANCIAL SERVICES, INC.</div>
          <div class="meta">113-25 Queens Blvd, Suite 114, Forest Hills, NY 11375 | Tel: +1 (718) 261-4001</div>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: bold;">${refNumber}</div>
          <div class="meta">${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
        </div>
      </div>
      <h2>Outsourced Accounting Cost & ROI Benchmark</h2>
      <table>
        <thead><tr><th>Metric</th><th>Your Input</th><th>Prudent Tier</th></tr></thead>
        <tbody>
          <tr><td>Annual Gross Revenue</td><td>$${revenueK.value.toLocaleString()}K</td><td>SME Tier</td></tr>
          <tr><td>Monthly Transactions</td><td>${txCount.value} transactions</td><td>Continuous Processing</td></tr>
          <tr><td>In-House Equivalent Cost</td><td colspan="2">$${inHouseCost.value.toLocaleString()} / month</td></tr>
          <tr><td>Prudent Outsourced Retainer</td><td colspan="2" style="font-weight: bold; color: #047857;">$${prudentCost.value.toLocaleString()} / month</td></tr>
          <tr style="background: #f0fdf4; font-weight: bold;">
            <td>Net Projected Annual Savings</td>
            <td colspan="2" style="text-align: right; font-size: 16px;">$${annualSavings.value.toLocaleString()} / year (${savingsPercent.value}% Cost Reduction)</td>
          </tr>
        </tbody>
      </table>
      <div class="savings-badge">
        <div>Your Estimated Annualized Cost Savings</div>
        <div class="amount">$${annualSavings.value.toLocaleString()}</div>
        <div style="font-size: 13px; opacity: 0.9;">Includes 24/7 ledger processing, bank reconciliations & CPA quality oversight.</div>
      </div>
      <div class="footer">
        <p>To lock in this pricing tier, contact our Forest Hills, NY office at +1 (718) 261-4001 or email info@prufininc.com referencing <strong>${refNumber}</strong>.</p>
        <p>© ${new Date().getFullYear()} Prudent Financial Services, Inc. (Prufininc). All rights reserved.</p>
      </div>
    </body>
    </html>
  `);
  printWindow.document.close();
}
</script>
