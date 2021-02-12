numbers = [1,2,3,4,5,6,7];
numbers.splice(2,3);
//console.log(numbers.length);

numbers.splice(2,0,3,4,5)

for(i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

