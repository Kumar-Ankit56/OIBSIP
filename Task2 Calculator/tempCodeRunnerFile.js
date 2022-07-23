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