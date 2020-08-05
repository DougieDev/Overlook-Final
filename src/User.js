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
}

export default User;
