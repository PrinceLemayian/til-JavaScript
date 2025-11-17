/* 
Since setInterval() keeps executing the provided function at the specified interval, you might want to stop it.
To do this, you have to use the clearInterval() method

 */

// clearInterval() takes the ID of the setInterval() you want to stop

/* 
This could be a variable you assign the interval to. One way to stop the interval is inside a setTimeout(),
 as that will stop the interval after a certain time 

 */

const intervalID = setInterval(() => {
  console.log("This will stop after 5 seconds");
}, 1000);

setTimeout(() => {
  clearInterval(intervalID);
}, 5000);

// You can also stop a timeout with the clearTimeout() method:

let timeoutID = setTimeout(() => {
  console.log("This will not run");
}, 5000);

clearTimeout(timeoutID);
/* 
With that code, the setTimeout() will not run at all.
So, a more elegant way to do it is through the DOM, by adding a click event listener to a button to stop the timeout
 */
