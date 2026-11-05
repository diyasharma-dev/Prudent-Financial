import { reactive, ref } from 'vue';

const isConsultationModalOpen = ref(false);
const isPortalModalOpen = ref(false);

const inquiries = reactive([]);

// Load cached inquiries from localStorage
try {
  const stored = JSON.parse(localStorage.getItem('prufininc_inquiries') || '[]');
  inquiries.push(...stored);
} catch (e) {
  console.warn('Storage warning:', e);
}

export function useApp() {
  function openConsultationModal() {
    isConsultationModalOpen.value = true;
  }

  function closeConsultationModal() {
    isConsultationModalOpen.value = false;
  }

  function openPortalModal() {
    isPortalModalOpen.value = true;
  }

  function closePortalModal() {
    isPortalModalOpen.value = false;
  }

  async function submitLead(leadData) {
    const refId = 'PRU-' + Math.floor(100000 + Math.random() * 900000);
    const payload = {
      refId,
      timestamp: new Date().toISOString(),
      ...leadData,
    };

    inquiries.unshift(payload);

    try {
      localStorage.setItem('prufininc_inquiries', JSON.stringify(inquiries));
    } catch (e) {
      console.warn('Storage save warning:', e);
    }

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      // Offline / local preview fallback
    }

    return refId;
  }

  return {
    isConsultationModalOpen,
    isPortalModalOpen,
    openConsultationModal,
    closeConsultationModal,
    openPortalModal,
    closePortalModal,
    submitLead,
    inquiries,
  };
}
