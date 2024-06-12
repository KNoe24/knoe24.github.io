// script.js
document.addEventListener("DOMContentLoaded", () => {
    const background = document.querySelector('.background');
    const blockCount = 100; // Adjust the number of blocks

    for (let i = 0; i < blockCount; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = `${Math.random() * 100}vw`;
        block.style.animationDuration = `${Math.random() * 3 + 2}s`;
        block.style.animationDelay = `${Math.random() * 5}s`;
        background.appendChild(block);
    }
});
