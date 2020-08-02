// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to
// it in the index.html)
import './images/turing-logo.png'

let userData;
let bookingData;
let roomsData

fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
  .then(response => response.json())
  .then(data => {
    userData = data.users;
  }).catch(err => console.log('error: ', err))

fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
  .then(response => response.json())
  .then(data => {
    bookingData = data.bookings;
  }).catch(err => console.log('error: ', err))

fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
  .then(response => response.json())
  .then(data => {
    roomsData = data.rooms;
  }).catch(err => console.log('error: ', err))
