/**
 * DiSEC — Main JavaScript
 * Navbar scroll, mobile menu, tabs, role-card selector,
 * contact form validation, scroll animations.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. NAVBAR SCROLL ELEVATION ───────────────────────── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* ── 2. MOBILE HAMBURGER MENU ─────────────────────────── */
  const hamburger    = document.getElementById('hamburger');
  const mobileDrawer = document.getElementById('mobile-drawer');

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileDrawer.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close drawer on any internal link
  mobileDrawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileDrawer.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ── 3. ACTIVE NAVBAR LINK (scroll spy) ───────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a[href^="#"]');

  const activateLink = (id) => {
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
    });
  };

  const spyObserver = new IntersectionObserver(
    entries => {
      entries.forEach(e => { if (e.isIntersecting) activateLink(e.target.id); });
    },
    { threshold: 0.4 }
  );
  sections.forEach(s => spyObserver.observe(s));

  /* ── 4. ROLE-CARD SELECTOR ────────────────────────────── */
  const roleCards  = document.querySelectorAll('.role-card');
  const roleSelect = document.getElementById('role-select');

  roleCards.forEach(card => {
    card.addEventListener('click', () => {
      roleCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      // Sync with the hidden select inside the form
      if (roleSelect) roleSelect.value = card.dataset.role;
    });
  });

  /* ── 5. CONTACT FORM VALIDATION ──────────────────────── */
  const form        = document.getElementById('contact-form');
  const formInner   = document.getElementById('form-inner');
  const formSuccess = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;

      const fields = [
        { id: 'f-name',    err: 'err-name',    check: v => v.trim().length > 1 },
        { id: 'f-email',   err: 'err-email',   check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
        { id: 'f-company', err: 'err-company', check: v => v.trim().length > 1 },
        { id: 'f-role',    err: 'err-role',    check: v => v !== '' },
      ];

      fields.forEach(({ id, err, check }) => {
        const input = document.getElementById(id);
        const errEl = document.getElementById(err);
        const ok    = check(input.value);
        input.classList.toggle('form-input-error', !ok);
        errEl.classList.toggle('show', !ok);
        if (!ok) valid = false;
      });

      if (!valid) return;

      // Simulate secure submission
      const submitBtn = document.getElementById('submit-btn');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="spin-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
        Sending…
      `;

      setTimeout(() => {
        formInner.style.display   = 'none';
        formSuccess.classList.add('show');
      }, 950);
    });

    // Clear error on input change
    form.querySelectorAll('input, select, textarea').forEach(el => {
      el.addEventListener('input', () => {
        el.classList.remove('form-input-error');
        const errId = 'err-' + el.id.replace('f-', '');
        const errEl = document.getElementById(errId);
        if (errEl) errEl.classList.remove('show');
      });
    });
  }

  /* ── 6. SCROLL FADE-IN ANIMATIONS ────────────────────── */
  const fadeEls = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          fadeObserver.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    fadeEls.forEach(el => fadeObserver.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('in-view'));
  }

});

/* ── SPINNER CSS injected so no extra file needed ───────── */
const spinStyle = document.createElement('style');
spinStyle.textContent = `
  @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  .spin-icon { animation: spin 0.8s linear infinite; display:inline-block; }
  #submit-btn { display:inline-flex; align-items:center; gap:8px; }
`;
document.head.appendChild(spinStyle);
