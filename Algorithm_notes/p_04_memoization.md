### Memoization

  What is memoization? It follows one paradigm of functional programming; 1-1 input to output ratio. Thus, we can store results of a function so we can use it later on. This way, if we hit a recursive case where we've already calculated that value, we don't have to duplicate our results again.

  We'll use memoization for recursion.

I'll be working out of `../Algorithms/explore_memoization.js` and comparing code here.

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

### Memoization video lectures