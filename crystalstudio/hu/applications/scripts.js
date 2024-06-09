document.addEventListener('DOMContentLoaded', function() {
    // Example animation on form section load
    const formSection = document.querySelector('.form-section');
    formSection.style.opacity = 0;
    setTimeout(() => {
        formSection.style.transition = 'opacity 1s';
        formSection.style.opacity = 1;
    }, 500);
});
