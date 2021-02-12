function Dictionary(){
    var items = {};
    
    //has method
    this.has = function(key){
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
        return this.has(key) ? items[key] : 'not provided';
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
//dictionary.set('Gandalf', 'gandalf@gmail.com');
//dictionary.set('John', 'johnsnow@gmail.com');
//dictionary.set('Tyrion', 'tyrion@gmail.com');
// console.log(dictionary.has('Gandalf'));
// console.log(dictionary.size());
// console.log(dictionary.values());
// console.log(dictionary.keys());

// dictionary.delete("John");
// console.log(dictionary.keys());
// console.log(dictionary.values());
//console.log(dictionary.getItems());





function Graph() {

    
    var vertices = [];
    var adjList = new Dictionary();

    this.addVertex = function(v){
        vertices.push(v);
        adjList.set(v, []);
    };

    this.addEdge = function(v,w){
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    };




}

var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var i=0; i<myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

this.toString = function(){
    var s = '';
    for (var i=0; i<vertices.length; i++){
        s += vertices[i] + ' -> ';
        var neighbours = adjList.get(vertices[i]);
        for (var j=0; j<neighbours.length; j++){
            s += neighbours[j] + ' ';
        }
        s += '\n';

    }
    return s;
};
console.log(graph.toString);