2621. Sleep

Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

 

Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
 

// Solution 

/**
 * @param {number} millis
 */


async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}


/* async function sleep(millis) {
      let T=Date.now();
      while(Date.now()-T+1<millis)
      {   
            //do nothing
      }
      return Promise.resolve({});
} */


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

