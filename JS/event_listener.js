const btn = document.getElementById('nav-icon');
const sign_container = document.querySelector('.sign-container');

btn.addEventListener('click', () => {
    sign_container.classList.toggle('sign-container-toggle');
})