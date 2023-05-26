2633. Convert Object to JSON String

Given an object, return a valid JSON string of that object. You may assume the object only inludes 
strings, integers, arrays, objects, booleans, and null. The returned string should not include extra spaces. 
The order of keys should be the same as the order returned by Object.keys().

Please solve it without using the built-in JSON.stringify method.

 

Example 1:

Input: object = {"y":1,"x":2}
Output: {"y":1,"x":2}
Explanation: 
Return the JSON representation.
Note that the order of keys should be the same as the order returned by Object.keys().
Example 2:

Input: object = {"a":"str","b":-12,"c":true,"d":null}
Output: {"a":"str","b":-12,"c":true,"d":null}
Explanation:
The primitives of JSON are strings, numbers, booleans, and null.
Example 3:

Input: object = {"key":{"a":1,"b":[{},null,"Hello"]}}
Output: {"key":{"a":1,"b":[{},null,"Hello"]}}
Explanation:
Objects and arrays can include other objects and arrays.
Example 4:

Input: object = true
Output: true
Explanation:
Primitive types are valid inputs.

// Solution 

/* var jsonStringify = function(object) {
    const objType = typeof(object);
    const isArray = Array.isArray(object);
    if(objType !== "object"){
      if(objType === "string") return `"${object}"`;
      return object.toString();
    } 
    if(object === null) return 'null';
    if(isArray){
      let result = "[";
      result += object.map((item) => jsonStringify(item)).join(',');
      result += "]";
      return result;
    }
    let result = "{";
    const keys = Object.keys(object);
    result += keys.map(key => `"${key}":${jsonStringify(object[key])}`).join(',');
    result += "}";
    return result;
}; */

var jsonStringify = function(object) {
  if (object === null) {
    return 'null';
  }
  if (typeof object === 'string') {
    // return the string value surrounded by double quotes.
    return '"' + object + '"';
  }
  if (typeof object === 'number' || typeof object === 'boolean') {
    // return its string representation.
    return String(object);
  }
  if (Array.isArray(object)) {
    // Recursively convert each item to a JSON string and join them with commas.
    const items = object.map(item => jsonStringify(item)).join(',');
    return '[' + items + ']';
  }
  // Recursively convert each value to a JSON string and pair it with the corresponding key.
  if (typeof object === 'object') {
    const keys = Object.keys(object);
    const items = keys.map(key => '"' + key + '":' + jsonStringify(object[key]));
    return '{' + items.join(',') + '}';
  }
};


 
