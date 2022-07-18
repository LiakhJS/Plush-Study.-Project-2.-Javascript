const userNameMath = document.querySelector('.user_name');
const exitBtnMath = userNameMath.getElementsByTagName('p')[1];

let getStorageUserNameMath = () => {
    userNameMath.innerHTML = `
<div class="user_name_math">
<p>${localStorage.getItem('nameUserStorage')}</p>
<p>Выйти</p>
</div>
`
    if (localStorage.getItem('nameUserStorage') === null) {
        userNameMath.innerHTML = `
<div class="user_name_math">
<p>Имя</p>
<p>Выйти</p>
</div>
`
    }
}
getStorageUserNameMath();

userNameMath.getElementsByTagName('p')[1].addEventListener('click', () => {

    window.location.href = "index.html";
    localStorage.clear();

})