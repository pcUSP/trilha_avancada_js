const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDegrees = (hours * 30) + (0.5 * minutes);
    const minuteDegrees = (minutes * 6) + (0.1 * seconds);
    const secondDegrees = seconds * 6;

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(updateClock, 1000); // Atualiza o relógio a cada segundo
updateClock(); // Chama a função pela primeira vez para evitar atrasos no início
