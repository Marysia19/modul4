
const shapes = document.querySelectorAll('.shapes > div');
setInterval(() => {
    shapes.forEach(shape => {
        shape.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)`;
    });
}, 4000);
