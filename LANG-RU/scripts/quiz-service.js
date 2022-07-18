let localResults = {};
const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const btnRestart = document.getElementById('btn-restart');
const quizResults = document.querySelector('.quiz-result-in-percent');
const resultUserName = document.querySelector('.result-name-user');
const resultUserCorrect = document.querySelector('.result-user-correct');
const resultUserIncorrect = document.querySelector('.result-user-incorrect');

const URL_QUIZ =
    'http://localhost:3000';

const getResource = async (url) => {
    try {
        const res = await fetch(url);
        return res.json();
    } catch (err) {
        throw new Error(`!!! ${err}`)
    }
}

const getData = async () => {
    const data = await getResource(`${URL_QUIZ}/${quizNumber}`);

    const renderQuestions = (index = 0) => {
        quiz.style.display = 'block';
        quizResults.style.display = 'none';
        renderIndicator(index + 1);
        questions.dataset.currentStep = index;
        const renderAnswers = () => data[index].answers.map((answer) =>
            `<li>
        <label>
            <input class= "answer-input" type="radio" name=${index} value = ${answer.id}>
            ${answer.value}
        </label>
    </li>`).join('');
        questions.innerHTML =
            `<div class="quiz-questions-item">
        <div class="quiz-questions-item__question">${data[index].question}</div>
        <ul class="quiz-questions-item__answers">${renderAnswers()}</ul>
    </div>
    `;
    };

    const renderResults = () => {
        let content = '';
        let contentCount = 0;
        const getClassname = (answer, questionIndex) => {
            let classname = '';
            if (answer.correct === 'false' && answer.id === localResults[questionIndex]) {
                classname = 'answer--invalid';
                contentCount += 1;
            } else if (answer.correct === 'true') {
                classname = 'answer--valid';

            }
            return classname;
        }
        const getAnswers = (questionIndex) => data[questionIndex].answers
            .map((answer) => `<li class="${getClassname(answer, questionIndex)}">${answer.value}</li>`).join('');

        data.forEach((question, index) => {
            content += `
    <div class="quiz-results-item">
    <div class="quiz-results-item__question">${question.question}</div>
    <ul class="quiz-results-item__answers">${getAnswers(index)}</ul>
    </div>
    `;
        });
        resultUserCorrect.innerHTML = `${(((contentCount*100)/data.length)-100)*(-1)} % correct answers`;
        resultUserIncorrect.innerHTML = `${100-(((contentCount*100)/data.length)-100)*(-1)} % incorrect answers`;
        resultUserName.innerHTML = localStorage.getItem('nameUserStorage');
        results.innerHTML = content;
        quizResults.style.display = 'block';
        quiz.style.display = 'flex';
    };

    const renderIndicator = (currentStep) => {
        indicator.innerHTML = `${currentStep}/${data.length}`;
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
            const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;
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
            const prevQuestionIndex = Number(questions.dataset.currentStep) - 1;
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
    return data;
}