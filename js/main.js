// Bipolar Gossamer: small, dependency-free interactions
document.documentElement.classList.add('js');

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('open', !open);
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
  }));
}

// Header shadow once scrolled
const header = document.querySelector('.site-header');
const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Hero: tap / click / first scroll gesture moves to the next section
const hero = document.getElementById('hero');
const next = document.getElementById('welcome');
if (hero && next) {
  const go = () => next.scrollIntoView({ behavior: 'smooth' });
  hero.addEventListener('click', e => { if (!e.target.closest('a')) go(); });

  let advanced = false;
  const atHero = () => window.scrollY < hero.offsetHeight * 0.25;
  window.addEventListener('wheel', e => {
    if (!advanced && e.deltaY > 0 && atHero()) { advanced = true; e.preventDefault(); go(); }
  }, { passive: false });
  window.addEventListener('scroll', () => { if (atHero()) advanced = false; }, { passive: true });
}

// Reveal-on-scroll
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => io.observe(el));
} else {
  reveals.forEach(el => el.classList.add('visible'));
}

// YouTube embed: set data-video-id in index.html to show a video
document.querySelectorAll('.yt[data-video-id]').forEach(box => {
  const id = box.dataset.videoId.trim();
  if (!id) return;
  box.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}"
    title="Bipolar Gossamer on YouTube" loading="lazy"
    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
});

// Lead-magnet form placeholder until an email service is connected
document.querySelectorAll('form[data-placeholder="true"]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const note = form.querySelector('.form-note');
    if (note) note.textContent = 'Sign-ups open soon. Thanks for your patience!';
  });
});

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Hide broken images (e.g. before photos are added) so the soft placeholder shows instead
document.querySelectorAll('.img-frame img').forEach(img => {
  const hide = () => img.classList.add('missing');
  if (img.complete && img.naturalWidth === 0) hide();
  img.addEventListener('error', hide);
});
