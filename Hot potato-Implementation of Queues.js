function Queue() {

    let items = [];
    //properties and methods go here

    //enqueu method: adds element(s) to the back of the queu
    this.enqueue = function(element){
        items.push(element);
    };

    //deenqueu method : removes an element from the top of the queu

    this.dequeue = function(){
        return items.shift();

    };

    //front method: peeks the first element in the queu
    this.front = function(){
       return items[0];
    };

    //isEmpty: finds if the queu is empty and returns true 
    this.isEmpty = function(){
        return items.length == 0;
    };

    //size: finds the size of the queu

    this.size = function() {
        return items.length;
    };

    //print: This prints the contents of various mathods in this class

    this.print = function(){

        console.log(items.toString());
    };
}


//1. The circular queue – Hot Potato
function hotPotato (nameList, num){
    let queue = new Queue(); // {1}
    for (let i=0; i<nameList.length; i++){
    queue.enqueue(nameList[i]); // {2}
    }
    let eliminated = '';
    while (queue.size() > 1){
    for (let i=0; i<num; i++){
    queue.enqueue(queue.dequeue()); // {3}
    }
    eliminated = queue.dequeue();// {4}
    console.log(eliminated + ' was eliminated from the Hot Potato game.');
    }
    return queue.dequeue();// {5}
}
let names = ['John','Jack','Camila','Ingrid','Carl'];let winner =
hotPotato(names, 7);console.log('The winner is: ' + winner);