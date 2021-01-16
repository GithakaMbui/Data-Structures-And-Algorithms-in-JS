function addition(num1, num2) {
    return num1 + num2;
}

var result = addition(1, 3);
console.log(result);

function sayHello() {
    console.log('hello');
}
sayHello();

function passGreetings( text1) {
    console.log(text1);
}

passGreetings('Hello there', 'How are you doing');


function passGreetings( text1, text2) {
    console.log(text1 + text2);
}

passGreetings('Hello there', 'How are you doing');

function passGreetings( text1, text2, text3) {
    console.log(text1 + text2 + text3);
}

passGreetings('Hello there', 'How are you doing', 'Very well thank you');


