// Array to store registered users
const users = [];

// Function to handle the sign-up process
function signUp() {
  // Get the entered username and password
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username is already taken
  const isUsernameTaken = users.some(user => user.username === username);

  if (isUsernameTaken) {
    alert('Username is already taken. Please choose a different one.');
  } else {
    // Register the new user
    users.push({ username, password });

    // Successful sign-up
    alert('Sign-up successful!');
    // Perform any further actions (e.g., redirecting to another page)
  }
}

// Attach event listener to sign-up button
document.getElementById('signUpButton').addEventListener('click', signUp);