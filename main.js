const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const second = now.getSeconds();
    const secDegree = ((second / 60 ) * 360) + 90;
    secondHand.style.transform = `${secDegree}deg`;

    const minute = now.getMinutes();
    const minDegree = ((minute / 60) * 360) + ((second/60) * 6) + 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour/ 12) *  360) + ((minute/60) *360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    
}
setInterval(setDate, 1000);
setDate();