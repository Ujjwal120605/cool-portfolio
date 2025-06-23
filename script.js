// Toggle Theme
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Show Back to Top button on scroll
const backToTopBtn = document.getElementById('back-to-top');

window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Scroll to top on button click
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Time-based greeting
window.addEventListener('DOMContentLoaded', () => {
  const hour = new Date().getHours();
  let greeting = "👋 Hi";

  if (hour < 12) greeting = "☀️ Good Morning";
  else if (hour < 18) greeting = "🌤️ Good Afternoon";
  else greeting = "🌙 Good Evening";

  document.querySelector('header h1').textContent = `${greeting}, I'm Ujjwal`;
});
