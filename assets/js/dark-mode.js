const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeSwitch = document.getElementById('dark-mode-switch');
const body = document.body;

darkModeSwitch.addEventListener('change', () => {
  if (darkModeSwitch.checked) {
    body.classList.add('dark-mode');
    // Set a flag to remember dark mode state (optional)
    localStorage.setItem('darkMode', 'enabled');
  } else {
    body.classList.remove('dark-mode');
    // Set a flag to remember dark mode state (optional)
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Check for previously saved dark mode state (optional)
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'enabled') {
  body.classList.add('dark-mode');
  darkModeSwitch.checked = true;
}
