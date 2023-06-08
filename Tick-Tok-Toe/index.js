var get_all_span = document.getElementsByTagName("span");

var sec_one_id = document.getElementById("sec_one_id").getAttribute("id");
var sec_two_id = document.getElementById("sec_two_id").getAttribute("id");
var sec_three_id = document.getElementById("sec_three_id").getAttribute("id");
var sec_four_id = document.getElementById("sec_four_id").getAttribute("id");
var sec_five_id = document.getElementById("sec_five_id").getAttribute("id");
var sec_six_id = document.getElementById("sec_six_id").getAttribute("id");
var sec_seven_id = document.getElementById("sec_seven_id").getAttribute("id");
var sec_eight_id = document.getElementById("sec_eight_id").getAttribute("id");
var sec_nine_id = document.getElementById("sec_nine_id").getAttribute("id");

function Generic_function(id) {
  return function () {
    switch (id) {
      case sec_one_id:
        if (
          document.getElementById(sec_one_id).getAttribute("class") ===
          "sec_class"
        ) {
          document.getElementById(sec_one_id).setAttribute("class", "zero");
          var span_get = document.getElementsByTagName("span");
          span_get[0].innerHTML = "X";
          console.log("1_X");
        } else {
          document
            .getElementById(sec_one_id)
            .setAttribute("class", "sec_class");
          var span_get = document.getElementsByTagName("span");
          span_get[0].innerHTML = "O";
          console.log("1_O");
        }

        break;

      case sec_two_id:
        if (
          document.getElementById(sec_two_id).getAttribute("class") ===
          "sec_class"
        ) {
          document.getElementById(sec_two_id).setAttribute("class", "zero");
          var span_get = document.getElementById("two_span");
          span_get.innerHTML = "X";
          console.log("2_X");
        } else {
          document
            .getElementById(sec_two_id)
            .setAttribute("class", "sec_class");
          var span_get = document.getElementById("two_span");
          span_get.innerHTML = "O";
          console.log("2_O");
        }

        break;

      case sec_three_id:
        if (
          document.getElementById(sec_three_id).getAttribute("class") ===
          "sec_class"
        ) {
          document.getElementById(sec_three_id).setAttribute("class", "zero");
          var span_get = document.getElementById("three_span");
          span_get.innerHTML = "X";
          console.log("3_X");
        } else {
          document
            .getElementById(sec_three_id)
            .setAttribute("class", "sec_class");
          var span_get = document.getElementById("three_span");
          span_get.innerHTML = "O";
          console.log("3_O");
        }

        break;

      case sec_four_id:
        if (
          document.getElementById(sec_four_id).getAttribute("class") ===
          "sec_class"
        ) {
          document.getElementById(sec_four_id).setAttribute("class", "zero");
          var span_get = document.getElementById("four_span");
          span_get.innerHTML = "X";
          console.log("4_X");
        } else {
          document
            .getElementById(sec_four_id)
            .setAttribute("class", "sec_class");
          var span_get = document.getElementById("four_span");
          span_get.innerHTML = "O";
          console.log("4_O");
        }

        break;

      case sec_five_id:
        if (
          document.getElementById(sec_five_id).getAttribute("class") ===
          "sec_class"
        ) {
          document.getElementById(sec_five_id).setAttribute("class", "zero");
          var span_get = document.getElementById("five_span");
          span_get.innerHTML = "X";
          console.log("5_X");
        } else {
          document
            .getElementById(sec_five_id)
            .setAttribute("class", "sec_class");
          var span_get = document.getElementById("five_span");
          span_get.innerHTML = "O";
          console.log("5_O");
        }

        break;

      case sec_six_id:
        if (
          document.getElementById(sec_six_id).getAttribute("class") ===
          "sec_class"
        ) {
          document.getElementById(sec_six_id).setAttribute("class", "zero");
          var span_get = document.getElementById("six_span");
          span_get.innerHTML = "X";
          console.log("6_X");
        } else {
          document
            .getElementById(sec_six_id)
            .setAttribute("class", "sec_class");
          var span_get = document.getElementById("six_span");
          span_get.innerHTML = "O";
          console.log("6_O");
        }

        break;

      case sec_seven_id:
        if (
          document.getElementById(sec_seven_id).getAttribute("class") ===
          "sec_class"
        ) {
          document.getElementById(sec_seven_id).setAttribute("class", "zero");
          var span_get = document.getElementById("seven_span");
          span_get.innerHTML = "X";
          console.log("7_X");
        } else {
          document
            .getElementById(sec_seven_id)
            .setAttribute("class", "sec_class");
          var span_get = document.getElementById("seven_span");
          span_get.innerHTML = "O";
          console.log("7_O");
        }

        break;

      case sec_eight_id:
        if (
          document.getElementById(sec_eight_id).getAttribute("class") ===
          "sec_class"
        ) {
          document.getElementById(sec_eight_id).setAttribute("class", "zero");
          var span_get = document.getElementById("eight_span");
          span_get.innerHTML = "X";
          console.log("8_X");
        } else {
          document
            .getElementById(sec_eight_id)
            .setAttribute("class", "sec_class");
          var span_get = document.getElementById("eight_span");
          span_get.innerHTML = "O";
          console.log("8_O");
        }

        break;

      case sec_nine_id:
        if (
          document.getElementById(sec_nine_id).getAttribute("class") ===
          "sec_class"
        ) {
          document.getElementById(sec_nine_id).setAttribute("class", "zero");
          var span_get = document.getElementById("nine_span");
          span_get.innerHTML = "X";
          console.log("9_X");
        } else {
          document
            .getElementById(sec_nine_id)
            .setAttribute("class", "sec_class");
          var span_get = document.getElementById("nine_span");
          span_get.innerHTML = "O";
          console.log("9_O");
        }

        break;
      default:
        break;
    }
  };
}

var event_array = [];
var id_array = [];

var event_id_one = Generic_function(sec_one_id);
var event_id_two = Generic_function(sec_two_id);
var event_id_three = Generic_function(sec_three_id);
var event_id_four = Generic_function(sec_four_id);
var event_id_five = Generic_function(sec_five_id);
var event_id_six = Generic_function(sec_six_id);
var event_id_seven = Generic_function(sec_seven_id);
var event_id_eight = Generic_function(sec_eight_id);
var event_id_nine = Generic_function(sec_nine_id);

document
  .getElementById("sec_one_id")
  .addEventListener("click", event_id_one, false);
document
  .getElementById("sec_two_id")
  .addEventListener("click", event_id_two, false);
document
  .getElementById("sec_three_id")
  .addEventListener("click", event_id_three, false);
document
  .getElementById("sec_four_id")
  .addEventListener("click", event_id_four, false);
document
  .getElementById("sec_five_id")
  .addEventListener("click", event_id_five, false);
document
  .getElementById("sec_six_id")
  .addEventListener("click", event_id_six, false);
document
  .getElementById("sec_seven_id")
  .addEventListener("click", event_id_seven, false);
document
  .getElementById("sec_eight_id")
  .addEventListener("click", event_id_eight, false);
document
  .getElementById("sec_nine_id")
  .addEventListener("click", event_id_nine, false);

var but = document.getElementById("mybut");
but.addEventListener("click", function () {
  for (let index = 0; index < get_all_span.length; index++) {
    get_all_span[index].innerHTML = "";
  }
});
