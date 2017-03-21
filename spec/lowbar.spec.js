var path = require('path');
var expect = require('chai').expect;
var sinon = require('sinon');

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
  
  describe('#each', function () {
    it('is a function', function () {
      expect(_.each).to.be.a('function');
    });
    it('returns the original list passed', function () {
      let arr = ['tomato', 'lettuce', 'pepper', 'chicken'];
      let res = _.each(arr, function () {});
      expect(arr).to.equal(res);
    });
    it('passes each element of an array to an iteratee function', function () {
      let spy = sinon.spy();
      let arr = ['tomato', 'lettuce', 'pepper', 'chicken'];
      _.each(arr, spy);
      expect(spy.callCount).to.eql(4);
    });
    it('passes each element of an object to an iteratee function', function () {
      let spy = sinon.spy();
      let obj = {'1': 'Tomato', '2': 'Lettuce', '3': 'Pepper', '4': 'Chicken'};
      _.each(obj, spy);
      expect(spy.callCount).to.eql(4);
    });    
  });       

  describe('#indexOf', function () {
    it('is a function', function () {
      expect(_.indexOf).to.be.a('function');
    });
    it('returns -1 when a value is either not passed or is not in the array', function () {
      let array = [1, 2, 3, 4, 5, 1];
      expect(_.indexOf(array)).to.eql(-1);
      expect(_.indexOf(array, 6)).to.eql(-1);
    });
    it('returns the correct index position of a value within a given array', function () {
      let array = [1, 2, 3, 4, 5, 1];
      expect(_.indexOf(array, 2)).to.eql(1);
      expect(_.indexOf(array, 5)).to.eql(4);            
      expect(_.indexOf(array, 1)).to.eql(0);            
    });
  });  

  describe('#filter', function () {
    it('is a function', function () {
      expect(_.filter).to.be.a('function');
    });
    it('returns an array', function () {
      expect(_.filter()).to.be.a('array');
    });    
    it('returns an empty array when no value passes the predicate', function () {
      let array = [1, 2, 3, 4, 5, 6];
      expect(_.filter(array, function (num) { return num % 1.564653 == 0; })).to.eql([]);
    });
    it('returns an array of values that pass a predicate when passed an ARRAY originally', function () {
      let array = [1, 2, 3, 4, 5, 6];
      expect(_.filter(array, function (num) { return num % 2 == 0; })).to.eql([2, 4, 6]);      
    });
    it('returns an array of values that pass a predicate when passed an OBJECT originally', function () {
      let object = {'1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6};
      expect(_.filter(object, function (num) { return num % 2 == 0; })).to.eql([2, 4, 6]);          
    });    
  });  

  describe('#reject', function () {
    it('is a function', function () {
      expect(_.reject).to.be.a('function');
    });
    it('returns an array', function () {
      expect(_.reject()).to.be.a('array');
    });    
    it('returns an an array with all the values present when no value passes the predicate', function () {
      let array = [1, 2, 3, 4, 5, 6];
      expect(_.reject(array, function (num) { return num % 1.564653 == 0; })).to.eql([1, 2, 3, 4, 5, 6]);
    });
    it('returns an array of values that pass a predicate when passed an ARRAY originally', function () {
      let array = [1, 2, 3, 4, 5, 6];
      expect(_.reject(array, function (num) { return num % 2 == 0; })).to.eql([1, 3, 5]);      
    });
    it('returns an array of values that pass a predicate when passed an OBJECT originally', function () {
      let object = {'1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6};
      expect(_.reject(object, function (num) { return num % 2 == 0; })).to.eql([1, 3, 5]);          
    });    
  });    

  describe('#uniq', function () {
    it('is a function', function () {
      expect(_.uniq).to.be.a('function');
    });
    it('returns an array', function () {
      expect(_.uniq()).to.be.a('array');
    });       
    it('returns an array of only the unique values within a passed array', function () {
      let arr = [1, 2, 3, 3, 4, 1, 6, 7, 6, 2];
      expect(_.uniq(arr)).to.eql([1, 2, 3, 4, 6, 7]);
    });
  });  

  describe('#map', function () {
    it('is a function', function () {
      expect(_.map).to.be.a('function');
    });
    it('returns an array', function () {
      expect(_.map()).to.be.a('array');
    });    
    it('returns a new array of values by mapping each value in a list through an iteratee', function () {
      let arr = [1, 2, 3];
      let obj = {one: 1, two: 2, three: 3};
      expect(_.map(arr, function (num) { return num * 3; })).to.eql([3, 6, 9]);
      expect(_.map(obj, function (num) { return num * 3; })).to.eql([3, 6, 9]);
    });
  }); 

  describe('#pluck', function () {
    it('is a function', function () {
      expect(_.pluck).to.be.a('function');
    });
    it('returns an array', function () {
      expect(_.pluck()).to.be.a('array');
    });    
    it('returns an array of property values, if they match the property name passed', function () {
      let stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
      expect(_.pluck(stooges, 'name')).to.eql(['moe', 'larry', 'curly']);
      expect(_.pluck(stooges, 'age')).to.eql([40, 50, 60]);
    });
  });    

  // describe('#reduce', function () {
  //   it('is a function', function () {
  //     expect(_.reduce).to.be.a('function');
  //   });

  // }); 
  
  describe('#contains', function () {
    it('is a function', function () {
      expect(_.contains).to.be.a('function');
    });
    it('returns false when not passed a value to search for', function () {
      let arr = [1, 2, 3, 4, 5, 6];
      expect(_.contains([arr])).to.eql(false);
    });
    it('returns true when a given value is present in a passed array', function () {
      let arr = [1, 2, 3, 4, 5, 6];
      expect(_.contains(arr, 4)).to.eql(true);      
    });
    it('returns true when a given value is present in a passed object', function () {
      let obj = {'1': 1, '2': 2, '3': 3, '4': 4};
      expect(_.contains(obj, 4)).to.eql(true);      
    });   
    it('returns true when a given value is present in a passed string', function () {
      expect(_.contains('NorthCoders','h')).to.equal(true);  
    });      
    it('returns a correct boolean answer when passed an index to start searching from', function () {
      let arr = [1, 2, 3, 4, 5, 6];
      let obj = {'1': 1, '2': 2, '3': 3, '4': 4};
      expect(_.contains(arr, 2, 2)).to.eql(false);      
      expect(_.contains(arr, 4, 2)).to.eql(true);    
      expect(_.contains(obj, 2, 2)).to.eql(false);  
      expect(_.contains(obj, 4, 2)).to.eql(true);                    
    });
  });      

  describe('#every', function () {
    it('is a function', function () {
      expect(_.every).to.be.a('function');
    });
    it('returns a correct boolean when passed an array and predicate', function () {
      let arr = [1, 2, 3, 4, 5, 6];
      expect(_.every(arr, function (num) { return num % 2 == 0; })).to.eql(false);
      expect(_.every(arr, function (num) { return num % 1 == 0; })).to.eql(true);      
    });
    it('returns a correct boolean when passed an object and predicate', function () {
      let obj = {'1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6};
      expect(_.every(obj, function (num) { return num % 2 == 0; })).to.eql(false);
      expect(_.every(obj, function (num) { return num % 1 == 0; })).to.eql(true);      
    });
  });  

   describe('#some', function () {
    it('is a function', function () {
      expect(_.some).to.be.a('function');
    });
    it('returns a correct boolean when passed an array and predicate', function () {
      let arr = [1, 2, 3, 4, 5, 6];
      expect(_.some(arr, function (num) { return num % 2 == 0; })).to.eql(true);
      expect(_.some(arr, function (num) { return num % 1.999 == 0; })).to.eql(false);            
    });
    it('returns a correct boolean when passed an object and predicate', function () {
      let obj = {'1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6};
      expect(_.some(obj, function (num) { return num % 2 == 0; })).to.eql(true);
      expect(_.some(obj, function (num) { return num % 1.999 == 0; })).to.eql(false);     
    });    
  });     

  describe('#extend', function () {
    it('is a function', function () {
      expect(_.extend).to.be.a('function');
    });
    it('returns the original object if there is no source passed', function () {
      let obj = {name: 'moe'};
      expect(_.extend(obj)).to.eql({name: 'moe'});
    });
    it('returns an object with the properties from the source object copied over', function () {
      let obj = {name: 'moe'};
      let source = {age: 50};
      expect(_.extend(obj, source)).to.eql({name: 'moe', age: 50});      
    });
    it('does not duplicate object keys, it will overwrite any existing key/value with the latest from the source object', function () {
      let obj = {name: 'moe', age: 50};
      let source = {age: 22, name: 'josh'};
      expect(_.extend(obj, source)).to.eql({name: 'josh', age: 22});            
    });
  }); 

  describe('#defaults', function () {
    it('is a function', function () {
      expect(_.defaults).to.be.a('function');
    });

  }); 

});
