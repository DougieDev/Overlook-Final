class User {
  constructor(userInfo) {
    this.id = userInfo.id
    this.name = userInfo.name
    this.bookingData = userInfo.bookingData
    this.roomsData = userInfo.roomsData
  }

  getUserRoomBookings(date) {
    return this.bookingData.filter(booking => booking.date === date && booking.userID === this.id)
  }

  getTotalSpent(date) {

  }
}

export default User;
