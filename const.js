const PI = 3.14;
// this will break on runtime
// const cannot be assigned to a read only variable
PI = 3.0; // you cant do this with const
// if the intention is to modify the entire value then use let
// the only way you can modify cont is e.g

const  name = "Odhiambo Dormnic";
name.split(' ')
const carsArray = ['Ferrari', 'Maserati'];
const newModel =  ['Tesla']

carsArray.push(...newModel)
console.log(PI);