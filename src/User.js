class User {
  constructor(userInfo) {
    this.id = userInfo.id
    this.name = userInfo.name
    this.bookingData = userInfo.bookingData
    this.roomsData = userInfo.roomsData
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
}

export default User;
