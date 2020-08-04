import chai from 'chai';
const expect = chai.expect;

const Manager = require('../src/Manager').default;

describe('Manager', function() {
  let manager, bookings, rooms;
  beforeEach(function() {
    bookings = [{
            "id": "5fwrgu4i7k55hl6sz",
            "userID": 9,
            "date": "2020/04/22",
            "roomNumber": 15,
            "roomServiceCharges": []
        },
        {
            "id": "5fwrgu4i7k55hl6t5",
            "userID": 43,
            "date": "2020/04/22",
            "roomNumber": 24,
            "roomServiceCharges": []
        },
        {
            "id": "5fwrgu4i7k55hl6t6",
            "userID": 13,
            "date": "2020/01/22",
            "roomNumber": 12,
            "roomServiceCharges": []
        }]

    rooms = [{
            "number": 15,
            "roomType": "residential suite",
            "bidet": false,
            "bedSize": "full",
            "numBeds": 1,
            "costPerNight": 294.56
        },
        {
            "number": 43,
            "roomType": "single room",
            "bidet": false,
            "bedSize": "twin",
            "numBeds": 2,
            "costPerNight": 172.09
        },
        {
            "number": 24,
            "roomType": "suite",
            "bidet": false,
            "bedSize": "queen",
            "numBeds": 1,
            "costPerNight": 327.24
        }]
    manager = new Manager(rooms, bookings)
  })

  it('should be able to get all available rooms', function() {
    let result = manager.getRoomsAvailable('2020/04/22')
    expect(result).to.deep.equal([rooms[1]])
  })

  it('should be able to get the percentage of occupied rooms', function() {
    let result = manager.getOccupancyPercentage('2020/04/22')
    expect(result).to.equal(66.66666666666666)
  })

  it('should be able to get the total revenue for the day', function() {
    let result = manager.getTotalRevenue('2020/04/22')
    expect(result).to.equal(621.8)
  })


})
