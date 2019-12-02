### Time Complexity: O(n(log(n)))

`n` is the length of our starting array.

The `n` complexity comes from iterating through the array each time we run `merge()`. We go through the elements and compare them each time.
The `log(n)` comes from the mergeSort itself where we split it each time.

### Space Complexity: O(n)

Why is it so large? We have to store each subarray in memory. So each element will need ot be stored somewhere.