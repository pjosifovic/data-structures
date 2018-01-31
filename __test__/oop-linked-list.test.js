'use strict';

const LinkedList = require('../lib/oop-linked-list');

describe('oop linked list', () => {
  test('adding method should add new node to the end of the linked list', () => {
    let data = new LinkedList();
    data.add(5);
    data.add(10);
    
    expect(data.head.value).toEqual(5);
    expect(data.head.next.value).toEqual(10);
    expect(data.head.next.next).toEqual(null);
    expect(data.size).toEqual(2);    
  });
  
  test('getNodeWithPosition should return node with value thats been passed in as param', () => {
    let data = new LinkedList();
    data.add(10);
    data.add(20);
    data.add(30);
    
    expect(data.head.value).toEqual(10);
    expect(data.head.next.value).toEqual(20);
    expect(data.head.next.next.value).toEqual(30);
    expect(data.getNodeWithPosition(1).value).toEqual(20);
    expect(data.size).toEqual(3);    
  });

  test('removeNodeAtPosition should remove node with value that\'s been passed in as param', () => {
    let data = new LinkedList();
    data.add(10);
    data.add(20);
    data.add(30);
    
    expect(data.head.value).toEqual(10);
    expect(data.head.next.value).toEqual(20);
    expect(data.head.next.next.value).toEqual(30);
    
    data.removeNodeAtPosition(1);
    expect(data.head.value).toEqual(10);
    expect(data.head.next.value).toEqual(30);
    expect(data.size).toEqual(2);    
    
    data.removeNodeAtPosition(1);
    expect(data.head.value).toEqual(10);
    expect(data.head.next).toEqual(null);
    expect(data.size).toEqual(1);    
  });

  test('adding method should add new node to the end of the linked list', () => {
    let data = new LinkedList();
    data.add(5);
    data.add(10);
    data.add(10);
    
    expect(data.head.value).toEqual(5);
    expect(data.head.next.value).toEqual(10);
    expect(data.head.next.next.value).toEqual(10);
    expect(data.size).toEqual(3);

    data.removeDuplicates();
    expect(data.head.value).toEqual(5);
    expect(data.head.next.value).toEqual(10);
    expect(data.head.next.next).toEqual(null);
    expect(data.size).toEqual(2);
  });
  
  test('reverseList should reverse the order of nodes in linked list', () => {
    let data = new LinkedList();
    data.add(5);
    data.add(10);
    data.add(15);
    
    expect(data.head.value).toEqual(5);
    expect(data.head.next.value).toEqual(10);
    expect(data.head.next.next.value).toEqual(15);
    expect(data.size).toEqual(3);

    data.reverseList();
    expect(data.head.value).toEqual(15);
    expect(data.head.next.value).toEqual(10);
    expect(data.head.next.next.value).toEqual(5);
  });


});