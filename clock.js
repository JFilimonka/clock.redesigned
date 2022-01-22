
const handH = document.querySelector('.clock-h')
const handM = document.querySelector('.clock-m')
const handS = document.querySelector('.clock-s')

function clock() {
    const dt = new Date()
    let h = dt.getHours() * 30 + .5 * dt.getMinutes()
    let m = dt.getMinutes() * 6 + .1 * dt.getSeconds()
    let s = dt.getSeconds() * 6 + .006 * dt.getMilliseconds()

    handH.style.transform = `rotate(${h}deg)`
    handM.style.transform = `rotate(${m}deg)`
    handS.style.transform = `rotate(${s}deg)`

    setTimeout(clock, 50)
}

clock()

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
let daysName = days[new Date().getDay()];
let monthName = month[new Date().getMonth()];
let numberName = new Date().getDate();

let daysContainer = document.querySelector('.days');
let dateContainer = document.querySelector('.date');
let monthContainer = document.querySelector('.month');

daysContainer.innerHTML = daysName
dateContainer.innerHTML = numberName
monthContainer.innerHTML = monthName

console.log(numberName, monthName, daysName)
