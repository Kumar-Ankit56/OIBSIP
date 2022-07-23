//Global value
var value = " ";

//function to assign values
function view(input) {
  input = String(input);
  value += input;
  document.getElementById("output2").innerHTML = value;
}

//To clear everything on output display
function clr() {
  document.getElementById("output2").innerHTML = "";
  document.getElementById("output1").innerHTML = "";

  value = " ";
}

//To cancel last digit
function back() {
  value = String(value);

  if (
    value.length - 1 == 0 ||
    value == "INVALID" ||
    value == "undefined" ||
    value == "Infinity"
  ) {
    clr();
  } else {
    //substring method generally extract the some part from the original string
    value = value.substring(0, value.length - 1);
  }
  document.getElementById("output2").innerHTML = value;
}

//To evaluate
function eq() {
  var len = value.length - 1;
  document.getElementById("output1").innerHTML = value;

  //to catch any error
  try {
    value = String(eval(value));
  } catch (e) {
    value = "INVALID";
  }

  //To show output
  document.getElementById("output2").innerHTML = value;
}

