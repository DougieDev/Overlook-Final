// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to
// it in the index.html)
import './images/turing-logo.png'
import './images/argyle.png'
import './domUpdates.js'
let userData, bookingData, roomsData;
import './apiCalls.js'
import './Manager.js'
import './User.js'
// const User = require('../src/User').default;
// const displayCustomerData = require('./domUpdates.js')
//
// let roomBookingInput = document.querySelector('.date-input')
// let bookRoomSubmit = document.querySelector('.book-room-submit')
//
// bookRoomSubmit.addEventListener('click', function(e) {
// e.preventDefault()
// let user = new User({id: 1, name: "Leatha Ullrich"}, roomsData, bookingData)
// console.log(roomsData)
// let options = user.makeBooking(roomBookingInput.value)
// fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings", options)
//     .then(response => response.json())
//     .then(data => {
//       reloadBookings();
//       return data;
//     })
//     .then(data => displayCustomerData())
// })
//
// const reloadBookings = () => {
//   fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
//   .then(response => response.json())
//   .then(data => {
//     bookingData = data.bookings;
//   }).catch(err => console.log('error: ', err))
// }
