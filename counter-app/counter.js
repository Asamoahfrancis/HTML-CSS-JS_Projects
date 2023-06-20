const decrese = document.getElementById("but_one");
const reset = document.getElementById("but_two");
const increase = document.getElementById("but_three");
const get_butt_container = document.querySelector(".button_conatainer");
const get_sec_two = document.querySelector(".sec_two");
let count = 0;

get_butt_container.addEventListener("click", DAO_ALL);
function DAO_ALL(e) {
  if (e.target === decrese) {
    decrement();
  } else if (e.target === increase) {
    Increament();
  } else {
    reset_();
  }
}

function Increament() {
  setInterval(function () {
    get_sec_two.innerHTML = ++count;
  }, 900);
}

function decrement() {
  get_sec_two.innerHTML = --count;
}
function reset_() {
  count = 0;
  get_sec_two.innerHTML = count;
}
