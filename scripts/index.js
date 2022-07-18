const openBtn = document.querySelector('.open-button');
const closeBtn = document.querySelector('.cancel');

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

openBtn.addEventListener('click', (e) => {
    openForm();
})
closeBtn.addEventListener('click', (e) => {
    closeForm();
})

const subscriptionActive = document.querySelector('#subscription-active');