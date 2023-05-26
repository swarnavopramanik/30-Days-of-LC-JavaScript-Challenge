2677. Chunk Array

Given an array arr and a chunk size size, return a chunked array. A chunked array contains 
the original elements in arr, but consists of subarrays each of length size. The length of 
the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function.

 

Example 1:

Input: arr = [1,2,3,4,5], size = 1
Output: [[1],[2],[3],[4],[5]]
Explanation: The arr has been split into subarrays each with 1 element.
Example 2:

Input: arr = [1,9,6,3,2], size = 3
Output: [[1,9,6],[3,2]]
Explanation: The arr has been split into subarrays with 3 elements. However, 
  only two elements are left for the 2nd subarray.
Example 3:

Input: arr = [8,5,3,2,6], size = 6
Output: [[8,5,3,2,6]]
Explanation: Size is greater than arr.length thus all elements are in the first subarray.
Example 4:

Input: arr = [], size = 1
Output: []
Explanation: There are no elements to be chunked so an empty array is returned.

// Soluition 

/**
 * @param {Array} arr - The array to be chunked.
 * @param {number} size - The size of each chunk.
 * @return {Array[]} - An array of arrays, where each inner array is a chunk of the original array.
 */

// Approach 1

/* 

function chunk(arr, size) {
  // Check if the size is positive.
  if (size <= 0) {
    throw new Error("Size must be a positive number");
  }

  // Create an empty array to store the chunks.
  var chunkedArray = [];

  // Iterate over the array, and for each element, add it to a new chunk.
  for (var i = 0; i < arr.length; i += size) {
    // Get the chunk of the array from the current index to the current index + size.
    var chunk = arr.slice(i, Math.min(arr.length, i + size));

    // Add the chunk to the array of chunks.
    chunkedArray.push(chunk);
  }

  // Return the array of chunks.
  return chunkedArray;
}
 
 */

// Approach 2 

var chunk = function(arr, size) {
  var chunkedArray = [];
  var index = 0;

  while (index < arr.length) {
    chunkedArray.push(arr.slice(index, index + size));
    index += size;
  }

  return chunkedArray;
}


 
