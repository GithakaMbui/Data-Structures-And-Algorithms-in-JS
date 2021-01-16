//creating a Binary Tree
function BinarySearchTrees() {
    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }

    var root = null;

    //Inseting a Key/Node into a Tree
    this.insert = function(key){
        var newNode = new Node(key)
        
        if(root ===null) {
            root = newNode;
        } else{
            insertNode(root, newNode);
        }
    }; 

    //defining private function InsertNode
    var insertNode = function(node, newNode){
        if(newNode.key < node.key){
            if(node.left === null){
            node.left = newNode;
            }else{
                insertNode(node.left, newNode);
            }
        }else {
            if(node.right ===null){
                node.right = newNode;
            }else {
                insertNode(node.right, newNode);
            }
        
        }      
    };

    
    //Tree Traversal

    // 1.InOrder Traversal
    this.inOrderTraverse = function(callback){
        inOrderTraverseNode(root, callback);
    };

    //inorderTraverseNode helper function
    var inOrderTraverseNode = function(node, callback){
        if(node !== null){
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };

    //2. PreOrder Traversal
    this.preOrderTraverse = function(callback){
        preOrderTraverseNode(root, callback);
    };

    //preorderTraverseNode helper method implementation
    var preOrderTraverseNode = function(node, callback){
        if(node !== null){
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };

    //3. PostOrder Traversal
    this.postOrderTraverse = function(callback){
        postOrderTraverseNode(root, callback);
    };

    //postOrder Traversal helper method implementation
    var postOrderTraverseNode = function(node, callback){
        if(node !==null){
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };

    //Searching for minimum and maximum values

    //Searching for minimum value
    this.min = function(){
        return minNode(root);
    };

    //Implemenation of MinNode helper function
    var minNode = function(node){
        if(node){
            while(node && node.left!==null){
                node = node.left;
            }
            return node.key;
        }
        return null;
    };

    //Searching for maximum value
    this.max = function(){
        return maxNode(root);
    };

    //Implementation of maxNode helper function
    var maxNode = function(node){
        if(node){
            while(node && node.right!==null){
                node = node.right;
            }
            return node.key
        }
        return null;
    };

    //SEARCHING FOR A SPECIFIC VALUE
    this.search = function(key){
        return searchNode(root, key);
    };

    //Implementation of helper function searchNode
    var searchNode = function(node, key){
        if(node == null){
            return false;
        }
        if(key < node.key){
            return searchNode(node.left, key);

        }else if (key > node.key){
            return searchNode(node.right, key);
        }else{
            return true;
        }
    };

//REMOVING A NODE FROM A TREE

this.remove = function(key){
    root = removeNode(root, key);
};

//Implementation of the removeNode method
var removeNode = function(node, key){
    if( node == null) {
        return false;
    }
    else if(key < node.key){
        node.left = removeNode(node.left, key);
        return node;
    }
    else if(key > node.key){
        node.right = removeNode(node.right, key);
        return node;
    } else{ //key is equal to node.key

        //case 1: a leaf node/ with no children
        if(node.left == null && node.right == null){
            node = null;
            return node;
        }
        //case 2: a node with only 1 child
        if (node.left === null){
            node = node.right;
            return node;
        } else if(node.right === null){
            node = node.left;
            return node;
        }
        //case 3: a node with 2 children
        var aux = findMinNode(node.right);
        node.key = aux.key;
        node.right = removeNode(node.right, aux.key);
        return node;

    }
};

    var findMinNode = function(node){
        while (node && node.left !==null){
            node = node.left;
        }
        return node;
    };


}

//instantiaate the Tree class
//inserting my first key into our tree data structure
var tree = new BinarySearchTrees();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

 //call back function printNode that prints the node's value
    function printNode(value){
        console.log(value);
    };
   //1.
    //tree.inOrderTraverse(printNode);

    //2.
    //tree.preOrderTraverse(printNode);
   
    //3.
    //tree.postOrderTraverse(printNode);

//find the minimum and maximum values of the tree
console.log(tree.min());
console.log(tree.max());

    //search for a specific value
//console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
//console.log(tree.search(8) ? 'Key 8 found' : 'Key 8 not found' );

//remove a key[12] from the tree
console.log(tree.search(12) ? 'Key 12 found' : 'Key 12 not found' );
console.log(tree.remove(12));
console.log(tree.search(12) ? 'Key 12 found' : 'Key 12 not found' );


    







