'use strict';

const BinaryTree = require('../src/binary-tree');

let one, two, three, four, five;
const basicTree = () => {
  one = new BinaryTree(1);
  two = new BinaryTree(2);
  three = new BinaryTree(3);
  four = new BinaryTree(4);
  five = new BinaryTree(5);

  one.left = two;
  one.right = three;
  two.left = four;
  two.right = five;
};

describe('binary tree', () => {
  beforeEach(basicTree);

  describe('binary tree find method', () => {
    // find method
    test('find method should return if entered value exist in tree', () => {      
      expect(one.find(2)).toEqual(two);
      expect(one.find(3)).toEqual(three);
      expect(one.find(4)).toEqual(four);
    });
    test('should return undefined if value doesnt exist in tree', () => {
      expect(one.find(8)).toEqual(null);
    });
    test('should throw an error if value is not a number', () => {
      expect(() => one.find('test')).toThrow();
    });
    // toString
    test('should return string of node values in pre-order traveral', () => {      
      let str = '';            
      expect(one.toString(str)).toEqual('12453');
    });
    // toArray
    test.only('toArray should return an array of all tree node values', () => {
      let arr = [];
      expect(one.toArray(arr)).toEqual([1, 2, 4, 5, 3]);
    });
  });
  



});