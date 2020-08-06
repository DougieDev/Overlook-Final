class User {
  constructor(userInfo, roomsData, bookingData) {
    this.id = userInfo.id
    this.name = userInfo.name
    this.bookingData = bookingData
    this.roomsData = roomsData
  }

  getUserBookings() {
    return this.bookingData.filter(booking => booking.userID === this.id)
  }

  findRoom(roomId) {
    return this.roomsData.find(room => {
      return room.number === roomId
    })
  }

  getTotalSpent() {
    return this.getUserBookings().reduce((acc, booking) => {
      // Loop through all rooms and find() the room that
      // matches this booking.
      let targetRoom = this.findRoom(booking.roomNumber)
      acc += targetRoom.costPerNight
      return acc;
    }, 0)
  }

  getRoomsAvailable(date) {
   let bookedRooms = this.bookingData.filter(booking => {
      return booking.date === date
   }).map(booking => {
     return booking.roomNumber
   })
   return this.roomsData.filter(room => {
     return !bookedRooms.includes(room.number)
   })
  }

  makeBooking(date) {
    let availableRooms = this.getRoomsAvailable(date)
    let index = Math.floor(Math.random() * availableRooms.length - 0) + 0
    let body = {
            "userID": this.id,
            "date": date.split("-").join("/"),
            "roomNumber": availableRooms[index].number,
        }
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    return options
  }
}

export default User;
