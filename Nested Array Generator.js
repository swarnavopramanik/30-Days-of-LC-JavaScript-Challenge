2649. Nested Array Generator

Given a multi-dimensional array of integers, return a generator object 
which yields integers in the same order as inorder traversal.

A multi-dimensional array is a recursive data structure that contains 
both integers and other multi-dimensional arrays.

inorder traversal iterates over each array from left to right, yielding any integers it 
encounters or applying inorder traversal to any arrays it encounters.

 

Example 1:

Input: arr = [[[6]],[1,3],[]]
Output: [6,1,3]
Explanation:
const generator = inorderTraversal(arr);
generator.next().value; // 6
generator.next().value; // 1
generator.next().value; // 3
generator.next().done; // true
Example 2:

Input: arr = []
Output: []
Explanation: There are no integers so the generator doesn't yield anything.

// Solution 

/**
 * @param {Array} arr
 * @return {Generator}
 */

var inorderTraversal = function*(arr) {
    const stack = [arr]; // Initialize a stack with the input array

  while (stack.length) {
    const element = stack.pop(); // Pop the last element from the stack

    if (Array.isArray(element)) {
      // If the element is an array, iterate over its elements in reverse order
      for (let i = element.length - 1; i >= 0; i--) {
        stack.push(element[i]); // Push each element to the stack
      }
    } else {
      yield element; // Yield the integer element
    }
  }
};


/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
 

