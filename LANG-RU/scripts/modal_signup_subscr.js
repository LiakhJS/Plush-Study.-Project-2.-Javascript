const modalSignUp = document.querySelector('.user-modal');
const login = document.querySelector('#login');
const registration = document.querySelector('#signup');
const loginBtn = document.querySelector("#switcher-login");
const registrBtn = document.querySelector("#switcher-registr");
const switchers = document.querySelector('.switcher');
const switcherLogin = switchers.getElementsByTagName('li')[0].getElementsByTagName('a')[0];
const switcherRegistration = switchers.getElementsByTagName('li')[1].getElementsByTagName('a')[0];

let openModalSignUp = () => {
    modalSignUp.classList.add('is-visible');
    loginIsSelected();
}

let loginIsSelected = () => {
    login.classList.add('is-selected');
    registration.classList.remove('is-selected');
    switcherLogin.classList.add('selected');
    switcherRegistration.classList.remove('selected');
}

let signupIsSelected = () => {
    login.classList.remove('is-selected');
    registration.classList.add('is-selected');
    switcherLogin.classList.remove('selected');
    switcherRegistration.classList.add('selected');
}

window.addEventListener('click', (event) => {
    if (event.target === registrBtn) {
        signupIsSelected();
        event.preventDefault();

    } else if (event.target === loginBtn) {
        loginIsSelected();
        event.preventDefault();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        modalSignUp.classList.remove('is-visible');
    }
})
window.addEventListener('click', (event) => {
    if (event.target === modalSignUp) {
        modalSignUp.classList.remove('is-visible');
    }
})