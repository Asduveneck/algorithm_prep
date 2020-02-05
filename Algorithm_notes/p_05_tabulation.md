
What is tabulation?

  Tabulation means putting things into tables. This lets us break problems into many subproblems.

When do we use tabulation?
Iterative but non-recursive functions.

What datastructures do we use? Typically an array, which we'll refer to as a table.

#### Ex 1: Tabulating fibonacci Approach 1

We've defined fib so that fib(0) is 0, fib(1) = fib(2) - 1, And fib(n) = fib(n-1) + fib(n-2)

```js
function tabulatedFib(n) {
  // table: empty array of length n
  let table = new Array(n);

  // Base Cases
  table[0] = 0
  table[1] = 1;

  // We have the 0 and 1, time to find the fib numbers 2 to n.

  for (let i = 2; i <= n; i++ ) {
    table[i] = table[i-1] + table[i-2];
  }
  return table[n]
}

```

  We return one number, but along the way we calculated all sub-problems and stored them in our table.

**What's the complexity?**
We achieved O(n) time because we iterate once through 0 to n. What about our memory?
We also take O(n) memory.

#### Ex 2: Slightly modifying tabulation above for O(1) space

  We don't need a full table to solve this problem. We only needed the last two values.

```js
function fib(n) {

  if (n === 0) return 0;
  if (n === 1) return 1;

  // table values initially set to the first 2:
  let secLast = 0;
  let last = 1;

  for (let i = 2; i <= n; i++>) {
    // store (n-1) as temp
    let temp = last;
    // calculate n as n-1 + n-2, reassigning that to n-1
    last = last + secLast
    secondLast = temp; // update the n-2 to be the next n-1
  }
  return last;
}
```