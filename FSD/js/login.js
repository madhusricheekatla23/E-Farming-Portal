// login.js

// Get form elements
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Toggle between login and register forms
function toggleForms() {
  loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
  registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
}

// Handle login form submission
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Fake authentication (replace with actual backend validation)
  if (email === 'test@example.com' && password === 'password123') {
    alert('Login successful!');
  } else {
    alert('Invalid email or password!');
  }
});

// Handle register form submission
registerForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  // Fake registration (you can store the data in localStorage or integrate with a backend)
  alert(`Registration successful! Welcome, ${name}`);
});
