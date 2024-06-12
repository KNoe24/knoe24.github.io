// script.js
document.addEventListener("DOMContentLoaded", () => {
    const background = document.querySelector('.background');
    const blockCount = 1000; // Adjust this number based on your needs

    for (let i = 0; i < blockCount; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.animationDelay = `${Math.random() * 2}s`;
        background.appendChild(block);
    }
});
