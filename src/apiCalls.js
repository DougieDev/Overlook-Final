//API FETCH CALLS

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

// const createPost = (options) => {
//   fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings", options)
//     .then(response = response.json()
// }
