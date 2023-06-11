class Form_details {
  constructor(username, email, password, comfirm_password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.comfirm_password = comfirm_password;
  }
}

const classes_all = document.getElementsByTagName("input");
for (const iterator of classes_all) {
  iterator.addEventListener("focus", function (e) {
    iterator.style.border = "2px solid black";
  });
}
for (const iterator of classes_all) {
  iterator.addEventListener("blur", function (e) {
    iterator.style.border = "1px solid lightgray";
  });
}
const span_one = document.querySelector(".one");
const span_two = document.querySelector(".two");
const span_three = document.querySelector(".three");
const span_four = document.querySelector(".four");

const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const comformed_password = document.getElementById("confirm");

let user_value = userName.value;
let e_value = email.value;
let p_value = password.value;
let c_firm = comformed_password.value;

userName.addEventListener("change", function (e) {
  user_value = e.target.value;
});
email.addEventListener("change", function (e) {
  e_value = e.target.value;
});
password.addEventListener("change", function (e) {
  p_value = e.target.value;
});
comformed_password.addEventListener("change", function (e) {
  c_firm = e.target.value;
});

const kobby = new Form_details(user_value, e_value, p_value, c_firm);
const my_button = document.getElementById("mybutt");
my_button.addEventListener("click", Authenticate);
function Authenticate(e) {
  if (user_value !== "") {
    userName.style.border = "2px solid forestgreen";
    span_one.style.display = "none";
  } else {
    userName.style.border = "2px solid tomato";
    span_one.style.display = "block";
  }
  if (e_value !== "") {
    email.style.border = "2px solid forestgreen";
    span_two.style.display = "none";
  } else {
    email.style.border = "2px solid tomato";
    span_two.style.display = "block";
  }
  if (p_value !== "") {
    password.style.border = "2px solid forestgreen";
    span_three.style.display = "none";
  } else {
    password.style.border = "2px solid tomato";
    span_three.style.display = "block";
  }
  if (c_firm !== "") {
    comformed_password.style.border = "2px solid forestgreen";
    span_four.style.display = "none";
  } else {
    comformed_password.style.border = "2px solid tomato";
    span_four.style.display = "block";
  }
}

fetch("middle.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (new_response) {
    new_response.username = "macdan";
    console.log(new_response);
  });
