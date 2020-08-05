import chai from 'chai';
const expect = chai.expect;

const User = require('../src/User').default;
const mockBookings = require('../src/mockBookings').default;
const mockRooms = require('../src/mockRooms').default;

describe('User', function() {
  let user1, user2;
  beforeEach(function() {
    user1 = new User({
      id: 1,
      name: "Leatha Ullrich"
    }, mockRooms, mockBookings)

    user2 = new User({
      id: 2,
      name: "Rocio Schuster"
    }, mockRooms, mockBookings)

  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    expect(user1).to.be.an.instanceof(User)
  });

  it('should have an id', function() {
    expect(user1.id).to.equal(1)
  });

  it('should be able to have a different id', function() {
    expect(user2.id).to.equal(2)
  });

  it('should have a name', function() {
    expect(user1.name).to.equal("Leatha Ullrich")
  });

  it('should be able to have a different name', function() {
    expect(user2.name).to.equal("Rocio Schuster")
  });

  it('should be able to get the rooms it has booked', function() {
    let result = user1.getUserBookings()
    let expected = [{
          "id": "5fwrgu4i7k55hl6t8",
          "userID": 1,
          "date": "2020/02/05",
          "roomNumber": 12,
          "roomServiceCharges": []
      }]
    expect(result).to.deep.equal(expected)
  });

  it('should be able to show the amount spent on bookings for this user', function() {
    let result = user1.getTotalSpent()
    expect(result).to.equal(172.09)
  });
});
