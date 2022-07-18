const renderDataRegistration = async () => {
    const serviceData = await getData();
}
renderDataRegistration();

let subscriptionIsActiveInData = async () => {
    const data = await getResource(`${URL_SUBSCR}`);
    data.some(element => {
        if (element.subscription == 'active' && element.nameUser == localStorage.getItem('nameUserStorage')) {
            return subscriptionActive.style.display = 'block';
        } else if ('active' === localStorage.getItem('userSubscription')) {
            return subscriptionActive.style.display = 'block';

        } else {
            subscriptionActive.style.display = 'none';
        }
    });
    return data;
}
subscriptionIsActiveInData();

let emptyStrings = (inputSignup) => {
    if (inputSignup.value.trim() === "") {
        inputSignup.focus();
        inputSignup.nextElementSibling.style.display = 'block';
        return inputSignup.style.border = "solid grey";
    } else {
        inputSignup.nextElementSibling.style.display = 'none';
        inputSignup.style.border = "none";
    }
}

let checkUserNameFirstLetter = () => {
    if (signupUserName.value[0] != signupUserName.value[0].toUpperCase()) {
        signupUserName.nextElementSibling.style.display = 'block';
        signupUserName.style.border = " solid grey";
        signupUserName.focus();
        return event.preventDefault();
    } else {
        signupUserName.nextElementSibling.style.display = 'none';
    }
}

let checkPasswordLength = () => {
    if (signupPassword.value.length < 5) {
        signupPassword.nextElementSibling.style.display = 'block';
        signupPassword.style.border = "solid grey";
        signupPassword.focus()
        return event.preventDefault();
    } else {
        signupPassword.style.display = 'none';
        signupPassword.nextElementSibling.style.display = 'none';

    }
}

const registrationSubmit = document.querySelector('#registration-submit');

registrationSubmit.addEventListener('click', (event) => {
    emptyStrings(signupUserName);
    emptyStrings(signupEmail);
    emptyStrings(signupPassword);
    const registrValid = document.getElementsByClassName('registr-valid');
    Array.from(registrValid).forEach((inputRegistration) => {
        if (inputRegistration.value.trim() === "") {
            event.preventDefault();
        }
    })
    if (signupPassword.value.length < 5 || signupUserName.value[0] != signupUserName.value[0].toUpperCase()) {
        checkPasswordLength();
        checkUserNameFirstLetter();
    } else if (signupUserName.value.trim() != '' && signupEmail.value.trim() != '' && signupPassword.value.trim() != '') {

        postDataOfRegistrationWithSubscr();
    }
})

const btnTariff = document.querySelectorAll('.btn-tariff');
btnTariff.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        if (localStorage.getItem('nameUserStorage') != null) {
            alert(`If U don't have a subscription, and U want to subscribe or U want to change type of - U must to register again. Please do it!`);
            localStorage.clear();
        } else {
            event.preventDefault();
            openModalSignUp();
        }
        let func = async () => {
            const data = await getResource(`${URL_SUBSCR}`);
            loginSubmit.addEventListener('click', (event) => {
                localStorage.clear();
                emptyStrings(signinEmail);
                emptyStrings(signinPassword);
                data.forEach(element => {
                    if (element.email == `${signinEmail.value}` && `${signinEmail.value}` != '' && element.password == `${signinPassword.value}` && `${signinPassword.value}` != '') {
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
            })
            return data;
        }
        func();
    })
})

const subscriptionIcons = document.querySelectorAll('.subscription__icons .icons > img');

subscriptionIcons.forEach((elem) => {
    elem.addEventListener('mouseover', function () {
        this.src = this.src.replace('.jpg', '.gif');
    });
    elem.addEventListener('mouseout', function () {
        this.src = this.src.replace('.gif', '.jpg');
    });

})