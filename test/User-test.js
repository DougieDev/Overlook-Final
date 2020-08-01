import chai from 'chai';
const expect = chai.expect;

const User = require('../src/User').default;

describe('User', function() {
  let user1, user2;
  beforeEach(function() {
    user1 = new User({
      id: 1,
      name: "Leatha Ullrich"
    })
    user2 = new User({
      id: 2,
      name: "Rocio Schuster"
    })

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
});
