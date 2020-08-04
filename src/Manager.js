class Manager {
  constructor(roomsData, bookingData) {
    this.roomsData = roomsData
    this.bookingData = bookingData
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

}
export default Manager;
