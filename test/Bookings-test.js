import chai from 'chai';
const expect = chai.expect;

const Booking = require('../src/Booking').default;

describe('Bookings', function() {
  let booking1, booking2;
  beforeEach(function() {
    booking1 = new Booking({
      "id": "5fwrgu4i7k55hl6sz",
      "userID": 9,
      "date": "2020/04/22",
      "roomNumber": 15,
      "roomServiceCharges": []
    })
    booking2 = new Booking({
      "id": "5fwrgu4i7k55hl6t5",
      "userID": 43,
      "date": "2020/01/24",
      "roomNumber": 24,
      "roomServiceCharges": []
    })
  });

  it('should be a function', function() {
    expect(Booking).to.be.a('function');
  });

  it('should be an instance of Booking', function(){
    expect(booking1).to.be.an.instanceof(Booking)
  });

  it('should have an id', function() {
    expect(booking1.id).to.equal('5fwrgu4i7k55hl6sz')
  });

  it('should be able to have a different id', function() {
    expect(booking2.id).to.equal('5fwrgu4i7k55hl6t5')
  });

  it('should have a user ID', function() {
    expect(booking1.userID).to.equal(9)
  });

  it('should be able to have a different user ID', function() {
    expect(booking2.userID).to.equal(43)
  });

  it('should have a date', function() {
    expect(booking1.date).to.equal('2020/04/22')
  });

  it('should be able to have a different date', function() {
    expect(booking2.date).to.equal('2020/01/24')
  });

  it('should have a room number', function() {
    expect(booking1.roomNumber).to.equal(15)
  });

  it('should be able to have a different room number', function() {
    expect(booking2.roomNumber).to.equal(24)
  });

  it('should begin with no room service charges', function() {
    expect(booking1.roomServiceCharges).to.deep.equal([])
  });

});
