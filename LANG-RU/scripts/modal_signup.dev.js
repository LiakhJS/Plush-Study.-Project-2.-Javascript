"use strict";

var modalSignUp = document.querySelector('.user-modal');
var bear = document.querySelector('#bear');
var gamesBtns = document.querySelector('.games_buttons').children;
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
bear.addEventListener('click', function (event) {
  var mediaQuery = window.matchMedia('(max-width: 768px)');

  if (mediaQuery.matches) {
    if (localStorage.getItem('nameUserStorage') === null) {
      openModalSignUp();
      event.preventDefault();
    } else {
      window.location.href = 'games.html';
    }
  }
});
gamesBtns[0].addEventListener('click', function (event) {
  if (localStorage.getItem('nameUserStorage') === null) {
    openModalSignUp();
    event.preventDefault();
  } else {
    window.location.href = 'game_math.html';
  }
});
gamesBtns[1].addEventListener('click', function (event) {
  if (localStorage.getItem('nameUserStorage') === null) {
    openModalSignUp();
    event.preventDefault();
  } else {
    window.location.href = 'game_quiz.html';
  }
});
gamesBtns[2].addEventListener('click', function (event) {
  if (localStorage.getItem('nameUserStorage') === null) {
    openModalSignUp();
    event.preventDefault();
  } else {
    window.location.href = 'game_paint.html';
  }
});