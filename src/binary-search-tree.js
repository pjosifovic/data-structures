'use strict';

class BinarySearchTree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
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
      return; 
    } else {
      if(!this.right){
        this.right = new BinarySearchTree(value);
        return;
      }
      this.right.add(value);
      return;
    }
  }

  findMin(){
    if(!this.value) return null;

    if(this.left)
      return this.left.findMin();

    return this.value;
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