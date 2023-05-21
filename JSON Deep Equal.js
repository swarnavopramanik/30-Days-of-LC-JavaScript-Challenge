2628. JSON Deep Equal

Given two objects o1 and o2, check if they are deeply equal.

For two objects to be deeply equal, they must contain the same keys, and the associated values must also be 
deeply equal. Two objects are also considered deeply equal if they pass the === equality check.

You may assume both objects are the output of JSON.parse. In other words, they are valid JSON.

Please solve it without using lodash's _.isEqual() function.

 

Example 1:

Input: o1 = {"x":1,"y":2}, o2 = {"x":1,"y":2}
Output: true
Explanation: The keys and values match exactly.
Example 2:

Input: o1 = {"y":2,"x":1}, o2 = {"x":1,"y":2}
Output: true
Explanation: Although the keys are in a different order, they still match exactly.
Example 3:

Input: o1 = {"x":null,"L":[1,2,3]}, o2 = {"x":null,"L":["1","2","3"]}
Output: false
Explanation: The array of numbers is different from the array of strings.
Example 4:

Input: o1 = true, o2 = false
Output: false
Explanation: true !== false
 

// Solution 

/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */


// Approach 1

var areDeeplyEqual = function(o1, o2) {
    const type1 = typeof(o1);
    const type2 = typeof(o2);
    const isArray1 = Array.isArray(o1);
    const isArray2 = Array.isArray(o2);
    // if both params are different type then return false
    if((type1 !== type2) || (isArray1 !== isArray2)) return false;
    // if params are primitive then check equality
    if((type1 !== 'object') || (o1 === null)) return o1 === o2;
    // if params are arrays
    if(isArray1){
      if(o1.length !== o2.length) return false;
      for(let i=0;i<o1.length;i++){
        if(!areDeeplyEqual(o1[i],o2[i])) return false;
      }
    }
    // if params are array
    const key1 = Object.keys(o1);
    const key2 = Object.keys(o2);
    if(key1.length !== key2.length) return false;
    for(let i=0;i<key1.length;i++){
      if(!areDeeplyEqual(o1[key1[i]],o2[key1[i]])) return false;
    }
    return true;
};


// Approach 2 

/* function areDeeplyEqual(o1, o2) {
  // Check if types of o1 and o2 are different
  if (typeof o1 !== typeof o2) {
    return false; // Return false if types are different
  }

  // Check if o1 and o2 are non-object types or null
  if (typeof o1 !== 'object' || o1 === null || o2 === null) {
    return o1 === o2; // Compare o1 and o2 directly and return the result
  }

  // Check if both o1 and o2 are arrays
  if (Array.isArray(o1) && Array.isArray(o2)) {
    // Check if arrays have different lengths
    if (o1.length !== o2.length) {
      return false; // Return false if lengths are different
    }

    // Iterate over each element of the arrays
    for (let i = 0; i < o1.length; i++) {
      // Recursively call areDeeplyEqual for each element
      if (!areDeeplyEqual(o1[i], o2[i])) {
        return false; // Return false if any element is not deeply equal
      }
    }

    return true; // Return true if all elements are deeply equal
  }

  // Check if either o1 or o2 is an array (not both)
  if (Array.isArray(o1) || Array.isArray(o2)) {
    return false; // Return false if one is an array and the other is not
  }

  // Get the keys of o1 and o2
  const keys1 = Object.keys(o1);
  const keys2 = Object.keys(o2);

  // Check if objects have different number of keys
  if (keys1.length !== keys2.length) {
    return false; // Return false if number of keys is different
  }

  // Iterate over each key of o1
  for (const key of keys1) {
    // Recursively call areDeeplyEqual for each property value
    if (!areDeeplyEqual(o1[key], o2[key])) {
      return false; // Return false if any property value is not deeply equal
    }
  }

  return true; // Return true if all properties are deeply equal
} */





