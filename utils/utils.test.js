const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);
    
      expect(res).toBe(44).toBeA('number');
    });
  });
  
  it('should async add two numbers', (done) => {
    utils.asyncAdd(4,3,(sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    })
  });
  
  it('should square a number', () => {
    var res = utils.square(3);
  
    expect(res).toBe(9).toBeA('number');
  });
  
  it('should async square a number', (done) => {
    var res = utils.asyncSquare(4, (result) => {
      expect(result).toBe(16);
      done();
    })
  })
  
  
})


it('shoud verify first and last name are set', () => {
  var user = {
    age: 25,
    location: 'Canoas'
  }

  var res = utils.setName(user, 'Carlos Scherer');

  expect(res).toInclude({
    firstName: 'Carlos',
    lastName: 'Scherer'
  });
})

