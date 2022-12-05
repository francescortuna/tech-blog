const signupFormHandler = async (event) => {
    event.preventDefault();
    
    const email = document.querySelector('#signup-email').value.trim();
    const username = document.querySelector('#signup-username').value;
    const password = document.querySelector('#signup-password').value;
  
    if (email && username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
}

document.querySelector(".signup").addEventListener("submit", signupFormHandler);