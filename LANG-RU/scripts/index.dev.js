"use strict";

var openBtn = document.querySelector('.open-button');
var closeBtn = document.querySelector('.cancel');

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

openBtn.addEventListener('click', function (e) {
  openForm();
});
closeBtn.addEventListener('click', function (e) {
  closeForm();
});
var subscriptionActive = document.querySelector('#subscription-active');