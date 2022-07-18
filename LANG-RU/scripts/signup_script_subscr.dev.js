"use strict";

var renderDataRegistration = function renderDataRegistration() {
  var serviceData;
  return regeneratorRuntime.async(function renderDataRegistration$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(getData());

        case 2:
          serviceData = _context.sent;

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

renderDataRegistration();

var subscriptionIsActiveInData = function subscriptionIsActiveInData() {
  var data;
  return regeneratorRuntime.async(function subscriptionIsActiveInData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(getResource("".concat(URL_SUBSCR)));

        case 2:
          data = _context2.sent;
          data.some(function (element) {
            if (element.subscription == 'active' && element.nameUser == localStorage.getItem('nameUserStorage')) {
              return subscriptionActive.style.display = 'block';
            } else if ('active' === localStorage.getItem('userSubscription')) {
              return subscriptionActive.style.display = 'block';
            } else {
              subscriptionActive.style.display = 'none';
            }
          });
          return _context2.abrupt("return", data);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

subscriptionIsActiveInData();

var emptyStrings = function emptyStrings(inputSignup) {
  if (inputSignup.value.trim() === "") {
    inputSignup.focus();
    inputSignup.nextElementSibling.style.display = 'block';
    return inputSignup.style.border = "solid grey";
  } else {
    inputSignup.nextElementSibling.style.display = 'none';
    inputSignup.style.border = "none";
  }
};

var checkUserNameFirstLetter = function checkUserNameFirstLetter() {
  if (signupUserName.value[0] != signupUserName.value[0].toUpperCase()) {
    signupUserName.nextElementSibling.style.display = 'block';
    signupUserName.style.border = " solid grey";
    signupUserName.focus();
    return event.preventDefault();
  } else {
    signupUserName.nextElementSibling.style.display = 'none';
  }
};

var checkPasswordLength = function checkPasswordLength() {
  if (signupPassword.value.length < 5) {
    signupPassword.nextElementSibling.style.display = 'block';
    signupPassword.style.border = "solid grey";
    signupPassword.focus();
    return event.preventDefault();
  } else {
    signupPassword.style.display = 'none';
    signupPassword.nextElementSibling.style.display = 'none';
  }
};

var registrationSubmit = document.querySelector('#registration-submit');
registrationSubmit.addEventListener('click', function (event) {
  emptyStrings(signupUserName);
  emptyStrings(signupEmail);
  emptyStrings(signupPassword);
  var registrValid = document.getElementsByClassName('registr-valid');
  Array.from(registrValid).forEach(function (inputRegistration) {
    if (inputRegistration.value.trim() === "") {
      event.preventDefault();
    }
  });

  if (signupPassword.value.length < 5 || signupUserName.value[0] != signupUserName.value[0].toUpperCase()) {
    checkPasswordLength();
    checkUserNameFirstLetter();
  } else if (signupUserName.value.trim() != '' && signupEmail.value.trim() != '' && signupPassword.value.trim() != '') {
    postDataOfRegistrationWithSubscr();
  }
});
var btnTariff = document.querySelectorAll('.btn-tariff');
btnTariff.forEach(function (elem) {
  elem.addEventListener('click', function (event) {
    if (localStorage.getItem('nameUserStorage') != null) {
      alert("If U don't have a subscription, and U want to subscribe or U want to change type of - U must to register again. Please do it!");
      localStorage.clear();
    } else {
      event.preventDefault();
      openModalSignUp();
    }

    var func = function func() {
      var data;
      return regeneratorRuntime.async(function func$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(getResource("".concat(URL_SUBSCR)));

            case 2:
              data = _context3.sent;
              loginSubmit.addEventListener('click', function (event) {
                localStorage.clear();
                emptyStrings(signinEmail);
                emptyStrings(signinPassword);
                data.forEach(function (element) {
                  if (element.email == "".concat(signinEmail.value) && "".concat(signinEmail.value) != '' && element.password == "".concat(signinPassword.value) && "".concat(signinPassword.value) != '') {
                    localStorage.setItem('nameUserStorage', element.nameUser);
                    localStorage.setItem('userSubscription', 'active');
                    window.location.reload();
                  } else {
                    event.preventDefault();
                    signinEmail.focus();
                    signinEmail.previousElementSibling.style.display = 'block';
                    signinPassword.previousElementSibling.style.display = 'block';
                  }
                });
              });
              return _context3.abrupt("return", data);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      });
    };

    func();
  });
});
var subscriptionIcons = document.querySelectorAll('.subscription__icons .icons > img');
subscriptionIcons.forEach(function (elem) {
  elem.addEventListener('mouseover', function () {
    this.src = this.src.replace('.jpg', '.gif');
  });
  elem.addEventListener('mouseout', function () {
    this.src = this.src.replace('.gif', '.jpg');
  });
});