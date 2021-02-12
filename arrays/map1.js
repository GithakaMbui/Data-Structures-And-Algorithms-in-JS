var officers = [{
        id: 20,
        name: 'Githaka Wamuhu',
        age: 50,
        rating: 10
    },
    {
        id: 21,
        name: 'Rose Kihenjo',
        age: 28,
        rating: 9
    },
    {
        id: 22,
        name: 'Attur Gandhi',
        age: 29,
        rating: 5
    },
    {
        id: 23,
        name: 'Lisa Wangari',
        age: 35,
        rating: 6
    }
];

/*What I need :
1. an array of [20, 21, 22, 23]
2. officers age
3. officers rankings
4. officers who are are above 40*/

//using ForEach
let officersIds = [];
officers.forEach(function (officer) {
    officersIds.push(officer.id)
});
console.log("Output of forEach is " + officersIds);

//using Map()
let officersAge = officers.map(function (officer) {
    return officer.age
});
console.log("Output of Map method is " + officersAge); //This has output [50, 28,29,35]

//using for...of()
for (let officer of officers) {
    console.log("Output of for of method is " + officer.rating);
}


//The filter method creates a new array with all elements that pass the test implemented by the provided function.
let filtered_result = officers.filter(function (officer) {
    return officer.age > 40;
});
//console.log("The result of the filter method is: ");
console.log("The result of the filter method is: " + filtered_result); // this will return: [ { id: 20, name: "Githaka Wamuhu", age: 50, rating: 10 } ]

//filter in Es6
filtered = officers.filter(officer => officer.age > 40);
console.log(filtered[0]);

//some
//check if the object exists
let exists = officers.some(function (officer) {
    return officer.name === 'Lisa Wangari';
})
console.log(exists);

//findIndex
//returns the index of the object
police_Index = officers.findIndex(function (officer) {
    return officer.name === 'Lisa Wangari';
});
console.log(police_Index);