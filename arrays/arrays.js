var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//console.log(DaysOfWeek);
//console.log(daysOfWeek.length); 

for (var i=0; i<daysOfWeek.length; i++  ){
    console.log(daysOfWeek[i]);
}

var numbers = [0,1,2,3,4,5,6,7,8,9];
numbers[numbers.length] = 10;
console.log(numbers);

//push
// However, there is also a method called push that allows us to add new elements to the end
// of the array. We can add as many elements as we want as arguments to the push method:
numbers.push(11);
numbers.push(12,13);
console.log(numbers);

//unshift
// The JavaScriptarray class also has a method called unshift, which inserts the values
// passed in the method's arguments at the start of the array:
numbers.unshift(100);
numbers.unshift(-2);
numbers.unshift(300);
numbers.unshift(400);
numbers.unshift(-3);

//numbers.pop();

//shift
// To actually remove an element from the beginning of the array, we can use the shift
// method, as follows:
numbers.shift()

//splice
// splice method to remove an element from an array by simply specifying
// the position/index that we would like to delete from and how many elements we would like
// to remove
numbers.splice(4,3);


// for (var i=numbers.length; i>=0; i--){
//     numbers[i] = numbers[i-1];
//     }
//     numbers[0] = 99;
console.log(numbers);

