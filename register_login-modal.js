// Khai bao bien
const registLink = document.querySelector('.js-Register');
const loginLink = document.querySelector('.js-Login');
const jsModal = document.querySelector('.modal');
const registModal = document.querySelector('.js-RegisterModal');
const loginModal = document.querySelector('.js-LoginModal');
const closeModals = document.querySelectorAll('.auth-form__control-back');
const modalBody = document.querySelector('.modal__body');
const switchToLogin = document.querySelector('.js-switchToLogin');
const switchToRegister = document.querySelector('.js-switchToRegister');
const logoutLink = document.querySelector('.js-Logout');
const validation = document.querySelector('.validation');
const user__info = document.querySelector('.navbar__user');
const cartQuantityLogout = document.querySelector('.cart-quantity'); 
const cartListEmpty = document.querySelector('.cart__list--empty');
const cartListNoEmpty = document.querySelector('.cart__list--no-empty');    


// Mo form dang ky
function showRegisterModal () {
    jsModal.classList.add('openModal');
    registModal.classList.add('open');
    registModal.classList.remove('close');
    loginModal.classList.add('close');
}
registLink.addEventListener('click', showRegisterModal);

// Mo form dang nhap
function showLoginModal () {
    jsModal.classList.add('openModal');
    loginModal.classList.add('open');
    loginModal.classList.remove('close');
    registModal.classList.add('close');
}
loginLink.addEventListener('click', showLoginModal);


// Dong Modal
function CloseModal () {
    jsModal.classList.remove('openModal');
}
for (const closeModal of closeModals) {
    closeModal.addEventListener('click', CloseModal);   
}
jsModal.addEventListener('click', CloseModal);
modalBody.addEventListener('click', function(e) {
    e.stopPropagation();
})

// Chuyen sang form dang nhap / dang ky 
switchToLogin.addEventListener('click', showLoginModal);
switchToRegister.addEventListener('click', showRegisterModal);

// Logout
function logOut () {
    event.preventDefault();
    validation.classList.remove('close');
    user__info.classList.add('close');
    cartQuantityLogout.classList.add('close');
    cartListEmpty.classList.remove('close');
    cartListNoEmpty.classList.add('close');
}
logoutLink.addEventListener('click', logOut)