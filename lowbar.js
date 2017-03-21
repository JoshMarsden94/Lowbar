var _ = {};

_.identity = function (value) {
  return value;
};

_.first = function (array, n) {
    if (!n) return array[0];

    let res = [];
    let i = 0;

    while (i < n) {
        res.push(array[i]);
        i++;
    }

    return res;
};

_.last = function (array, n) {
    if (!n) return array[array.length - 1];

    let res = [];
    for (let i = array.length - n; i < array.length; i++) {
        res.push(array[i]);
    }
    
    return res;
};

_.each = function (list, iteratee) {
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            iteratee(list[i], i, list);
        }
    } else {
        for (let key in list) {
            iteratee(list[key], key, list);
        }
    }
    return list;
};

_.indexOf = function (array, value) {
    if (!Array.isArray(array) || !value) return - 1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
    }
    
    return -1;
};

_.filter = function (list, predicate) {
    let arr = [];

    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            if (predicate(list[i])) arr.push(list[i]);
        }
    } else {
        for (let key in list) {
            if (predicate(list[key])) arr.push(list[key]);
        }
    }

    return arr;
};

_.reject = function (list, predicate) {
    let arr = [];

    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            if (!predicate(list[i])) arr.push(list[i]);
        }
    } else {
        for (let key in list) {
            if (!predicate(list[key])) arr.push(list[key]);
        }
    }

    return arr;
};

_.uniq = function (array) {
    if (arguments.length === 0) return [];

    let res = [];

    for (let i = 0; i < array.length; i++) {
        if (!res.includes(array[i])) res.push(array[i]);
    }

    return res;
};

_.map = function (list, iteratee) {
    let res = [];

    _.each(list, function (item) {
      res.push(iteratee(item));
    });

    return res;
};

_.pluck = function (list, propertyName) {
    if (!propertyName) return [];    
    let res = [];

    for (let i = 0; i < list.length; i++) {
        res.push(list[i][propertyName]);
    }

    return res;
};

_.reduce = function (list, iteratee, acc) {

  _.each(list, function (item) {   
    if (acc === undefined) {
      acc = item;
    } else {
      acc = iteratee(acc, item);
    }
  });

  return acc;
};

_.contains = function (list, value, indexFrom) {
    if (typeof list === 'object' && !Array.isArray(list)) {
        list = Object.values(list);
    }
    if (indexFrom === undefined) indexFrom = 0;
    for (let i = indexFrom; i < list.length; i++) {
        if (list[i] === value) {
            return true;
        }
    }
    return false;
};

_.every = function (list, predicate) {
    if (typeof list === 'object' && !Array.isArray(list)) {
        list = Object.values(list);
    }

    for (let i = 0; i < list.length; i++) {
        if (!predicate(list[i])) return false;
    }

    return true;
};

_.some = function (list, predicate) {
    if (typeof list === 'object' && !Array.isArray(list)) {
        list = Object.values(list);
    }

    for (let i = 0; i < list.length; i++) {
        if (predicate(list[i])) return true;
    }

    return false;
};

_.extend = function (object, source) {
    if (!source) return object;

    _.each(source, function (value, key) {
        object[key] = value;
    });

    return object;
};

_.defaults = function (object, defaults) {
    if (!defaults) return object;

    _.each(defaults, function (value, key) {
        if (object[key] === undefined) {
            object[key] = value;
        }
    });
    
    return object;
};

_.indexOfAdv = function (array, value, isSorted) {
    if (!Array.isArray(array) || !value) return - 1;
    if (!isSorted) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) return i;
        }
    }
    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;
    
    while (low <= high) {
      mid = Math.floor((low + high) / 2, 10);
      element = array[mid];
      if (element < value) {
        low = mid + 1;
      } else if (element > value) {
        high = mid - 1;
      } else {
        return mid;
      }
    }

    return -1;    
};

_.once = function (func) {
    var called = false;
    return function () {
        if (!called) {
            called = true;
            return func();
        }
    };
};

_.memoize = function (func) {

  const cache = {};
  const speedy = function () {
    const arg = JSON.stringify(arguments[0]);
    if (cache[arg]) return cache[arg];
    else {
      const res = func.apply(null, arguments);
      cache[arg] = res;
      return res;
    }
  };
  speedy.cache = cache;

  return speedy;
};

_.delay = function (func, wait) {
    const args = Array.from(arguments).slice(2);

  setTimeout(function () {
    func.apply(null, args); 
  }, wait);
};

_.shuffle = function (list) {
    if (typeof list === 'object' && !Array.isArray(list)) {
        list = Object.values(list);
    }

    let shuffledList = list.slice();
    let res = [];

    for (let i = 0; i < list.length; i++) {
      let random = Math.floor(Math.random() * shuffledList.length);
      res.push(shuffledList[random]);
      shuffledList.splice(random,1);
    }

    return res;    
};

_.invoke = function (list, method, args) {
    let listCopy = list.slice();

    return _.map(listCopy, function (item) {
        if (typeof(method) === 'string') {
            method = item[method];
        }

        return method.call(item, args);
    });
};

_.sortBy = function (list, iteratee) {
    if (typeof(iteratee) === 'function') {
      return list.sort(function (a, b) {return iteratee(a) - iteratee(b);});
    } else {
      return list.sort(function (a,b) {return a[iteratee] - b[iteratee];});
    } 
};

_.zip = function () {
    var res = [];
    var tempRes = [];

    for (var i = 0; i < arguments[0].length; i++) {
      for (var j = 0; j < arguments.length; j++) {
        tempRes.push(arguments[j][i]);
      }
      res.push(tempRes);
      tempRes = [];
    }

    return res;
};

_.sortedIndex = function (list, value, iteratee) {
    if (arguments.length === 3) {
        return binarySearch(_.sortBy(list, iteratee), value);
    }
    function binarySearch (list, name) {
        var s = 0;
        var e = list.length - 1;
        for (var i = 0; i < 10; i++) {
            var m = Math.floor((e + s) / 2);
            if (list[m] === name) {
                return m;
            }
            if (name < list[m]) {
                e = m - 1;
            }
            if (name > list[m]) {
                s = m + 1;
            }
        }
        return m + 1;
    }

    return binarySearch(list, value);
};

_.flatten = function (array, shallow) {
    if (!Array.isArray(array)) return array;
    let result = [];   
    
    if (shallow) {
        array.forEach(function (element) {
            if (!Array.isArray(element)) {
                result.push(element);
            } else {
                element.forEach(function (element) {
                    result.push(element);
                });
            }
        });
    } else {
        let flattenRecursion = function (arr) {
            if (!Array.isArray(arr)) {
                result.push(arr);
            } else {
                arr.forEach(function (element) {
                    return flattenRecursion(element);
                });
            }
        };
        flattenRecursion(array);
    }
    
    return result;
};

_.intersection = function () {

};

_.difference = function () {

};

_.throttle = function () {

};

if (typeof module !== 'undefined') {
  module.exports = _;
}

/* 

1. identity √
2. first √
3. last √
4. each √
5. indexOf √
6. filter √
7. reject √
8. uniq √
9. map √
10. pluck √
11. reduce √
12. contains √
13. every √
14. some √
15. extend √
16. defaults √

// Start of Advanced:
1. indexOfAdv (again, this time with a binary search) √
2. once √
3. memoize √
4. delay √
5. shuffle √
6. invoke √
7. sortBy (NB the Underscore library uses the native JavaScript sort but feel free to use your sort algorithm!) √
8. zip √
9. sortedIndex
10. flatten
11. intersection
12. difference
13. throttle

*/