import chai from 'chai';
const expect = chai.expect;

const Room = require('../src/Room').default;

describe('Room', function() {
  let room1, room2;
  beforeEach(function() {
    room1 = new Room({
      "number": 1,
      "roomType": "residential suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 358.4
    })
    room2 = new Room({
      "number": 2,
      "roomType": "suite",
      "bidet": false,
      "bedSize": "full",
      "numBeds": 2,
      "costPerNight": 477.38
    })
  })

  it('should be a function', function() {
    expect(Room).to.be.a('function')
  });
  
  it('should be an instance of Room', function() {
    expect(room1).to.be.an.instanceof(Room)
  });

  it('should have a room number', function() {
    expect(room1.number).to.equal(1)
  });

  it('should be able to have a different room number', function() {
    expect(room2.number).to.equal(2)
  });

  it('should have a room type', function() {
    expect(room1.roomType).to.equal('residential suite')
  });

  it('should be able to have a different room type', function() {
    expect(room2.roomType).to.equal('suite')
  });

  it('should notate whether it has a bidet or not', function() {
    expect(room1.bidet).to.equal(true)
  });

  it('should be able to not have a bidet', function() {
    expect(room2.bidet).to.equal(false)
  });

  it('should be able to list how many beds it has', function() {
    expect(room1.numBeds).to.equal(1)
  });

  it('should be able to have a different number of beds', function() {
    expect(room2.numBeds).to.equal(2)
  });

  it('should have a cost per night', function() {
    expect(room1.costPerNight).to.equal(358.4)
  });

  it('should be able to have a different cost per night', function() {
    expect(room2.costPerNight).to.equal(477.38)
  });
})
