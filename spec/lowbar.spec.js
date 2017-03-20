var path = require('path');
var expect = require('chai').expect;
// var sinon = require('sinon');

var _ = require(path.join(__dirname, '..', './lowbar.js'));

describe('_', function () {

  it('is an object', function () {
    expect(_).to.be.an('object');
  });

  describe('#identity', function () {
    it('is a function', function () {
      expect(_.identity).to.be.a('function');
    });
    it('returns the same value passed', function () {
      expect(_.identity([1, 2, 4])).to.eql([1, 2, 4]);
    });
  });

  describe('#first', function () {
    it('is a function', function () {
      expect(_.first).to.be.a('function');
    });
    it('returns the first value of an array when not passed n as a second argument', function () {
      expect(_.first([1, 2, 3])).to.eql(1);
    });
    it('returns the first n values of an array when passed n as a second argument', function () {
      expect(_.first([1, 2, 3, 4, 5], 3)).to.eql([1, 2, 3]);
      expect(_.first(['dog', 'cat', 'monkey', 'crocodile'], 2)).to.eql(['dog', 'cat']);
    });    
  }); 

  describe('#last', function () {
    it('is a function', function () {
      expect(_.last).to.be.a('function');
    });
    it('returns the last value of an array when not passed n as a second argument', function () {
      expect(_.last([1, 2, 3])).to.eql(3);
    });
    it('returns the last n values of an array when passed n as a second argument', function () {
      expect(_.last([1, 2, 3, 4, 5], 3)).to.eql([3, 4, 5]);
      expect(_.last(['dog', 'cat', 'rabbit', 'monkey', 'crocodile'], 2)).to.eql(['monkey', 'crocodile']);
    });    
  });     


});