let submitBtn = document.querySelector('.form-submit')
let usernameInput = document.querySelector('.username-input')
let passwordInput = document.querySelector('.password-input')
let loginForm = document.querySelector('.login-form')
let loginWindow = document.querySelector('.login-window')
let managerPage = document.querySelector('.manager-page')
let customerPage = document.querySelector('.customer-page')
let bookingWindow = document.querySelector('.book-room-window')
let managerCard1 = document.querySelector('.manager-card1')
let managerCard2 = document.querySelector('.manager-card2')
let managerCard3 = document.querySelector('.manager-card3')
let customerCard1 = document.querySelector('.customer-card1')
let customerCard2 = document.querySelector('.customer-card2')
let bookRoomBtn = document.querySelector('.book-room-button')
let bookRoomSubmit = document.querySelector('.book-room-submit')
let roomBookingInput = document.querySelector('.date-input')

const Manager = require('../src/Manager').default;
const User = require('../src/User').default;

submitBtn.addEventListener('click', loginFormSubmit)
bookRoomBtn.addEventListener('click', showBookingPage)
bookRoomSubmit.addEventListener('click', roomBookingSubmit)

function submitHandler() {
  clearFormInputs()
  hideLogin()
  displayManagerData()
  displayCustomerData()
}

bookRoomSubmit.addEventListener('click', function(e) {
  e.preventDefault()
  let user = new User({id: 1, name: "Leatha Ullrich"}, roomsData, bookingData)
  let options = user.makeBooking(roomBookingInput.value)
  if(!roomBookingInput.value) {
    alert('Please choose a date')
  } else {
    fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings", options)
    .then(response => response.json())
    .then(data => {
      user.bookingData.push(data)
      displayCustomerData(),
      showCustomerPage(),
      hideBookingPage()
    })
    .catch(err => console.log('error: ', err))
  }
})

function loginFormSubmit(e) {
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

function showBookingPage() {
  bookingWindow.classList.remove('hidden')
  customerPage.classList.add('hidden')
}

function hideBookingPage() {
  bookingWindow.classList.add('hidden')
}

function displayManagerData() {
  let manager = new Manager(roomsData, bookingData)
  managerCard1.innerHTML = `Total Available Rooms Today: <h1 class="available-rooms"> ${manager.getRoomsAvailable('2020/04/22').length} </h1>`
  managerCard2.innerHTML = `Total Revenue For Today: <h1 class="available-rooms">$${manager.getTotalRevenue('2020/04/22')} </h1>`
  managerCard3.innerHTML = `Total Occupancy Percentage: <h1 class="available-rooms"> ${manager.getOccupancyPercentage('2020/04/22')}% </h1>`
}

function displayCustomerData() {
  let user = new User({id: 1, name: "Leatha Ullrich"}, roomsData, bookingData)
  customerCard1.innerHTML = `Rooms Booked: <h1 class="room-booked"> ${user.getUserBookings().map(booking => `<p class="booking-date">Room: ${booking.roomNumber} <br> Date: ${booking.date}</p>`).join('')}`
  customerCard2.innerHTML = `Total Amount Spent: <h1 class="room-booked"> ${user.getTotalSpent().toFixed(2)}`
}

function roomBookingSubmit(e) {
  e.preventDefault()
}

export default displayCustomerData;
