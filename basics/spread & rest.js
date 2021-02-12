function sum (x = 1, y = 2, z = 3) {
    return x + y + z
    };
    console.log(sum(4,2)); //outputs 9

var params = [3, 4, 5];
console.log(sum(...params));


function restParamaterFunction (x, y, ...a) {
    return (x + y) * a.length;
    }
    console.log(restParamaterFunction(1, 2, "hello", true, 7));