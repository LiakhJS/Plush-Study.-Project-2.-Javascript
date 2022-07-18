"use strict";

var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var wrongAnswer = document.getElementById("wrong_answer");
var correctAnswer = document.getElementById("correct_answer");
var answer = 0;

function generate_equation() {
  var number1 = Math.floor(Math.random() * 10);
  var number2 = Math.floor(Math.random() * 10);
  var templateAnswer1 = Math.floor(Math.random() * 10);
  var templateAnswer2 = Math.floor(Math.random() * 10);
  var allAnswers = [];
  var switchAnswers = [];
  answer = number1 + number2;
  document.getElementById("number1").innerHTML = number1;
  document.getElementById("number2").innerHTML = number2;
  allAnswers = [answer, templateAnswer1, templateAnswer2];

  for (i = allAnswers.length; i--;) {
    switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  }

  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2];

  if (option1.innerHTML === option2.innerHTML || option1.innerHTML === option3.innerHTML || option2.innerHTML === option3.innerHTML) {
    generate_equation();
  }
}

option1.addEventListener("click", function () {
  if (option1.innerHTML == answer) {
    correctAnswer.play();
    generate_equation();
  } else {
    wrongAnswer.play();
  }
});
option2.addEventListener("click", function () {
  if (option2.innerHTML == answer) {
    correctAnswer.play();
    generate_equation();
  } else {
    wrongAnswer.play();
  }
});
option3.addEventListener("click", function () {
  if (option3.innerHTML == answer) {
    correctAnswer.play();
    generate_equation();
  } else {
    wrongAnswer.play();
  }
});
generate_equation();