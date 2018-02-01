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

  // toString() pre-order
  toString(str){
    if(typeof str !== 'string')
      throw new TypeError('<str> needs to be a string');
    
    let buildStr = str;

    const _toString = node => {
      buildStr += node.value;

      if(node.left)
        _toString(node.left);

      if(node.right)
        _toString(node.right);

      return buildStr;
    };

    return _toString(this);
  }

  // toArray pre-order
  toArray(array){
    if(!Array.isArray(array = []))
      throw new TypeError('<array> needs to be an array');
    
    const _toArray = node => {
      array.push(node.value);

      if(node.left)
        _toArray(node.left);

      if(node.right)
        _toArray(node.right);

      return array;
    };

    return _toArray(this);
  }


// TODO: other methods and problems
// ==================================================
// getMin()
// getMax()
// insert()
// delete()
// find all leaves
// find the closest leaf
// print a path from root to node
// find second largest
// clear all nodes
// size() - number of nodes
// compare two tree
// node height()
}

module.exports = BinaryTree;