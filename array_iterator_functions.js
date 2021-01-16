var isEven = function (x) {
    // returns true if x is a multiple of 2.
    console.log(x);
    return (x % 2 == 0) ? true : false;
};
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

//numbers.every(isEven);
//numbers.some(isEven);

// numbers.forEach(function(x){
//     console.log((x % 2 == 0));
// });

//console.log(myMap = numbers.map(isEven));

//console.log(myMap);

// var evenNumbers = numbers.filter(isEven);

// console.log(evenNumbers);

// numbers.reduce(function(previous, current, index){
//     return previous + current;
// });

// for (let n of numbers) {
//     console.log((n % 2 == 0) ? 'even' : 'odd');
// }

let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)

let aEntries = numbers.entries(); //retrieve iterator of key/value
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);


