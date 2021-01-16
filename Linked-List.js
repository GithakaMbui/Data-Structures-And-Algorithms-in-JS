function LinkedList(){

    let Node = function(element){
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    //Appending elements to the end of the Linked List

    this.append = function (element){

        let node = new Node(element),
        current;
        
        if (head === null){
            head = node; //first node on the list

        } else{
            current = head;

            //loop until find last item
            while(current.next){
                current = current.next;
            }
            //get last item and assign next node to make the link 

            current.next = node;
        }

        length ++; //update size of list
        
    };

//use and test the data structure we have created so far

let list = new LinkedList()
list.append(15);
list.append(10);

    //console.log(list);






    //Removing elements from the linked list
    this.removeAt = function(position){
        //check for out-of-bounds values
        if (position > -1 && position < length){ // {1}
        let current = head, // {2}
        previous, // {3}
        index = 0; // {4}
        //removing first item
        if (position === 0){ // {5}
            head = current.next;
        } else 
        {
            while (index++ < position)
            { // {6}
            previous = current; // {7}
            current = current.next; // {8}
        }
//link previous with current's next: skip it to remove

    previous.next = current.next; // {9}
        }
        length--; // {10}
        return current.element;
        } else {
        return null; // {11}
    }
};



}