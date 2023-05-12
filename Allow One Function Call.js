2666. Allow One Function Call

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
 

Example 1:

Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
Example 2:

Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
Output: [{"calls":1,"value":140}]
Explanation:
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called
 

// Solution

/**
 * @param {Function} fn
 * @return {Function}
 */

 
 // Approach 1
// give fn as an input


var once = function(fn) {
    // for tracking like function is called or not
    let isCalled = false;
    // we have to return a function
    return function(...args){
        // if function is called , we have to return undefined
        if(isCalled) return undefined;
        // change is called to true
        isCalled = !isCalled;
        // it will also return a function (otherwise)
        return fn(...args);
    }
};


 // Approach 2 

/* var once = function(fn) {
    let ans = true;
    return function(...args){
        if (ans) {
            ans = false;
            return fn(...args);
        }
    }
};


 */


/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
