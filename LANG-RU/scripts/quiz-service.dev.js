"use strict";

var localResults = {};
var quiz = document.getElementById('quiz');
var questions = document.getElementById('questions');
var indicator = document.getElementById('indicator');
var results = document.getElementById('results');
var btnNext = document.getElementById('btn-next');
var btnPrev = document.getElementById('btn-prev');
var btnRestart = document.getElementById('btn-restart');
var quizResults = document.querySelector('.quiz-result-in-percent');
var resultUserName = document.querySelector('.result-name-user');
var resultUserCorrect = document.querySelector('.result-user-correct');
var resultUserIncorrect = document.querySelector('.result-user-incorrect');
var URL_QUIZ = 'http://localhost:3000';

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
  var data, renderQuestions, renderResults, renderIndicator;
  return regeneratorRuntime.async(function getData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(getResource("".concat(URL_QUIZ, "/").concat(quizNumber)));

        case 2:
          data = _context2.sent;

          renderQuestions = function renderQuestions() {
            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            quiz.style.display = 'block';
            quizResults.style.display = 'none';
            renderIndicator(index + 1);
            questions.dataset.currentStep = index;

            var renderAnswers = function renderAnswers() {
              return data[index].answers.map(function (answer) {
                return "<li>\n        <label>\n            <input class= \"answer-input\" type=\"radio\" name=".concat(index, " value = ").concat(answer.id, ">\n            ").concat(answer.value, "\n        </label>\n    </li>");
              }).join('');
            };

            questions.innerHTML = "<div class=\"quiz-questions-item\">\n        <div class=\"quiz-questions-item__question\">".concat(data[index].question, "</div>\n        <ul class=\"quiz-questions-item__answers\">").concat(renderAnswers(), "</ul>\n    </div>\n    ");
          };

          renderResults = function renderResults() {
            var content = '';
            var contentCount = 0;

            var getClassname = function getClassname(answer, questionIndex) {
              var classname = '';

              if (answer.correct === 'false' && answer.id === localResults[questionIndex]) {
                classname = 'answer--invalid';
                contentCount += 1;
              } else if (answer.correct === 'true') {
                classname = 'answer--valid';
              }

              return classname;
            };

            var getAnswers = function getAnswers(questionIndex) {
              return data[questionIndex].answers.map(function (answer) {
                return "<li class=\"".concat(getClassname(answer, questionIndex), "\">").concat(answer.value, "</li>");
              }).join('');
            };

            data.forEach(function (question, index) {
              content += "\n    <div class=\"quiz-results-item\">\n    <div class=\"quiz-results-item__question\">".concat(question.question, "</div>\n    <ul class=\"quiz-results-item__answers\">").concat(getAnswers(index), "</ul>\n    </div>\n    ");
            });
            resultUserCorrect.innerHTML = "".concat((contentCount * 100 / data.length - 100) * -1, " % correct answers");
            resultUserIncorrect.innerHTML = "".concat(100 - (contentCount * 100 / data.length - 100) * -1, " % incorrect answers");
            resultUserName.innerHTML = localStorage.getItem('nameUserStorage');
            results.innerHTML = content;
            quizResults.style.display = 'block';
            quiz.style.display = 'flex';
          };

          renderIndicator = function renderIndicator(currentStep) {
            indicator.innerHTML = "".concat(currentStep, "/").concat(data.length);

            if (Number(indicator.innerHTML.slice(0, 1)) < 2) {
              btnPrev.disabled = true;
            } else {
              btnPrev.disabled = false;
            }
          };

          quiz.addEventListener('change', function (event) {
            if (event.target.classList.contains("answer-input")) {
              localResults[event.target.name] = event.target.value;
              btnNext.disabled = false;
            }
          });
          quiz.addEventListener('click', function (event) {
            if (event.target.classList.contains("btn-next")) {
              var nextQuestionIndex = Number(questions.dataset.currentStep) + 1;

              if (data.length === nextQuestionIndex) {
                questions.classList.add('questions--hidden');
                indicator.classList.add('indicator--hidden');
                results.classList.add('indicator--visible');
                btnNext.classList.add('btn-next--hidden');
                btnPrev.classList.add('btn-prev--hidden');
                btnRestart.classList.add('btn-restart--visible');
                renderResults();
              } else {
                renderQuestions(nextQuestionIndex);
              }

              btnNext.disabled = true;
            }

            if (event.target.classList.contains("btn-prev")) {
              var prevQuestionIndex = Number(questions.dataset.currentStep) - 1;
              renderQuestions(prevQuestionIndex);
            }

            if (event.target.classList.contains("btn-restart")) {
              localResults = {};
              results.innerHTML = '';
              questions.classList.remove('questions--hidden');
              indicator.classList.remove('indicator--hidden');
              results.classList.remove('indicator--visible');
              btnNext.classList.remove('btn-next--hidden');
              btnPrev.classList.remove('btn-prev--hidden');
              btnRestart.classList.remove('btn-restart--visible');
              renderQuestions(0);
            }
          });
          renderQuestions();
          return _context2.abrupt("return", data);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
};