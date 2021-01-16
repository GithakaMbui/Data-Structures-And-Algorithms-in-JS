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
    tree.postOrderTraverse(printNode);







