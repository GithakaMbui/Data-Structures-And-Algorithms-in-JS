//The lose lose hash function we implemented is not a good hash function, as we have concluded (too many collisions).

//Another simple hash function that we can implement and which is better than the lose lose hash function is djb2, which is as follows:

function Hashtable(){
    var table = [];

    var djb2HashCode = function(key){
        var hash = 5381; //{1}
        for (var i = 0; i < key.length; i++) { //{2}
        hash = hash * 33 + key.charCodeAt(i); //{3}
        }
        return hash % 1013; //{4}

    };
        

    //put method
    this.put = function(key, value){
        var position = jb2HashCode(key);
        console.log(position + '-' + key);
        table[position] = value;
    };

    //get method
    this.get = function(key){
        return table[jb2HashCode(key)];
    };

    //remove method
    this.remove = function(key){
        table[jb2HashCode(key)] = undefined;
    };


}

    
//Using the djb2hash function

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