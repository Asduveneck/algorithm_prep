// Indirect functions used for console logging and benchmarking
// const {performance} = require('perf_hooks');

/* Previously:

function benchmark(callback, name = `${callback+""}`) { // Convert callback to literal string if no name provided
  console.log(`${name}`);
  console.time("time");
  console.log(`\t${callback}`);
  console.timeEnd("time");
  console.log('\n');
}

function benchmark(callback, name = `${callback+""}`) {
  console.log(`${name}`);
  let t0 = performance.now();
  let result = callback;
  let t1 = performance.now();
  console.log(`\t${result}`);
  console.log(`time: ${t1 - t0}ms`);
  console.log('\n');
};

function benchmark(callback, name = `${callback + ""}`) {
  console.log(`${name}`);
  let t0 = performance.now();
  let result = callback;
  let t1 = performance.now();
  console.log(`\t${result}`);
  console.log(`time: ${t1 - t0}ms`);
  console.log('\n');
};

// Not as clean output and harder to follow... and inaccurate
function benchmark(callback, name = `${callback+""}`) { // Convert callback to literal string if no name provided
  console.log(`${name}`);
  console.time(`${name}`);
  console.timeLog(`${name}`, callback);
  console.timeEnd(`${name}`);
  console.log('\n');
}
*/

function benchmark(callback, name = `${callback + ""}`) { // Convert callback to literal string if no name provided
  console.log(`${name}`);
  console.time("time");
  console.log(`\t${callback()}`);
  console.timeEnd("time");
  console.log('\n');
}

function consoleHeader(message = "") {
  let newMessage = ""; // goal: always have even # of digits

  if(message.length % 2 === 0) { 
    newMessage = message
  } else { // If there is an odd # of characters in message, add ' ' in front 
    newMessage = " " + message
  } 

  let numSpaces = (80 - newMessage.length)/2 - 1
  console.log(`\n${"#".repeat(80)}`);
  console.log(`#${" ".repeat(numSpaces)}${newMessage}${" ".repeat(numSpaces)}#`);
  console.log(`${"#".repeat(80)}\n`);
}

// NON Memoized factorial function

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
// benchmarking
// consoleHeader("Non-Memoized Factorial");
// benchmark(factorial(6), "factorial(6)");  // => 720, requires 6 calls
// benchmark(factorial(6), "factorial(6) again");  // => 720, requires 6 calls
// benchmark(factorial(6), "factorial(6) again");  // => 720, requires 6 calls
// benchmark(factorial(6), "factorial(6) again");  // => 720, requires 6 calls
// benchmark(factorial(5), "factorial(5)");  // => 120, requires 5 calls
// benchmark(factorial(7), "factorial(7)");  // => 5040, requires 7 calls

// Memoized factorial function
  let memo = {} // object to store prior results

function memFactorial(n) {
  // base cases:
  if (n in memo) return memo[n]; // fetch stored results in memo if already there
  if (n === 1) return 1;

  // Non base cases: Store into memo, then retrieve from memo
  memo[n] = n * memFactorial(n - 1);
  return memo[n] // O(1) in JS
}
// consoleHeader("Memoized Factorial");
// benchmark(memFactorial(6), "memoized factorial(6)");       // => 720, requires 6 calls
// benchmark(memFactorial(6), "memoized factorial(6) AGAIN 1");       // => 720, requires 1 call
// benchmark(memFactorial(6), "memoized factorial(6) AGAIN 2");       // => 720, requires 1 call
// benchmark(memFactorial(5), "memoized factorial(5)");       // => 120, requires 1 call
// benchmark(memFactorial(7), "memoized factorial(7)");       // => 5040, requires 2 calls

memo;   // => { '2': 2, '3': 6, '4': 24, '5': 120, '6': 720, '7': 5040 }


// ########################################

// Standard Fibonacci

function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

consoleHeader("Fibonacci");
benchmark(() => fib(6), "fib(6) Rep 1");
benchmark(() => fib(6), "fib(6) Rep 2");
benchmark(() => fib(30), "fib(30) Rep 1");
benchmark(() => fib(30), "fib(30) Rep 2");
benchmark(() => fib(45), "fib(45) Rep 1");
benchmark(() => fib(45), "fib(45) Rep 2");



// Improved Memoized Fibonacci




/*
################################################################################
#                          Improved Memoized Fibonacci                         #
################################################################################
*/

// consoleHeader("Improved Memoized Fibonacci");
// We avoid a global variable by defining memo within the function and passing it down
function memFib(n, memo = {}) {
  if (n in memo) return memo[n];
  // base case:
  if (n === 1 || n === 2) return 1;

  memo[n] = memFib(n - 1, memo) + memFib(n - 2, memo);
  return memo[n];
}

consoleHeader("Memoized Fib");
benchmark(() => memFib(6), "memFib(6) Rep 1");
benchmark(() => memFib(6), "memFib(6) Rep 2");
benchmark(() => memFib(30), "memFib(30) Rep 1");
benchmark(() => memFib(30), "memFib(30) Rep 2");
benchmark(() => memFib(45), "memFib(45) Rep 1");
benchmark(() => memFib(45), "memFib(45) Rep 2");