document.addEventListener('DOMContentLoaded', () => {

    alert('¡Bienvenido a mi mini sitio web!');
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    
    const body = document.body;
    themeToggleButton.addEventListener('click', () => {

        body.classList.toggle('dark-mode');
    });

});