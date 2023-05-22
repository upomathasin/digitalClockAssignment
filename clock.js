setInterval(clock, 1000);
function clock() {
  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let second = date.getSeconds();
  let amOrpm = "AM";

  if (hours > 12) {
    hours = hours - 12;
    amOrpm = "PM";
  } else if (hours == 0) {
    hours = 12;
    amOrpm = "AM";
  } else {
    amOrpm = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  min = min < 10 ? "0" + min : min;
  second = second < 10 ? "0" + second : second;

  let time = hours + ":" + min + ":" + second + " " + amOrpm;
  document.getElementById("date").innerText = date.toDateString();
  document.getElementById("time").innerText = time;
  console.log(time);
}
clock();
