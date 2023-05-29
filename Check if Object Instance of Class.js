2618. Check if Object Instance of Class

Write a function that checks if a given value is an instance of a given class or superclass. 
For this problem, an object is considered an instance of a given class if that object 
has access to that class's methods.

There are no constraints on the data types that can be passed to the function. 
For example, the value or the class could be undefined.

 

Example 1:

Input: func = () => checkIfInstanceOf(new Date(), Date)
Output: true
Explanation: The object returned by the Date constructor is, by definition, an instance of Date.
Example 2:

Input: func = () => { class Animal {}; class Dog extends Animal {}; 
                     return checkIfInstanceOf(new Dog(), Animal); }
Output: true
Explanation:
class Animal {};
class Dog extends Animal {};
checkIfInstance(new Dog(), Animal); // true

Dog is a subclass of Animal. Therefore, 
a Dog object is an instance of both Dog and Animal.
Example 3:

Input: func = () => checkIfInstanceOf(Date, Date)
Output: false
Explanation: A date constructor cannot logically be an instance of itself.
Example 4:

Input: func = () => checkIfInstanceOf(5, Number)
Output: true
Explanation: 5 is a Number. Note that the "instanceof" keyword would return false. 
However, it is still considered an instance of Number because it accesses the 
Number methods. For example "toFixed()".


// Solution 



/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */

// Function to check if an object is an instance of a given class
const checkIfInstanceOf = (obj, classFunction) => {
  // Check if the object is null, undefined, or if classFunction is not a function
  if (obj===null || obj===undefined || typeof classFunction !== 'function') {
    return false; // Return false if any of the conditions are true
  }

  let prototype = Object.getPrototypeOf(obj); // Get the prototype of the object

  while (prototype) {
    // Iterate through the prototype chain of the object
    if (prototype === classFunction.prototype) {
      // Check if the current prototype matches the prototype of the given class
      return true; // Return true if a match is found
    }
    prototype = Object.getPrototypeOf(prototype); // Move to the next prototype in the chain
  }
  return false; // Return false if no match is found in the entire prototype chain
};



/* var checkIfInstanceOf = function (obj, classFunction) {
  // Check for null, undefined, or invalid classFunction
  if (obj === null || obj === undefined || typeof classFunction !== "function") {
    return false;
  }

  let inputObj = obj;
  // If obj is not an object, wrap it in an object using Object() constructor
  if (typeof obj !== "object") {
    inputObj = Object(obj); // Make sure it's an object so instanceof has direct access to the constructor function
  }
  return inputObj instanceof classFunction;
};
 
 */




