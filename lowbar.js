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

_.each = function () {

};

_.indexOf = function () {

};

_.filter = function () {

};

_.reject = function () {

};

_.uniq = function () {

};

_.map = function () {

};

_.pluck = function () {

};

_.reduce = function () {

};

_.contains = function () {

};

_.every = function () {

};

_.some = function () {

};

_.extends = function () {

};

_.defaults = function () {

};

if (typeof module !== 'undefined') {
  module.exports = _;
}

/* 

1. identity
2. first
3. last
4. each
5. indexOf
6. filter
7. reject
8. uniq
9. map
10. pluck
11. reduce
12. contains
13. every
14. some
15. extends
16. defaults

// Start of Advanced:
1. indexOf (again, this time with a binary search)
2. once
3. memoize
4. delay
5. shuffle
6. invoke
7. sortBy (NB the Underscore library uses the native JavaScript sort but feel free to use your sort algorithm!)
8. zip
9. sortedIndex
10. flatten
11. intersection
12. difference
13. throttle

*/