function Set() 
{
    
    let items = {};

    //methods available for the set

    // add(value);
    // delete(value);
    // has(value);
    // clear();
    // size();
    // values();

    //implementation of the methods

    this.has = function(value){
        return value in items;
    };

    //another way to implement the has method
    this.has = function(value){
        return items.hasOwnProperty(value);
    };

    //the add method
    this.add = function(value){
        if (!this.has(value)){
            items[value] = value;
            return true;
        }
        return false;
    };

    //delete and clear methods
    this.delete = function(value){
        if (this.has(value)){
            delete items[value];
            return true;
        }
        return false;
    };

    //clear method
    this.clear = function(){
        items = {};
    };

    //the size method
    this.size = function() {
        return Object.keys(items).length;
    };

    //this method is an alterative to the above but will run on all browsers
    this.sizeLegacy = function(){
        let count = 0;
        for(let key in items) { //{5}
        if(items.hasOwnProperty(key)) //{6}
        ++count; //{7}
        }
        return count;
    };

    //the values method
    this.values = function(){
        let values = [];
        for (let i=0, keys=Object.keys(items); i<keys.length; i++){
            values.push(items[keys[i]]);
        }
        return values;
    };

    //this method works in all browsers
    this.valuesLegacy = function(){
        let values = [];
        for(let key in items) { //{7}
        if(items.hasOwnProperty(key)) { //{8}
        values.push(items[key]);
        }
        }
        return values;
    };


    //Set Operations

    //Set union

    this.union = function(otherSet){
        let unionSet = new Set(); //{1}
        let values = this.values(); //{2}
        for (let i=0; i<values.length; i++){
        unionSet.add(values[i]);
        }
        values = otherSet.values(); //{3}
        for (let i=0; i<values.length; i++){
        unionSet.add(values[i]);
        }
        return unionSet;
    };

 


}


//To use the set class

let set = new Set();

set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());

set.add(2);
console.log(set.values());
console.log(set.has(2));
console.log(set.size());

set.delete(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());

set.delete(2);
console.log(set.values());
console.log(set.has(2));
console.log(set.size());


//Set operations; Union, Intersection, Difference, Subset

//Union
let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

let unionAB = setA.union(setB);
console.log(unionAB.values());

