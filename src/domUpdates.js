let submitBtn = document.querySelector('.form-submit')
let usernameInput = document.querySelector('.username-input')
let passwordInput = document.querySelector('.password-input')
let loginForm = document.querySelector('.login-form')
let loginWindow = document.querySelector('.login-window')
let managerPage = document.querySelector('.manager-page')
let customerPage = document.querySelector('.customer-page')

submitBtn.addEventListener('click', formSubmit)

function submitHandler() {
  clearFormInputs()
  hideLogin()
}

function formSubmit(e) {
  e.preventDefault()
  if (usernameInput.value === 'manager' && passwordInput.value === 'overlook2020') {
    submitHandler()
    showManagerPage()
  } else if (usernameInput.value ==='customer1' && passwordInput.value === 'overlook2020') {
    submitHandler()
    showCustomerPage()
  } else {
    alert('Invalid username or password')
    clearFormInputs()
  }
}

function clearFormInputs() {
  passwordInput.value = ''
	usernameInput.value = ''
}

function hideLogin() {
  loginWindow.classList.add('hidden')
}

function showManagerPage() {
  managerPage.classList.remove('hidden')
}

function showCustomerPage() {
  customerPage.classList.remove('hidden')
}
