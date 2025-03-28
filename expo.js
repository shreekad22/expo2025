document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email && password) {
        if (password.length < 8) {
            alert('Password must be at least 8 characters long!');
            return; 
        }
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        window.location.href = 'home.html';  
    } else {
        alert('Please enter both email and password!');
    }
});
