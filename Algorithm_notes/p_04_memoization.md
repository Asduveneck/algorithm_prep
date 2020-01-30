### Memoization

  What is memoization? It follows one paradigm of functional programming; 1-1 input to output ratio. Thus, we can store results of a function so we can use it later on. This way, if we hit a recursive case where we've already calculated that value, we don't have to duplicate our results again.

  We'll use memoization for recursion.

I'll be working out of `../Algorithms/explore_memoization.js` and comparing code here.

#### Ex 1: Non-memoized Factorial
We have a non-memoized version of our factorial here:

```js
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
```

If we run our benchmarks, we get stuff like: 

```js
consoleHeader("Non-Memoized Factorial");
/*
################################################################################
#                            Non-Memoized Factorial                            #
################################################################################
*/
benchmark(factorial(6), "factorial(6)");  // => 720, requires 6 calls, time: 0.246ms
benchmark(factorial(6), "factorial(6) again");  // => 720, requires 6 calls, time: 0.043ms
factorial(5) // 120, 5 calls, time: 0.023ms
factorial(7) // 5040, time: 0.059ms

```
  Basically, it's still a little bit slow. Running factorial(6), 5, then 7 all take about .02 - .06 seconds.

  Memoization will let us speed things up the seond time.

```js

let memo = {} // object to store prior results
function memFactorial(n) {
  // base cases:
  if (n in memo) return memo[n]; // fetch stored results in memo if already there
  if (n === 1) return 1;

  // Non base cases: Store into memo, then retrieve from memo
  memo[n] = n * memFactorial(n - 1);
  return memo[n] // O(1) in JS
}

/*
################################################################################
#                              Memoized Factorial                              #
################################################################################
*/

benchmark(memFactorial(6), "memoized factorial(6)");       // => 720, requires 6 calls, time: 0.975ms
benchmark(memFactorial(6), "memoized factorial(6) AGAIN 1");       // => 720, requires 1 call, time: 0.070ms
benchmark(memFactorial(6), "memoized factorial(6) AGAIN 2");       // => 720, requires 1 call, time: 0.057ms
benchmark(memFactorial(5), "memoized factorial(5)");       // => 120, requires 1 call, time: 0.097ms
benchmark(memFactorial(7), "memoized factorial(7)");       // => 5040, requires 2 calls, time: 0.052ms

```

  We have done some slight improvements. However, we haven't reduced our function by an order of magnitude. It was originally O(n), and still is. Additionally, we have a global variable `memo`, so we could do better.

```js
/*
################################################################################
#                          Improved Memoized Fibonacci                         #
################################################################################
*/
```

What is the time complexity of the standard fibonacci sequence?

Fibonacci:
```js
function fib(n) {
    if (n === 1 || n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

fib(6);     // => 8
```

If we view this as a tree:

![fib tree](Images/fib_tree.png)


  We can see that there are roughly 2 children per node. f(6) at the top has 2 nodes, and each of the children below that has 2 children as well. So this is roughly 2^6 or 2^n in run time; we have an exponential time complexity!

Where can we shave off some duplications?

![fib tree with subtrees colored](Images/fib_tree_dups_colored.png)

We can avoid going over duplicate trees via memoization.

Code:

### Memoization video lectures
