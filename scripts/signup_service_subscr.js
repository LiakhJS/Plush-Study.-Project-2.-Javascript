const signupForm = document.forms.signupForm;
const signinEmail = document.querySelector('#signin-email');
const signinPassword = document.querySelector('#signin-password');
const loginSubmit = document.querySelector('#login-sumbit');
const signupUserName = document.querySelector('#signup-username');
const signupEmail = document.querySelector('#signup-email');
const signupPassword = document.querySelector('#signup-password');

const URL_SUBSCR =
    'http://localhost:3000/data';

const getResource = async (url) => {
    try {
        const res = await fetch(url);
        return res.json();
    } catch (err) {
        throw new Error(`!!! ${err}`)
    }
}

const getData = async () => {
    const data = await getResource(`${URL_SUBSCR}`);
    return data;
}

const postDataOfRegistrationWithSubscr = () => {
    fetch(`${URL_SUBSCR}`, {
        method: 'POST',
        body: JSON.stringify({
            "nameUser": `${signupUserName.value}`,
            "email": `${signupEmail.value}`,
            "password": `${signupPassword.value}`,
            "subscription": 'active',
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