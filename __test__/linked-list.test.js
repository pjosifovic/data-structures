'use strict';

const LinkedList = require('../lib/single-linked-list');

describe('linked-list.js',() => {
  test('A list with a single element, should have a value and no next', () => {
    let result = new LinkedList(5);
    expect(result.value).toEqual(5);
    expect(result.next).toEqual(null);
  });
  // INSERT test
  test('Insertion should properly modify the next property', () => {
    let result = new LinkedList(5);
    result.append(new LinkedList(6));
    result.append(new LinkedList(10));

    expect(result.value).toEqual(5);
    expect(result.next.value).toEqual(6);
    expect(result.next.next.value).toEqual(10);
    expect(result._getSize()).toEqual(3);
    expect(result._getTail()).toEqual(10);
    expect(result.next.next.next).toEqual(null);
  });
  test('throw error if node is not an instance of LinkedList', () => {
    let result = new LinkedList(5);
    let nodeNotInstance = {'value':100, 'next': null};

    expect(function () {result.append(nodeNotInstance); } ).toThrow(TypeError);
  });

  // FIND test
  test('Find should find element with value passed to it', () => {
    let result = new LinkedList(5);
    result.append(new LinkedList(6));
    result.append(new LinkedList(10));

    expect(result.find(5).value).toEqual(5);
    expect(result.find(6).value).toEqual(6);
    expect(result.find(10).value).toEqual(10);
  });

  test('Find should return null if number is not in the list', () => {
    let result = new LinkedList(5);
    result.append(new LinkedList(6));
    result.append(new LinkedList(10));

    expect(result.find(20)).toBeNull();
  });

  // REMOVE test
  test('Remove should update the ext property and erase an element', () => {
    let first = new LinkedList(10);
    let second = new LinkedList(20);
    let third = new LinkedList(30);

    first.append(second);
    first.append(third);
    
    
    expect(first._getSize()).toEqual(3);
    expect(first.value).toEqual(10);
    expect(first.next.value).toEqual(20);
    expect(first.next.next.value).toEqual(30);
    expect(first._getTail()).toEqual(30);
    expect(first.next.next.next).toEqual(null);
    
    first.remove(second);
    
    expect(first._getSize()).toEqual(2);
    expect(first._getTail().value).toEqual(30);
    expect(first.value).toEqual(10);
    expect(first.next.value).toEqual(30);
    expect(first.next.next).toEqual(null);
  });

  test('throw error if node is not an instance of LinkedList', () => {
    let result = new LinkedList(5);
    let nodeNotInstance = {'value':100, 'next': null};

    expect(function () {result.remove(nodeNotInstance); } ).toThrow(TypeError);
  });

  test('remove this.next.next element', () => {
    let first = new LinkedList(10);
    let second = new LinkedList(20);
    let third = new LinkedList(30);

    first.append(second);
    first.append(third);

    expect(first.value).toEqual(10);
    expect(first.next.value).toEqual(20);
    expect(first.next.next.value).toEqual(30);
    expect(first._getSize()).toEqual(3);
    expect(first.next.next.next).toEqual(null);

    first.remove(third);

    expect(first._getSize()).toEqual(2);
    expect(first.value).toEqual(10);
    expect(first.next.value).toEqual(20);
    expect(first.next.next).toEqual(null);
  });
});
