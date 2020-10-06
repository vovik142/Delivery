const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}


const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const loginInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');


let login =  localStorage.getItem('glodelivery');

function toogleModalAuth() {
  modalAuth.classList.toggle('is-open');
}



function authorized(){

  function logOut(){
    login = null;
    localStorage.removeItem('glodelivery');
    buttonAuth.style.display = '';
    userName.style.display = '';
    buttonOut.style.display = '';
    buttonOut.removeEventListener('click', logOut)
    checkAuth();
  }
  console.log('авторизовано');

  userName.textContent = login;

  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';
  buttonOut.addEventListener('click', logOut)
}

function notAuthorized(){
  console.log ('не авторизован');
function logIn(event){
  event.preventDefault()
  
  localStorage.setItem('glodelivery', login);

  console.log('Логин');
  login = loginInput.value;
  toogleModalAuth();
  buttonAuth.removeEventListener('click', toogleModalAuth);
  closeAuth.removeEventListener('click', toogleModalAuth);
  loginInForm.removeEventListener('submit', logIn);
  loginInForm.reset();
  checkAuth();
}
  
  buttonAuth.addEventListener('click', toogleModalAuth);
  closeAuth.addEventListener('click', toogleModalAuth);
  loginInForm.addEventListener('submit', logIn)
}

function checkAuth() {
  if(login){
    authorized();
  } else {
    notAuthorized();
  }
}


checkAuth() 