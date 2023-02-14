// const seTime = document.querySelector('#seTime')
const play_btn = document.querySelector("#ply_btn");
const stop_btn = document.querySelector("#stop_btn");
const reset_btn = document.querySelector("#reset_btn");

let hrs = 00;
let min = 00;
let sec = 00;
let count = 00;

var timer = false;

play_btn.addEventListener("click", () => {
  timer = true;
  stopWatch();
});
stop_btn.addEventListener("click", () => {
  timer = false;
});
reset_btn.addEventListener("click", () => {
  timer = false;

  document.querySelector("#hours").innerHTML = 00;
  document.querySelector("#minute").innerHTML = 00;
  document.querySelector("#second").innerHTML = 00;
  document.querySelector("#count").innerHTML = 00;
});

function stopWatch() {
  if (timer == true) {
    count = count + 1;

    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hrs = hrs + 1;
      min = 0;
      sec = 0;
    }
    var hrsString = hrs;
    var minString = min;
    var secString = sec;
    var countString = count;

    if (hrs < 10) {
      hrsString = "0" + hrsString;
    }
    if (min < 10) {
      minString = "0" + minString;
    }
    if (sec < 10) {
      secString = "0" + secString;
    }
    if (count < 10) {
      countString = "0" + countString;
    }

    document.getElementById("hours").innerHTML = hrsString;
    document.getElementById("minute").innerHTML = minString;
    document.getElementById("second").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;

    setTimeout("stopWatch()", 10);
  }
}
