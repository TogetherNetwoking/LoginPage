document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Simulated login functionality
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'unknown' && password === 'unknown123') {
    // Uncomment the following line and replace 'next_page.html' with the actual URL of your next page
    window.location.href = 'https://togethernetwoking.github.io/Homepage/';
  } else if (username === 'user' && password === 'user123') {
    
    // Uncomment the following line and replace 'next_page.html' with the actual URL of your next page
    window.location.href = 'https://togethernetwoking.github.io/Homepage/';
  } else {
    alert('Invalid username or password. Please try again.');
  }
});
