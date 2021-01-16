//HashTable class, also known as HashMap, a hash implementation of the Dictionary class.
//Hashing consists of finding a value in a data structure in the shortest time possible
//A hash function is a function that, given a key, will return an address in the table where the value is.
//The hash function we will use is the most common one, called a lose lose hash function, in
//which we simply sum up the ASCII values of each character of the key length

function Hashtable(){

    var table = [];

    //We will implement three basic methods for every class:
    //1. put(key,value): This adds a new item to the hash table (or it can also update it)
    //2. remove(key): This removes the value from the hash table using the key
    //3. get(key): This returns a specific value searched by the key

    //before we implement these three methods is the hash function.
    //A hash function is a private method of the HashTable class
    var loseloseHashCode = function(key){
        var hash = 0;
        for (var i=0; i<key.length; i++){
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };


    //put method
    this.put = function(key, value){
        var position = loseloseHashCode(key);
        console.log(position + '-' + key);
        table[position] = value;
    };

    //get method
    this.get = function(key){
        return table[loseloseHashCode(key)];
    };

    //remove method
    this.remove = function(key){
        table[loseloseHashCode(key)] = undefined;
    };






}

//using the HashTable Class
// var hash = new Hashtable();
// hash.put('Gandalf', 'gandalf@gmail.com');
// hash.put('John', 'johnsnow@gmail.com');
// hash.put('Tyrion', 'tyrion@gmail.com');

// console.log(hash.get('John'));

// hash.remove('Gandalf');
// console.log(hash.get('Gandalf'));


//Handling collisions between hash tables
//There are a few techniques to handle collisions: separate chaining, linear probing, and double hashing
var hash = new Hashtable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');