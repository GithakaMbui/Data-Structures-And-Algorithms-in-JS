function Set() {

    let items = {};

    //has method
    this.has = function(value){
        return items.hasOwnProperty(value);
    };

    //add method
    this.add = function(value){
        if (!this.has(value)){
            items[value]= value;
            return true;
        }
        return false;
    };

    //values method
    this.values = function(){
        let values = [];
        for (let i=0, keys=Object.keys(items); i<keys.length; i++){
            values.push(items[keys[i]]);
        }
        return values;
        
    };


    //union method
    this.union = function(otherSet){
        let unionSet = new Set();

        let values = this.values();
        for (let i=0; i<values.length; i++ ){
            unionSet.add(values[i]);
        }

        values = otherSet.values();
        for (let i=0; i<values.length; i++){
            unionSet.add(values[i]);
        }
        return unionSet;
        
    };

    //intersection method

    this.intersection = function(otherSet){
        let intersectionSet = new Set(); //{1}
        let values = this.values();
        for (let i=0; i<values.length; i++)
        {  //{2}
            if (otherSet.has(values[i])){ //{3}
            intersectionSet.add(values[i]); //{4}
            }
        }
        return intersectionSet;
    };

    //set difference
    this.difference = function(otherSet){
        let differenceSet = new Set();
        let values = this.values();
        for ( let i=0; i<values.length; i++){
            if (!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;

    };

    //ES6 implemetation of set difference
    
    //differenceAB = new Set([x for (x of setA) if (!setB.has(x))]);

    //subset

    this.subset = function(otherSet){
        if (this.size > otherSet.size){
            return false;
        }
        let values = this.values();
        for(let i=0; i<values.length; i++){
            if (!otherSet.has(values[i])){
                return false;
            }

        }
        return true;
    };

}

//implemenattion of the Set class
// let setA = new Set;
// setA.add(1);
// setA.add(2);
// setA.add(3);
// console.log(setA.values());

// let setB = new Set;
// setB.add(3);
// setB.add(4);
// setB.add(5);
// console.log(setB.values());

// //implementation of union method
// let unionAB = setA.union(setB)

// console.log(unionAB.values())



//intersection
// let setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);

// let setB = new Set();
// setB.add(2);
// setB.add(3);
// setB.add(4);

// let intersectionAB = setA.intersection(setB);
// console.log(intersectionAB.values());

//set difference

// let setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);

// let setB = new Set();
// setB.add(4);
// setB.add(5);
// setB.add(3);

// let differenceAB = setA.difference(setB);
// console.log(differenceAB.values());

//subset implementation
let setA = new Set();
setA.add(1);
setA.add(2);

let setB = new Set();
setB.add(1);
setB.add(2)
setB.add(3)

let setC = new Set();
setB.add(2)
setB.add(3)
setB.add(4)

console.log(setA.subset(setB));
console.log(setA.subset(setC));