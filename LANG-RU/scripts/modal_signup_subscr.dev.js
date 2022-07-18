"use strict";

var modalSignUp = document.querySelector('.user-modal');
var login = document.querySelector('#login');
var registration = document.querySelector('#signup');
var loginBtn = document.querySelector("#switcher-login");
var registrBtn = document.querySelector("#switcher-registr");
var switchers = document.querySelector('.switcher');
var switcherLogin = switchers.getElementsByTagName('li')[0].getElementsByTagName('a')[0];
var switcherRegistration = switchers.getElementsByTagName('li')[1].getElementsByTagName('a')[0];

var openModalSignUp = function openModalSignUp() {
  modalSignUp.classList.add('is-visible');
  loginIsSelected();
};

var loginIsSelected = function loginIsSelected() {
  login.classList.add('is-selected');
  registration.classList.remove('is-selected');
  switcherLogin.classList.add('selected');
  switcherRegistration.classList.remove('selected');
};

var signupIsSelected = function signupIsSelected() {
  login.classList.remove('is-selected');
  registration.classList.add('is-selected');
  switcherLogin.classList.remove('selected');
  switcherRegistration.classList.add('selected');
};

window.addEventListener('click', function (event) {
  if (event.target === registrBtn) {
    signupIsSelected();
    event.preventDefault();
  } else if (event.target === loginBtn) {
    loginIsSelected();
    event.preventDefault();
  }
});
window.addEventListener('keydown', function (event) {
  if (event.code === 'Escape') {
    modalSignUp.classList.remove('is-visible');
  }
});
window.addEventListener('click', function (event) {
  if (event.target === modalSignUp) {
    modalSignUp.classList.remove('is-visible');
  }
});