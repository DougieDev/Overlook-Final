let submitBtn = document.querySelector('.form-submit')
let usernameInput = document.querySelector('.username-input')
let passwordInput = document.querySelector('.password-input')
let loginForm = document.querySelector('.login-form')
let loginWindow = document.querySelector('.login-window')
let managerPage = document.querySelector('.manager-page')

submitBtn.addEventListener('click', formSubmit)

function submitHandler() {
  clearFormInputs()
  hideLogin()
}

function formSubmit(e) {
  e.preventDefault()
  if (usernameInput.value === 'manager')
  submitHandler()
}

function clearFormInputs() {
  passwordInput.value = ''
	usernameInput.value = ''
}

function hideLogin() {
  loginWindow.classList.add('hidden')
  managerPage.classList.remove('hidden')
}
