const container = document.getElementById('container');
const registerbtn =document.getElementById('register');
const Loginbtn =document.getElementById('Login');

registerbtn.addEventListener('click', () => {
    container.classList.add('active');
});

Loginbtn.addEventListener('click', () => {
    container.classList.remove('active');
});


