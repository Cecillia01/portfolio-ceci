// Fade in on scroll
const fadeEls = document.querySelectorAll('.fade-in');
const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => obs.observe(el));

// Fullscreen image viewer
const images = document.querySelectorAll('.clickable-img');
const fullView = document.getElementById('fullscreen-view');
const fullImg = document.getElementById('fullscreen-img');

images.forEach(img => {
  img.addEventListener('click', () => {
    fullImg.src = img.src;
    fullView.classList.remove('hidden');
  });
});

fullView.addEventListener('click', () => {
  fullView.classList.add('hidden');
});
document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.classList.toggle('open');
  });
});
