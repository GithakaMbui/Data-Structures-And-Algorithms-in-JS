// var arrowArea = function arrowArea(r) {

//     let PI = 3.14;
//     area = PI * r *r ;
//     return area;
// }

// console.log(arrowArea(2));

//We can use arrow fucntions to simplify this

let circleArea = r => {

    let PI = 3.1
    area = PI * r * r;
    return area;
}

console.log(circleArea(2));

let circleArea2 = (r) => 3.14 * r * r;
console.log(circleArea2(3));