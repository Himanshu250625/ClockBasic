const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setClock() {
  const now = new Date();
  const getSecond = now.getSeconds();
  const getMinute = now.getMinutes();
  const getHour = now.getHours();

  const secondDeg = (getSecond / 60) * 360;
  const minuteDeg = ((getMinute + getSecond / 60) / 60) * 360;
  const hourDeg = ((getHour % 12 + getMinute / 60) / 12) * 360;

  second.style.transform = `rotate(${secondDeg}deg)`;
  minute.style.transform = `rotate(${minuteDeg}deg)`;
  hour.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setClock, 1000);
setClock();
