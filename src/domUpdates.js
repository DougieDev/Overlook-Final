

let submitBtn = document.querySelector('.form-submit')
let usernameInput = document.querySelector('.username-input')
let passwordInput = document.querySelector('.password-input')
let loginForm = document.querySelector('.login-form')
let loginWindow = document.querySelector('.login-window')
let managerPage = document.querySelector('.manager-page')
let customerPage = document.querySelector('.customer-page')
let managerCard1 = document.querySelector('.manager-card1')
let managerCard2 = document.querySelector('.manager-card2')
let managerCard3 = document.querySelector('.manager-card3')
const Manager = require('../src/Manager').default;
submitBtn.addEventListener('click', formSubmit)

function submitHandler() {
  clearFormInputs()
  hideLogin()
  displayManagerData()
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

function displayManagerData() {
  let manager = new Manager(roomsData, bookingData)
  managerCard1.innerHTML = `Total Available Rooms Today: <h1 class="available-rooms"> ${manager.getRoomsAvailable('2020/04/22').length} </h1>`
  managerCard2.innerHTML = `Total Revenue For Today: <h1 class="available-rooms">$${manager.getTotalRevenue('2020/04/22')} </h1>`
  managerCard3.innerHTML = `Total Occupancy Percentage: <h1 class="available-rooms"> ${manager.getOccupancyPercentage('2020/04/22')}% </h1>`
}
