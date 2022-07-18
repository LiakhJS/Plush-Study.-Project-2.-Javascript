const signupForm = document.forms.signupForm;
const signinEmail = document.querySelector('#signin-email');
const signinPassword = document.querySelector('#signin-password');
const loginSubmit = document.querySelector('#login-sumbit');
const signupUserName = document.querySelector('#signup-username');
const signupEmail = document.querySelector('#signup-email');
const signupPassword = document.querySelector('#signup-password');

const URL_HOST =
    'http://localhost:3000/DATAS';

const getResource = async (url) => {
    try {
        const res = await fetch(url);
        return res.json();
    } catch (err) {
        throw new Error(`!!! ${err}`)
    }
}

const getData = async () => {
    const data = await getResource(`${URL_HOST}`);
    return data;
}

const postDataOfRegistration = () => {
    fetch(`${URL_HOST}`, {
        method: 'POST',
        body: JSON.stringify({
            "nameUser": `${signupUserName.value}`,
            "email": `${signupEmail.value}`,
            "password": `${signupPassword.value}`,
        }),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    }).then(
        res => {
            return res.json();
        }
    )
}