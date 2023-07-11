// Sample user credentials
const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' }
  ];
  
  // Function to handle the login process
  function login() {
    // Get the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Check if the credentials match a user in the array
    const user = users.find(user => user.username === username && user.password === password);
  
    // Check if user exists
    if (user) {
      // Successful login
      alert('Login successful!');
      // Perform any further actions (e.g., redirecting to another page)
    } else {
      // Failed login
      alert('Invalid username or password. Please try again.');
    }
  }
  
  // Attach event listener to login button
  document.getElementById('loginButton').addEventListener('click', login);