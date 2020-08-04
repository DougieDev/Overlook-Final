class Manager {
  constructor(roomsData, bookingData) {
    this.roomsData = roomsData
    this.bookingData = bookingData
  }

  getBookedRooms(date) {
    let bookedRooms = this.bookingData.filter(booking => {
       return booking.date === date
    }).map(booking => {
      return booking.roomNumber
    })
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

  getTotalRevenue(date) {
    let bookedRooms = this.bookingData.filter(booking => {
       return booking.date === date
    }).map(booking => {
      return booking.roomNumber
    })
    return this.roomsData.reduce((acc, room) => {
      if (bookedRooms.includes(room.number)) {
        acc += room.costPerNight
      }
      return acc;
    }, 0)
  }

  getOccupancyPercentage(date) {
    let bookedRooms = this.bookingData.filter(booking => {
       return booking.date === date
    }).map(booking => {
      return booking.roomNumber
    })
    return (bookedRooms.length / this.roomsData.length) * 100
  }
}
export default Manager;
