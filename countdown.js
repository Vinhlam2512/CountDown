const newYear = '10 June 2021';

const countdownDays = document.getElementById("days");
const countdownHours = document.getElementById("hours");
const countdownMinutes = document.getElementById("minutes");
const countdownSeconds = document.getElementById("seconds");



function countDown () {
    const newYearDates = new Date(newYear);
    console.log(newYearDates)
    const currentDate = new Date();
    
    const totalSeconds = (newYearDates - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds  % 60);

    countdownDays.innerHTML = days;
    countdownHours.innerHTML = format(hours);
    countdownMinutes.innerHTML = format(minutes);
    countdownSeconds.innerHTML = format(seconds);

} format
function format (time) {
    return time < 10 ? (`0${time}`) : time ;
}

countDown();

setInterval(countDown, 1000);