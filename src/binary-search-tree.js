'use strict';

class BinarySearchTree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  add(value){
    if(typeof value !== 'number')
      throw new TypeError('value must be a number');

    if(!this.value === null) return null;

    if(this.value === value) return this;

    if(value < this.value){
      if(!this.left) {
        this.left = new BinarySearchTree(value);
        return;
      }
      this.left.add(value);
      this.left.parent = this;
      return; 
    } else {
      if(!this.right){
        this.right = new BinarySearchTree(value);
        return;
      }
      this.right.add(value);
      this.right.parent = this;
      return;
    }
  }

  find(value){
    if(typeof value !== 'number')
      throw new TypeError('value has to be a number');

    if(this.value === value)
      return this;
    if(value < this.value && this.left)
      return this.left.find(value);
    if(value > this.value && this.right)
      return this.right.find(value);
    else
      return null;
  }

  findMin(){
    if(!this.value) return null;

    if(this.left)
      return this.left.findMin();

    return this.value;
    // return this.left ? this.left.findMin(value) : this.value;
  }

  findMax(){
    if(!this.value) return null;

    if(this.right)
      return this.right.findMax();

    return this.value;
    // return this.right ? this.right.findMax(value) : this.value;
  }

  delete(value){
    
    // node doesn't have left or right - return null
    if(!this.value) return null;

    // node only has left subtree- return the left subtree
    if(value < this.value){
      this.left = this.left && this.left.delete(value);
      // node only has right subtree- return the right subtree
    } else if (value > this.value){
      this.right = this.right && this.right.delete(value);
    // node has both left and right - find the minQimum value in the right subtree, set that value to the currently found node, then recursively delete the minimum value in the right subtree
    } else if (this.left && this.right) {
      this.value = this.right.findMin();
      this.right = this.right.delete(this.value);
    } else {
      return this.left || this.right;
    }
    return this;
  }


  



// TODO: other methods and problems
// ==================================================
// getMin()
// getMax()
// insert()
// delete()
// find all leaves
// breath first BST
// find the closest leaf
// print a path from root to node
// find second largest
// clear all nodes
// size() - number of nodes
// compare two tree
// node height()
}

// breath first BST
const breathSearch = node => {
  if(!node) return null;

  let queue = [];
  queue.push(node);

  while(queue.length > 0){
    let curr = queue[0];

    if(curr.left) queue.push(curr.left);
    if(curr.right) queue.push(curr.right);

    queue.shift();
  }
};

const levelOrder = node => {
  let result = [];
  if(!node) return result;

  let Queue = [node];
  while(Queue.length){
    let size = Queue.length;
    let temp = [];
    for(let i = 0; i < size; i++){
      temp.push(Queue.shift());
      if(node.left) Queue.push(node.left);
      if(node.right) Queue.push(node.right);
    }
    result.push(temp);
  }

  return result;
};

module.exports = BinarySearchTree;