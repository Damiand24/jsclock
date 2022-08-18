const armHrs = document.querySelector('.armHours');
const armMins = document.querySelector('.armMinutes');
const armSecs = document.querySelector('.armSeconds');
const timeP = document.querySelector('#time');

const setTime = () => {
    const now = new Date();
    const secs = now.getSeconds();
    const mins = now.getMinutes();
    const hrs = now.getHours();

    const displayTime = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`; 
    timeP.textContent = displayTime;

    armSecs.style.transform = `rotate(${secs * 6 + 90}deg)`
    armMins.style.transform = `rotate(${mins * 6 + 90}deg)`
    armHrs.style.transform = `rotate(${hrs * 30 + 90}deg)`

};

window.setInterval(setTime, 1000);