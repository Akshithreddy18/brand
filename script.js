// Basic interactions: mobile menu toggle, smooth scroll, back-to-top, set current year
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  const backToTop = document.getElementById('backToTop');

  // Menu toggle
  menuBtn.addEventListener('click', function () {
    const open = menuBtn.classList.toggle('open');
    nav.classList.toggle('show', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close nav when clicking a nav link (mobile)
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      menuBtn.classList.remove('open');
      nav.classList.remove('show');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Back to top visibility
  window.addEventListener('scroll', function () {
    if (window.scrollY > window.innerHeight / 2) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Set current year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});