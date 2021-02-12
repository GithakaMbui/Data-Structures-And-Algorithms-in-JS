function testTruthy(val){
    return val ? console.log('truthy') : console.log('falsy');
    }

    testTruthy(true)
    testTruthy(false);
    testTruthy(new Boolean(false));
    testTruthy('');
    testTruthy('');

var obj = {name:'John'};
testTruthy(obj); 
testTruthy(obj.name);
testTruthy(obj.age);

testTruthy(new String(''));
testTruthy('-0');
testTruthy(NaN);
testTruthy(-0);
testTruthy(+0);


console.log('packt' ? true: false);
console.log('' ? true : false);