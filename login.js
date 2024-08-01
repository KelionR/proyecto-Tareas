document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    
    loginButton.addEventListener('click', () => {
        
        const email = document.getElementById('inputEmail4').value;
        const password = document.getElementById('inputPassword4').value;

        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        if (email === storedEmail && password === storedPassword) {
            alert('Inicio de sesión exitoso.');
           
            window.location.href = 'proyectoTareas.html';

        } else {
            alert('Contraseña o Email incorrectos.');
        }
    });
});