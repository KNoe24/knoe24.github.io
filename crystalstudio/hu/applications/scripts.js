document.addEventListener('DOMContentLoaded', function() {
    // Példa animáció az űrlap szekció betöltésekor
    const formSection = document.querySelector('.form-section');
    formSection.classList.add('section-enter');
    setTimeout(() => {
        formSection.classList.add('section-enter-active');
    }, 500);

    // Példa animáció a Discord szekció betöltésekor
    const discordSection = document.querySelector('.discord-section');
    discordSection.classList.add('section-enter');
    setTimeout(() => {
        discordSection.classList.add('section-enter-active');
    }, 1000);
});
