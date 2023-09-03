// Mock user authentication
let currentUser = null;

function login(username, password) {
  // Simulate user login
  if (username === 'user' && password === 'password') {
    currentUser = { username };
    return true;
  }
  return false;
}

function logout() {
  currentUser = null;
}

function getCurrentUser() {
  return currentUser;
}
