document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('saveButton');

    saveButton.addEventListener('click', () => {
        const email = document.getElementById('inputEmail4').value.trim();
        const password = document.getElementById('inputPassword4').value;
        const confirmPassword = document.getElementById('inputConfirmPassword').value;
        const city = document.getElementById('inputCity').value.trim();

        if (!email || !password || !confirmPassword || !city) {
            alert('Todos los campos son obligatorios.');
            return;
        }

        if (password !== confirmPassword) {
            alert('La contraseña no coinciden.');
            return;
        }

        const storedEmail = localStorage.getItem('userEmail');

        if (storedEmail) {
            alert('El email ya está registrado.');
            return;
        }

        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        alert('Datos guardados correctamente. Puedes iniciar sesión ahora.');
        window.location.href = 'login.html';
    });
});