'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  add(value){
    let nodeToAdd = new Node(value);
    let headNode = this.head;

    // if head is null
    if(!headNode){
      this.head = nodeToAdd;
      this.size++;

      return this;
    }

    // loop till we find the end
    while(headNode.next) {
      headNode = headNode.next;
    }

    headNode.next = nodeToAdd;
    this.size++;

    return this;
  }

  getNodeWithPosition(value){
    let nodeToCheck = this.head;
    let count = 0;

    if(value > this.size)
      throw new TypeError('list has less items than entered value');
    
    while(count < value){
      nodeToCheck = nodeToCheck.next;
      count++;
    }

    return nodeToCheck;
  }

  removeNodeAtPosition(value){
    let nodeToCheck = this.head;
    let count = 0;
    let prevNode = null;

    if(value > this.size)
      throw new TypeError('list has less items than entered value');

    if(value === 0){
      this.head = nodeToCheck.next;
      this.size--;

      return this;
    }

    while(count < value){
      prevNode = nodeToCheck;
      nodeToCheck = nodeToCheck.next;
      count++;
    }
    prevNode.next = nodeToCheck.next;
    nodeToCheck = null;
    this.size--;

    return this;    
  }

  removeDuplicates(){
    // edge cases no nodes OR one node
    if(!this.head || !this.head.next) 
      return null;

    let p1 = this.head;
    let p2 = p1.next;
    let nodes = {};

    nodes[p1.value] = true;

    while(p2){
      let value = p2.value;
      if(nodes[value]){
        p1.next = p2.next;
      } else {
        nodes[value] = true;
        p1 = p2;
      }
      p2 = p2.next;
    }

    this.size--;
    return this;
  }

  reverseList(){
    if(!this.head || !this.head.next)
      return 'empty list or single element in the list';

    let prev = null;
    let node = this.head;

    while(node){
      // save next node
      let save = node.next;
      // reverse pointer
      node.next = prev;
      // increment prev to current node
      prev = node;
      // increment node to next node or null at the end of the list
      node = save;
    }

    this.head = prev;
    return this.head;
  }

}

module.exports = LinkedList;
