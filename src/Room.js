class Room {
  constructor(roomInfo) {
    this.number = roomInfo.number
    this.roomType = roomInfo.roomType
    this.bidet = roomInfo.bidet
    this.numBeds = roomInfo.numBeds
    this.costPerNight = roomInfo.costPerNight
  }
}

export default Room;
