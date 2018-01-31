'use strict';

class LinkedList {
  constructor(value){
    this.value = value;
    this.next = null;
    this.length = 1;
    this.head = null;
    this.tail = null;
  }

  append(node){
    if(!(node instanceof LinkedList))
      throw new TypeError('<node> should be an instance of Linked List');
    if(!this.next)
      this.next = node;
    else
      this.next.append(node);
    
    this.length++;
    this.tail = node.value;
    return this;
  }

  _getSize(){
    return this.length;
  }
  
  _getTail(){
    return this.tail;
  }

  find(node){
    if(node === this.value)
      return this;
    if(this.next === null)
      return null;
    else 
      return this.next.find(node);
  }

  remove(node){
    if(!(node instanceof LinkedList))
      throw new TypeError('<node> should be instance of Linked List');
    if(!this.next)
      return null;
    if(!this.next && this.value === node){
      this.value = null;
      this.tail = this.value;
      this.length--;
      return this;  
    }
    if(node === this.next){
      this.next = this.next.next;
      this.tail = this.next;      
    }else 
      this.next.remove(node);

    this.length--;    
    return this;
  }
}

module.exports = LinkedList;


// Whiteboard Problems
// =======================================

// Traverse Linked list
// const traverse = list => {
//   if(!this.next)
//     return;

//   console.log(list.value);
//   traverse(list.next);   
// };


// Find middle of a linked list
// const findMiddle = list => {
//   let fast = list;
//   let slow = list;
//   while(fast.next){
//     fast = fast.next.next;
//     slow = slow.next;
//   }
  
//   return slow;
// };

// getFromIndex(index)
// check OOP linked list file

// TODO: stuff to do
// addAtIndex(index, val)
