const selectMenu = document.querySelectorAll("select");
const timebox = document.querySelector(".time");
const setAlarmBtn = document.querySelector("button");
const ringtone = new Audio("../style/audio/ringtone.mp3");
const content = document.querySelector(".content");
let alarmTime;
let alarmState = "noset";

// console.log(selectMenu);
for (i = 23; i >= 0; i--) {
  if (i < 10) {
    i = "0" + i;
  } else {
    i = i;
  }
  let option = ` <option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (i = 59; i >= 0; i--) {
  if (i < 10) {
    i = "0" + i;
  } else {
    i = i;
  }
  let option = ` <option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  if (h <= 9) {
    h = "0" + h;
  } else {
    h = h;
  }
  if (m <= 9) {
    m = "0" + m;
  } else {
    m = m;
  }
  if (s <= 9) {
    s = "0" + s;
  } else {
    s = s;
  }
  timebox.innerHTML = `${h}:${m}:${s}`;
  if (alarmTime == `${h}:${m}`) {
    // console.log("ring");
    ringtone.play();
    ringtone.loop = true;
  }
}, 1000);

setAlarmBtn.addEventListener("click", () => {
  alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`;
  if (alarmTime.includes("Hour") || alarmTime.includes("Minutes")) {
    return alert("زمان هشدار را به درستی مشخص کنید");
  }
  checkState(alarmState);
});
function checkState(state) {
  if (state == "noset") {
    content.classList.add("disable");
    setAlarmBtn.innerHTML = "clear alarm";
    alarmState = "set";
  } else {
    content.classList.remove("disable");
    alarmTime = "";
    ringtone.pause();
    alarmState = "noset";
    setAlarmBtn.innerHTML = 'set alarm'
  }
}
