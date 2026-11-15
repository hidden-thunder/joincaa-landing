/* CAA Careers — application form */
(() => {
  'use strict';

  // Endpoint that receives applications: Case Desk, section «Contratación» (2026-11-15).
  // Before it was an n8n webhook (https://n8n.srv1075657.hstgr.cloud/webhook/Submit).
  const WEBHOOK_URL = 'https://partners.joincaa.team/api/webhooks/solicitud';
  const REQUEST_TIMEOUT_MS = 15000;

  const form = document.getElementById('apply-form');
  if (!form) return;

  const card = document.getElementById('apply');
  const success = card.querySelector('.apply-success');
  const alertBox = form.querySelector('.form-alert');
  const submitBtn = form.querySelector('button[type="submit"]');
  const btnLabel = submitBtn.querySelector('.btn-label');
  const phoneInput = form.elements.phone;

  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Phone mask: (123) 456-7890 ---------- */
  const formatPhone = (value) => {
    let d = value.replace(/\D/g, '');
    if (d.length === 11 && d.startsWith('1')) d = d.slice(1); // strip US country code
    d = d.slice(0, 10);
    if (d.length < 4) return d;
    if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  };
  phoneInput.addEventListener('input', () => {
    phoneInput.value = formatPhone(phoneInput.value);
  });

  /* ---------- Validation ---------- */
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const rules = {
    fullName: (v) => (v.length >= 3 && /\s/.test(v)) || 'Please enter your first and last name.',
    email: (v) => EMAIL_RE.test(v) || 'Please enter a valid email address.',
    phone: (v) => v.replace(/\D/g, '').length === 10 || 'Please enter a 10-digit phone number.',
  };

  const setError = (input, message) => {
    const slot = input.closest('.field').querySelector('.field-error');
    if (message) {
      input.setAttribute('aria-invalid', 'true');
      if (slot) slot.textContent = message;
    } else {
      input.removeAttribute('aria-invalid');
      if (slot) slot.textContent = '';
    }
  };

  const validateField = (name) => {
    const input = form.elements[name];
    const result = rules[name](input.value.trim());
    setError(input, result === true ? '' : result);
    return result === true;
  };

  Object.keys(rules).forEach((name) => {
    const input = form.elements[name];
    input.addEventListener('blur', () => { if (input.value) validateField(name); });
    input.addEventListener('input', () => {
      if (input.getAttribute('aria-invalid') === 'true') validateField(name);
    });
  });

  /* ---------- Helpers ---------- */
  const setLoading = (loading) => {
    submitBtn.disabled = loading;
    submitBtn.classList.toggle('is-loading', loading);
    btnLabel.textContent = loading ? 'Sending…' : 'Submit application';
  };

  const getTracking = () => {
    const params = new URLSearchParams(window.location.search);
    const tracking = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ref'].forEach((key) => {
      const value = params.get(key);
      if (value) tracking[key] = value;
    });
    return tracking;
  };

  const showSuccess = () => {
    form.hidden = true;
    success.hidden = false;
    success.focus({ preventScroll: true });
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  /* ---------- Submit ---------- */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    alertBox.hidden = true;

    const results = Object.keys(rules).map(validateField);
    if (results.includes(false)) {
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }

    // Honeypot filled → silently pretend success (bots).
    if (form.elements.company.value) {
      showSuccess();
      return;
    }

    const data = new FormData(form);
    const payload = {
      fullName: data.get('fullName').trim(),
      email: data.get('email').trim().toLowerCase(),
      phone: formatPhone(data.get('phone')),
      recommendedBy: data.get('recommendedBy').trim() || 'None',
      submittedAt: new Date().toISOString(),
      source: 'joincaa.team',
      pageUrl: window.location.href,
      ...getTracking(),
    };

    setLoading(true);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      showSuccess();
    } catch (error) {
      console.error('Error submitting application:', error);
      alertBox.hidden = false;
    } finally {
      clearTimeout(timer);
      setLoading(false);
    }
  });
})();
