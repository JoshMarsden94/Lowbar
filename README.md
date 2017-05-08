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

## Methods

***identity***


***first***


***last***


***each***

_.each(list, iteratee)
- Iterates over a list of elements, yielding each in turn to an iteratee function. The iteratee is bound to the context object, if one is passed. Each invocation of iteratee is called with three arguments: (element, index, list). If list is a JavaScript object, iteratee's arguments will be (value, key, list). Returns the list for chaining.

***indexOf***


***filter***


***reject***


***uniq***


***map***

_.map(list, iteratee)
- Produces a new array of values by mapping each value in list through a transformation function (iteratee). The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.

***pluck***


***reduce***


***contains***


***every***


***some***


***extend***


***defaults***


***indexOf - binary search***


***once***


***memoize***


***delay***


***shuffle***


***invoke***


***sortBy***


***zip***


***sortedIndex***


***flatten***


***intersection***


***difference***


