
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        console.log('S')
        var xOffset = e.clientX - card.getBoundingClientRect().left - card.offsetWidth / 2;
        var yOffset = e.clientY - card.getBoundingClientRect().top - card.offsetHeight / 2;
        const xAxis = yOffset / 8; 
        const yAxis = -xOffset / 5;
        console.log(yOffset / 8)
        card.style.transform = `scale(${1.1}) rotateY(${yAxis}deg) rotateX(${xAxis}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
        
        console.log('S')
        card.style.transform = `rotateY(0deg) rotateX(0deg) translateY(0)`;
    });
});
