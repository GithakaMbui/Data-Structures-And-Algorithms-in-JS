isEven = function (x){
    //console.log(x);
    return (x % 2 == 0) ? true: false;
};

numbers = [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

console.log(numbers.every(isEven));

console.log(numbers.some(isEven));

var myMap = numbers.map(isEven);
console.log(myMap);

myTrueValues = numbers.filter(isEven);
console.log(myTrueValues);

numbers.forEach(function(x){
    console.log (x % 2 == 0);
});

sum = numbers.reduce(function(previous, current, index){
    return previous + current;
});

console.log(sum);

//new ES6 ways of iterating arrays

numbers.forEach(x => {
    console.log( x % 2 == 0);
});

for (let n of numbers) {
    console.log((n % 2 == 0) ? 'even' : 'odd');
}