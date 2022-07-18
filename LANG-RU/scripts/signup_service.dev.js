"use strict";

var signupForm = document.forms.signupForm;
var signinEmail = document.querySelector('#signin-email');
var signinPassword = document.querySelector('#signin-password');
var loginSubmit = document.querySelector('#login-sumbit');
var signupUserName = document.querySelector('#signup-username');
var signupEmail = document.querySelector('#signup-email');
var signupPassword = document.querySelector('#signup-password');
var URL_HOST = 'http://localhost:3000/DATAS';

var getResource = function getResource(url) {
  var res;
  return regeneratorRuntime.async(function getResource$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(url));

        case 3:
          res = _context.sent;
          return _context.abrupt("return", res.json());

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          throw new Error("!!! ".concat(_context.t0));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

var getData = function getData() {
  var data;
  return regeneratorRuntime.async(function getData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(getResource("".concat(URL_HOST)));

        case 2:
          data = _context2.sent;
          return _context2.abrupt("return", data);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var postDataOfRegistration = function postDataOfRegistration() {
  fetch("".concat(URL_HOST), {
    method: 'POST',
    body: JSON.stringify({
      "nameUser": "".concat(signupUserName.value),
      "email": "".concat(signupEmail.value),
      "password": "".concat(signupPassword.value)
    }),
    headers: {
      "Content-type": "application/json; charset=utf-8"
    }
  }).then(function (res) {
    return res.json();
  });
};