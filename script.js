// ══════════════════════════════════════
//   7FIRESPAN – script.js
// ══════════════════════════════════════

// ── GANTI USERNAME IG DI SINI ──────────────────────
const IG_USERNAME = '7_firespan'; // ← ganti dengan username IG kalian!
// ───────────────────────────────────────────────────

const IG_DM = `https://ig.me/m/${IG_USERNAME}`;
document.querySelectorAll('.ig-link').forEach(a => {
  a.href = IG_DM;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
});

// ── PAGE SWITCHING ──
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + id);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.dataset.page === id);
  });
  // tutup hamburger menu
  hamburger.classList.remove('open');
  navMenu.classList.remove('open');
}

// nav links
document.querySelectorAll('.nav-link').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    showPage(a.dataset.page);
  });
});

// ── HAMBURGER ──
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// ── LIFT ON PRESS (touch) ──
// CSS :active handle desktop/mouse, ini untuk touch
const pressTargets = '.product-card, .unggulan-card, .harga-card';
document.querySelectorAll(pressTargets).forEach(el => {
  el.addEventListener('touchstart', () => {
    el.classList.add('pressing');
  }, { passive: true });
  ['touchend', 'touchcancel'].forEach(ev =>
    el.addEventListener(ev, () => {
      setTimeout(() => el.classList.remove('pressing'), 200);
    })
  );
});
