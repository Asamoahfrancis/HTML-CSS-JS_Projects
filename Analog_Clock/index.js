let angel = 0;
let sec_get = document.querySelector(".bar");
setInterval(function () {
  sec_get.style.transform = `rotateZ(${(angel += 4)}deg)`;
}, 100);
