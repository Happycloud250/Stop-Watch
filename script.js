const timeTag = document.getElementsByClassName("time")[0];
const milliSecondTag = document.getElementsByClassName("ms")[0];
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const continuesButton = document.getElementById("continues");
const restartButton = document.getElementById("restart");
let hour = 0,
    minute = 0,
    second = 0,
    ms = 0;



const startTime = () => {
    ms += 4;
    if (ms === 1000) {
        ms = 0;
        second += 1;
        if (second === 60) {
            second = 0;
            minute += 1;
            if (minute === 60) {
                minute = 0;
                hour += 1;
            }
        }
    }
    let hourCondition = hour < 10 ? ("0" + hour) : hour;
    let minuteCondiction = minute < 10 ? ("0" + minute) : minute;
    let secondCondiction = second < 10 ? ("0" + second) : second;
    let milliSecondCondiction = ms < 10 ? ("00" + ms) : ms < 100 ? ("0" + ms) : ms;
    timeTag.textContent =
        hourCondition + ":" +
        minuteCondiction + ":" +
        secondCondiction;
    milliSecondTag.textContent = milliSecondCondiction;
};


let interval;
startButton.addEventListener("click", () => {
    interval = setInterval(startTime, 1);




});
pauseButton.addEventListener("click", () => {

    clearInterval(interval);


});
continuesButton.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startTime, 1);




});
restartButton.addEventListener("click", () => {

    hour = 0;
    minute = 0;
    second = 0;
    ms = 0;
    clearInterval(interval);
    interval = setInterval(startTime, 1);

});