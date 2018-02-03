'use strict';

const BinarySearchTree = require('../src/binary-search-tree');

describe('binary search tree', () => {

  describe('binary search tree add node', () => {
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
  });


});