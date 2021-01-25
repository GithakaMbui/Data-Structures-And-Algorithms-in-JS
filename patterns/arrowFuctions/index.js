const circleArea = r => {
    // always use const when declaring variables
    // use let only when the variable will mutate without children
    // e.g let name; name = "Dormnic"
    // if you plan to use this elsewhere in the code
    // you can define it globally on the file
    const PI = 3.1
    // For quick compute use the Math Engine in JS
    // remember keep it stupid simple simple,
    // avoid inline variables
    // cont area = PI * r * r; return area; is redundant
    return PI * Math.pow(r, 2);
}

console.log(circleArea(50));

