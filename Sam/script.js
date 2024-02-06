const constellation = document.getElementById('constellation');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = `${Math.random() * 2}px`;
    star.style.height = star.style.width;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    constellation.appendChild(star);
}

for (let i = 0; i < 50; i++) {
    createStar();
}