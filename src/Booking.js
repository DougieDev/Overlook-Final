class Booking {
  constructor(bookingInfo) {
    this.id = bookingInfo.id
    this.userID = bookingInfo.userID
    this.date = bookingInfo.date
    this.roomNumber = bookingInfo.roomNumber
    this.roomServiceCharges = []
  }
}

export default Booking;
