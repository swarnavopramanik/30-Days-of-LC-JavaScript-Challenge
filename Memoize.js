2623. Memoize

Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 

Example 1:

Input
"sum"
["call","call","getCallCount","call","getCallCount"]
[[2,2],[2,2],[],[1,2],[]]
Output
[4,4,1,3,2]

Explanation
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // Returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // Returns 4. However sum() was not called because the same inputs were seen before.
// Total call count: 1
memoizedSum(1, 2); // Returns 3. sum() was called as (1, 2) was not seen before.
// Total call count: 2
Example 2:

Input
"factorial"
["call","call","call","getCallCount","call","getCallCount"]
[[2],[3],[2],[],[3],[]]
Output
[2,6,2,2,6,2]

Explanation
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
memoFactorial(2); // Returns 2.
memoFactorial(3); // Returns 6.
memoFactorial(2); // Returns 2. However factorial was not called because 2 was seen before.
// Total call count: 2
memoFactorial(3); // Returns 6. However factorial was not called because 3 was seen before.
// Total call count: 2
Example 3:

Input
"fib"
["call","getCallCount"]
[[5],[]]
Output
[8,1]

Explanation
fib(5) = 8
// Total call count: 1

// Solution 

/**
 * @param {Function} fn
 * //  This means we will be getting a function in arguments
 */



 // Approach 1 Runtime: 89 ms 


/* function memoize(fn) {
    let cache = {}; // local variable to store data
    return function(...args) {       
        let cacheKey = args.join("#").toString(); // creating a uniquie key with the arguments
        let cacheValue = cache[cacheKey]; // trying to find the unique key in local cache, if it's not there, it will return `undefined`
        
        if( cacheValue != undefined ){ 
            // coming here means we have the key in our cache, we will just return it.
            return cacheValue;
        }
        // Coming here means the value is missing in cache, hence we will calculate the function, store it in our cache and return the value.
        return cache[cacheKey] = fn(...args);
    }
} */



 // Approach 2 Runtime: 87 ms
 
 /* function memoize(fn) {
    const cache = {};
    return function(...args) {
      const key = String(args);
      if (key in cache) {
        return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
} */



// Approach 3 Runtime: 82 ms

function memoize(fn) {
    
   const cache = {};
  
   return function(...args) {
    const key = JSON.stringify(args);
    
    if (key in cache) {
      return cache[key];
    }
    
    const result = fn.apply(this, args);
    cache[key] = result;
    
    return result;
  }
  
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
 
