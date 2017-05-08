# Lowbar.js

Lowbar is a reimplementation of some of the major methods in the underscore.js library, a library which provides functional programming helpers. This project was completed using TDD (Test Driven Development) and Node.js and tested using Mocha/Chai with Sinon.js.

Check out the official Underscore.js docs [here](http://underscorejs.org/) to find out more.

If you would like to run the tests I have written for this project:

```s
git clone https://github.com/JoshMarsden94/Lowbar

cd Lowbar

npm install

npm test
```

## Collection Methods

***each***

_.each(list, iteratee)
- Iterates over a list of elements, yielding each in turn to an iteratee function. Each invocation of iteratee is called with three arguments: (element, index, list). If list is a JavaScript object, iteratee's arguments will be (value, key, list). Returns the list for chaining.

***indexOf***

_.indexOf(array, value)
- Returns the index at which value can be found in the array, or -1 if value is not present in the array.

***filter***

_.filter(list, predicate)
- Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).

***reject***

_.reject(list, predicate)
- Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.

***map***

_.map(list, iteratee)
- Produces a new array of values by mapping each value in list through a transformation function (iteratee). The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.

***pluck***

_.pluck(list, propertyName)
- A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.

***reduce***

_.reduce(list, iteratee, [memo])
- Also known as inject and foldl, reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.

***contains***

_.contains(list, value, [fromIndex]) 
- Returns true if the value is present in the list. Uses indexOf internally, if list is an Array. Use fromIndex to start your search at a given index.

***every***

_.every(list, [predicate])
- Returns true if all of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a false element is found.

***some***

_.some(list, [predicate])
- Returns true if any of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a true element is found.

***shuffle***

_.shuffle(list) 
- Returns a shuffled copy of the list.

***invoke***

_.invoke(list, methodName, *arguments) 
- Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.

***sortBy***

_.sortBy(list, iteratee)
- Returns a (stably) sorted copy of list, ranked in ascending order by the results of running each value through iteratee. iteratee may also be the string name of the property to sort by (eg. length).

***flatten***

_.flatten(array, [shallow])
- Flattens a nested array (the nesting can be to any depth). If you pass shallow, the array will only be flattened a single level.

***intersection***

_.intersection(*arrays) 
- Computes the list of values that are the intersection of all the arrays. Each value in the result is present in each of the arrays.

***difference***

_.difference(array, *others) 
- Similar to without, but returns the values from array that are not present in the other arrays.

## Utility Methods

***identity***

_.identity(value)
- Returns the same value that is used as the argument. In math: f(x) = x .
This function looks useless, but is used throughout Underscore as a default iteratee.

## Array Methods

***first***

_.first(array, [n])
- Returns the first element of an array. Passing n will return the first n elements of the array.

***last***

_.last(array, [n])
- Returns the last element of an array. Passing n will return the last n elements of the array.

***indexOf***

_.indexOf(array, value)
- Returns the index at which value can be found in the array, or -1 if value is not present in the array.

***uniq***

_.uniq(array, [isSorted], [iteratee])
- Produces a duplicate-free version of the array, using === to test object equality. In particular only the first occurence of each value is kept. If you know in advance that the array is sorted, passing true for isSorted will run a much faster algorithm. If you want to compute unique items based on a transformation, pass an iteratee function.

***flatten***

_.flatten(array, [shallow])
- Flattens a nested array (the nesting can be to any depth). If you pass shallow, the array will only be flattened a single level.

***intersection***

_.intersection(*arrays) 
- Computes the list of values that are the intersection of all the arrays. Each value in the result is present in each of the arrays.

***difference***

_.difference(array, *others) 
- Similar to without, but returns the values from array that are not present in the other arrays.

***zip***

_.zip(*arrays) 
- Merges together the values of each of the arrays with the values at the corresponding position. Useful when you have separate data sources that are coordinated through matching array indexes. Use with apply to pass in an array of arrays. If you're working with a matrix of nested arrays, this can be used to transpose the matrix.

***indexOfAdv - binary search***

_.indexOfAdv(array, value, [isSorted])
- Returns the index at which value can be found in the array, or -1 if value is not present in the array. If you're working with a large array, and you know that the array is already sorted, pass true for isSorted to use a faster binary search ... or, pass a number as the third argument in order to look for the first matching value in the array after the given index.

***sortedIndex***

_.sortedIndex(list, value, [iteratee])
- Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order. If an iteratee function is provided, it will be used to compute the sort ranking of each value, including the value you pass. The iteratee may also be the string name of the property to sort by (eg. length).

## Object Methods

***extend***

_.extend(destination, *sources) 
- Shallowly copy all of the properties in the source objects over to the destination object, and return the destination object. Any nested objects or arrays will be copied by reference, not duplicated. It's in-order, so the last source will override properties of the same name in previous arguments.

***defaults***

_.defaults(object, *defaults) 
- Fill in undefined properties in object with the first value present in the following list of defaults objects.

## Function Methods

***once***

_.once(function) 
- Creates a version of the function that can only be called one time. Repeated calls to the modified function will have no effect, returning the value from the original call. Useful for initialization functions, instead of having to set a boolean flag and then check it later.

***memoize***
 
 _.memoize(function, [hashFunction])
 - Memoizes a given function by caching the computed result. Useful for speeding up slow-running computations. If passed an optional hashFunction, it will be used to compute the hash key for storing the result, based on the arguments to the original function. The default hashFunction just uses the first argument to the memoized function as the key. The cache of memoized values is available as the cache property on the returned function.

***delay***

_.delay(function, wait, *arguments)
- Much like setTimeout, invokes function after wait milliseconds. If you pass the optional arguments, they will be forwarded on to the function when it is invoked. 