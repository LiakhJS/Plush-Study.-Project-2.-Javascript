"use strict";

var userName = document.querySelector('.user_name_math');
var exitBtn = userName.getElementsByTagName('p')[1];

var getStorageUserName = function getStorageUserName() {
  userName.innerHTML = "\n<div class=\"user_name_math\">\n<p>".concat(localStorage.getItem('nameUserStorage'), "</p>\n<p>\u0412\u044B\u0439\u0442\u0438</p>\n</div>\n");

  if (localStorage.getItem('nameUserStorage') === null) {
    userName.innerHTML = "\n<div class=\"user_name_math\">\n<p>\u0418\u043C\u044F</p>\n<p>\u0412\u044B\u0439\u0442\u0438</p>\n</div>\n";
  }
};

getStorageUserName();
userName.getElementsByTagName('p')[1].addEventListener('click', function () {
  window.location.href = "index.html";
  localStorage.clear();
});