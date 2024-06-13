// script.js
document.addEventListener("DOMContentLoaded", () => {
    const background = document.querySelector('.background');
    const diamondCount = 30; // Adjust the number of diamonds

    for (let i = 0; i < diamondCount; i++) {
        const diamond = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        diamond.setAttribute("class", "diamond");
        diamond.setAttribute("viewBox", "0 0 64 64");

        const diamondShape = document.createElementNS("http://www.w3.org/2000/svg", "path");
        diamondShape.setAttribute("class", "svg-diamond");
        diamondShape.setAttribute("d", `
            M32 2 L2 22 L32 62 L62 22 Z 
            M32 2 L32 62 
            M2 22 L62 22 
            M12 22 L32 62 L52 22 Z
        `); // Diamond shape path with lines

        diamond.appendChild(diamondShape);
        diamond.style.left = `${Math.random() * 100}vw`;
        diamond.style.animationDuration = `${Math.random() * 8 + 5}s`;
        diamond.style.animationDelay = `${Math.random() * 10}s`;
        background.appendChild(diamond);
    }
});
