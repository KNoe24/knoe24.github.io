document.addEventListener('DOMContentLoaded', function() {
    const url = window.location.href;
    const paramName = url.split('#')[1];
    const welcomeMessage = document.getElementById('welcome-message');
    
    if (paramName) {
        welcomeMessage.textContent = `Üdvözöljük, ${paramName}!`;
        welcomeMessage.style.animation = 'fadeIn 2s ease-out';
    } else {
        welcomeMessage.textContent = 'Üdvözöljük!';
        welcomeMessage.style.animation = 'fadeIn 2s ease-out';
    }

    const arrow = document.querySelector('.arrow');
    arrow.addEventListener('click', function() {
        document.getElementById('acceptance').scrollIntoView({ behavior: 'smooth' });
    });
});
