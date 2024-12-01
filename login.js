const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var pwError = document.getElementById('pw-error');
var cfpwError = document.getElementById('cfpw-error');
var submitError = document.getElementById('submit-error');

function validateName(){
  var name = document.getElementById('login-name').value;

  if(name.length == 0) {
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write full name';
    return false;

  }
  nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validateName() {
  var email = document.getElementById('login-email').value;

  if(email.length == 0) {
    emailError.innerHTML = 'Email is required'
    return false;
  }
  if(!email.match(/^[A-Za-z\._\-[0.9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'Email Invaild'
    return false;
  }
  emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validatePw() {
  var pw = document.getElementById('login-pw').value;

  if(pw.length == 0){
    pwError.innerHTML = 'Password is required'
    return false;
  }
  if(pw.length !== 8){
    pwError.innerHTML = 'Password should be 8 charaters'
    return false;
  }

    pwError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true;
  
}
