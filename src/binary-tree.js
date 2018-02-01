'use strict';

class BinaryTree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // in-order find L Root R
  find(value){
    let foundNode = null;

    // error checking if no tree
    if(!this.value){
      return null;
    }
    // error checking value
    if(typeof value !== 'number' || isNaN(value)){
      throw new TypeError('entered value must be a number');
    }

    const traverseAndFind = node => {
      if(node.left && !foundNode)
        traverseAndFind(node.left);    
      
      if(node.value === value && !foundNode)
        return foundNode = node;
      
      if(node.right && !foundNode)
        traverseAndFind(node.right);    
    };
    
    traverseAndFind(this);
    return foundNode;
  }

// TODO: other methods and problems
// ==================================================
// getMin()
// getMax()
// insert()
// find()
// toArray()
// toString()
// delete()
// find all leaves
// find the closest leaf
// print a path from root to node
// find second largest
// clear all nodes
// size() - number of nodes
// compare two tree
// height()
}

module.exports = BinaryTree;