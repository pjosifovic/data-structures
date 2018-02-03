'use strict';

const BinarySearchTree = require('../src/binary-search-tree');

// basic BST
// 
//      10
//     /  \
//    6    11
//   / \
//  4   7


describe('binary search tree node', () => {
  // add node
  test('add method should add value to BST and place in proper place', () => {      
    let tree = new BinarySearchTree(10);
    tree.add(6);
    tree.add(11);
    tree.add(4);
    tree.add(7);

    expect(tree.value).toEqual(10);
    expect(tree.left.value).toEqual(6);
    expect(tree.right.value).toEqual(11);
    expect(tree.left.left.value).toEqual(4);
    expect(tree.left.right.value).toEqual(7);
  });

  // find(value)
  test('find should return entered value if located in BST', () => {
    let tree = new BinarySearchTree(10);
    tree.add(6);
    tree.add(11);
    tree.add(4);
    tree.add(7);

    expect(tree.find(4).value).toEqual(4);
  });
  test('find should return null if value is not located in BST', () => {
    let tree = new BinarySearchTree(10);
    tree.add(6);
    tree.add(11);
    tree.add(4);
    tree.add(7);

    expect(tree.find(22)).toBeNull();
  });
  test('find should throw an error if entered value is not a number', () => {
    let tree = new BinarySearchTree(10);
    tree.add(19);
    let invalidValue = 'invalid';
    expect(() => tree.find(invalidValue)).toThrow();
  });

  // findMin()
  test('find min should return the smallest number inside bst', () => {
    let tree = new BinarySearchTree(10);
    tree.add(6);
    tree.add(11);
    tree.add(4);
    tree.add(7);

    expect(tree.findMin()).toEqual(4);
    tree.add(2);
    expect(tree.findMin()).toEqual(2);
  });
  test('findMin should throw an error in case tree is not valid BST tree', () => {
    let tree = null;
    expect(() => tree.findMin()).toThrow();
  });

  // findMax()
  test('find max should return the biggest number inside bst', () => {
    let tree = new BinarySearchTree(10);
    tree.add(6);
    tree.add(11);
    tree.add(4);
    tree.add(7);

    expect(tree.findMax()).toEqual(11);
    tree.add(21);
    expect(tree.findMax()).toEqual(21);
  });

  //remove node
  test('remove method should remove node from tree if value exist in tree', () => {
    let tree = new BinarySearchTree(10);
    tree.add(6);
    tree.add(11);
    tree.add(4);
    tree.add(7);

    // delete leaf
    tree.delete(4);
    expect(tree.value).toEqual(10);
    expect(tree.left.value).toEqual(6);
    expect(tree.right.value).toEqual(11);
    expect(tree.left.right.value).toEqual(7); 

    // delete root
    tree.delete(10);
    expect(tree.value).toEqual(11);
    expect(tree.left.value).toEqual(6);
    expect(tree.left.right.value).toEqual(7);
    
    // delete node with 2 children
    tree.add(14);
    tree.add(5);
    tree.add(2);
    expect(tree.value).toEqual(11);
    expect(tree.left.value).toEqual(6);
    expect(tree.right.value).toEqual(14);
    expect(tree.left.right.value).toEqual(7); 
    expect(tree.left.left.value).toEqual(5); 
    expect(tree.left.left.left.value).toEqual(2); 

    tree.delete(6);
    expect(tree.value).toEqual(11);
    expect(tree.left.value).toEqual(7);
    expect(tree.right.value).toEqual(14);
    expect(tree.left.left.value).toEqual(5); 
    expect(tree.left.left.left.value).toEqual(2); 
  });

  // findAllLeves
  test('find all leaves should return an array of all leaves in BST', () => {
    let tree = new BinarySearchTree(10);
    tree.add(6);
    tree.add(11);
    tree.add(4);
    tree.add(7);

    expect(tree.findAllLeaves()).toEqual([4, 7, 11]);
  });




});
