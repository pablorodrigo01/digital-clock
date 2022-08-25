const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time(){
    let dateToday = new Date();
    let hrs = dateToday.getHours();
    let mins = dateToday.getMinutes();
    let scds = dateToday.getSeconds();

    if (hrs < 10) hrs = '0' + hrs;

    if (mins < 10) mins = '0' + mins;

    if (scds < 10) scds = '0' + scds;

    hours.textContent = hrs;
    minutes.textContent = mins;
    seconds.textContent = scds;
})