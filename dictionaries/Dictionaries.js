function Dictionary(){
    var items = {};
    
    //has method
    this.has = function (key){
        return key in items;
    };

    //set method
    this.set = function(key, value){
        items[key] = value;
    };

    //delete method
    this.delete = function(key){
        if(this.has(key)){
            delete items[key];
            return true;
        }

        return false;
    };

    //get method: this seaches for a particular item from the dictionary and returns its value
    this.get = function(){
        return this.has(key) ? items[key] : undefined;
    };

    //values method: this retrieves an array of all the values present in the dictionary
    this.values = function(){
        values = [];
        for(var k in items){
            if(this.has(k)){
                values.push(items[k]);
            }
            
        }
        return values;
    };

    //clear method
    this.clear = function(){
        items = {};
    };

    //the size method
    this.size = function() {
        return Object.keys(items).length;
    };

    //the keys method: returns all the keys used to identify a value in the Dictionary class
    this.keys = function(){
        return Object.keys(items);
    };
    
    //getItems: To verify the output of the items property
    this.getItems = function(){
        return items

    };



}

//using the Dictioanry class

var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@gmail.com');
dictionary.set('John', 'johnsnow@gmail.com');
dictionary.set('Tyrion', 'tyrion@gmail.com');
// console.log(dictionary.has('Gandalf'));
// console.log(dictionary.size());
// console.log(dictionary.values());
// console.log(dictionary.keys());

// dictionary.delete("John");
// console.log(dictionary.keys());
// console.log(dictionary.values());
console.log(dictionary.getItems());


