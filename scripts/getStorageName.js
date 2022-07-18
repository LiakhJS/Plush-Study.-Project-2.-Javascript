const userName = document.querySelector('.user_name_math');
const exitBtn = userName.getElementsByTagName('p')[1];

let getStorageUserName = () => {
    userName.innerHTML = `
<div class="user_name_math">
<p>${localStorage.getItem('nameUserStorage')}</p>
<p>Exit</p>
</div>
`
    if (localStorage.getItem('nameUserStorage') === null) {
        userName.innerHTML = `
<div class="user_name_math">
<p>User Name</p>
<p>Exit</p>
</div>
`
    }
}
getStorageUserName();

userName.getElementsByTagName('p')[1].addEventListener('click', () => {

    window.location.href = "index.html";
    localStorage.clear();

})