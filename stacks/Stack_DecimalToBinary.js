function Stack() {
    
    //properties and methods go here
    //we need a data structure that wil store the elements of the stack. We can use an array for this
    let items = [];
    //below we declare the methods available to our stack
    //Pushing elements to the Stack
    this.push = function (element) {
        items.push(element);
    };
    //Popping elements from the stack
    this.pop = function () {
        return items.pop();
    };
    //Peeking the element from the top of the stack
    this.peek = function () {
        return items[items.length - 1];
    };
    //Verifying if the stack is empty
    this.isEmpty = function () {
        return items.length == 0;
    };
    // this.isEmpty = function() {
    //     return items.length == 0;
    // };
    this.size = function () {
        return items.length;
    };
    //Clearing and printing the elements of stack
    this.clear = function () {
        items = [];
    };
    //let's implement a helper method called print that is going to output the contents of the stack on the console
    // this.print = function () {
    //     this.console.log(items.toString());
    // };
    this.print = function(){
        console.log(items.toString());
    };
        
}

//instantiate the Stack class we just created
let stack = new Stack();

//verify whether it is empty 
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log(stack.isEmpty());

console.log(stack.peek());

//console.log(stack.peep());

//add another element
stack.push(11);
console.log(stack.size());

//add another element
stack.push(15);

//let's remove two elements from the stack
stack.pop();
stack.pop();
console.log(stack.size());
//stack.print();
stack.print();


//application of Stacks
//1.Conversion of Decimal to Binary
function divideBy2(decNumber){
    var remStack = new Stack(),
    rem,
    binaryString = '';

    while (decNumber > 0){ //{1}
    rem = Math.floor(decNumber % 2); //{2}
    remStack.push(rem); //{3}
    decNumber = Math.floor(decNumber / 2); //{4}
    }

    while (!remStack.isEmpty()){ //{5}
    binaryString += remStack.pop().toString();
    }
    return binaryString;
}

console.log(divideBy2(10));
console.log(divideBy2(233));


//2.The base converter algorithm
//We can easily modify the previous algorithm to make it work as a converter from decimal
//to any base.

function baseConverter(decNumber, base){
    var remStack = new Stack(),
    rem,
    baseString = '',
    digits = '0123456789ABCDEF'; //{6}

    while (decNumber > 0){
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()){
    baseString += digits[remStack.pop()]; //{7}
    }
    return baseString;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));