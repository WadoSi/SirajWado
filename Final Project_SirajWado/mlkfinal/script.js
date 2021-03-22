"use strict";
/*
name: Siraj Wado
file name: script.js
*/




window.onload = checktime;
function checktime() {

  document.getElementById("displaydate").addEventListener("click", display);

}
function display() {
  document.getElementById("date").innerHTML = Date();
}
//changing color on keydown
document.getElementById("fname").addEventListener("keydown", myFunction);

function myFunction() {
  document.getElementById("fname").style.backgroundColor = "red";
}

document.getElementById("fname1").addEventListener("keydown", myFunction2);

function myFunction2() {
  document.getElementById("fname1").style.backgroundColor = "red";
}
document.getElementById("fname2").addEventListener("keydown", myFunction3);

function myFunction3() {
  document.getElementById("fname2").style.backgroundColor = "red";
}

function removeColor() {
  document.getElementById("color").classList.remove("style");
}


document.getElementById("mouseOver").addEventListener("mouseover", mouseOver);
document.getElementById("mouseOver").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("mouseOver").style.color = "red";
}

function mouseOut() {
  document.getElementById("mouseOver").style.color = "black";
}
function Action() {
  alert("Please fill free to sign up below");
 };
