// Bounce animation on button
document.getElementById('animateMe').addEventListener('click', () => {
  const btn = document.getElementById('animateMe');
  btn.classList.remove('bounce'); // reset
  void btn.offsetWidth;           // reflow hack
  btn.classList.add('bounce');
});

// Theme selector + localStorage
const themeSelect = document.getElementById('themeSelect');

// Load theme from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
    themeSelect.value = savedTheme;
  }
});

// Save theme on change
themeSelect.addEventListener('change', () => {
  const selected = themeSelect.value;
  localStorage.setItem('theme', selected);
  applyTheme(selected);
});

// Apply theme by setting CSS variables
function applyTheme(mode) {
  if (mode === 'dark') {
    document.body.style.setProperty('--bg', '#121212');
    document.body.style.setProperty('--text', '#ffffff');
  } else {
    document.body.style.setProperty('--bg', '#f0f4f8');
    document.body.style.setProperty('--text', '#333333');
  }
}
