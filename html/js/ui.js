/* CAA Careers — scroll reveals (benefits pop in, the steps line fills).
   Content is fully visible without JS or with reduced motion; this only adds motion. */
(() => {
  'use strict';
  const items = document.querySelectorAll('[data-reveal]');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!items.length || reduce || !('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('has-reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -15% 0px', threshold: 0.15 });
  items.forEach((el) => io.observe(el));
})();
