https://open.appacademy.io/learn/swe-in-person/career-quest/heaps-notes
https://open.appacademy.io/learn/swe-in-person/career-quest/heaps-lecture

## Intro to Heaps
We'll be going over binary heaps, a type of binary tree. A heap is a partially ordered dat structure, while a bst has full order. 

Heaps are balanced and complete.
sublinear complexity if balanced.
complete: will help us implement a heap. ( 0 to 4:43);

 ### Heap Insertion

  Always put it to the left. Insert as far left as possible.

<details>
<summary> Example Walkthrough </summary>

```
Array: [42, 32, 24, 100, 50, 27]
```

```
  42
```
Insert first number. Must go to the left.
```   
   42
 32 
``` 
Insert next number. Must go as far left as possible, and if not, same balance.
```   
   42
 32  24 
``` 

Insert next number
```   
    42
  32  24 
100
```

This is the first time we broke our heap rules. We have to put 100 in its proper place. We check if 100 > 32 . If so, we conduct a swap.

We start by bubbling up, swapping 100 with 32.
```
    42
  100 24
32
```
And bubble up again (swap)
```
    100
  42    24
32

```

We then insert 50.

```
    100
  42    24
32  50

```
Is 50 > 42? Yes, so we swap.

```
    100
  50    24
32  42

```

We then insert 27 as far left as possible

```
      100
  50      24
32  42  27

```

Then we bubble up.

```
      100
  50      27
32  42  24

```

</details>

In general, insert bottom most as far left, then check if the newly inserted node is greater than parent. If it is, swap it. It's a `sift up` method.

Since we're maintaining a complete tree, it will inherently be balanced.
Traveling up to the very top in the worst case will be `log(n)` (because it's balanced).

### Heap Deletion

  We are only interested in the max value. So we delete the max value of the tree, or remove the root.

  We then remove the root, and we must replace it. We use the right most node to keep the tree balanced. And then we sift down between the new root's children to find a replacement.

<details>
<summary>Example Walkthrough</summary>

Starting Heap
```
      100
  50      27
32  42  24

```

Remove top node

```
      ___
  50      27
32  42  24

```

Insert bottom right as new root.
```
      24
  50      27
32  42  

```

We violate a definition of heap, so now we must swap down. We swao 24 with the greater child.

```
      50
  24      27
32  42  
```

24 is still greater than it's children. So we swap again.

```
      50
  42      27
32  24  
```


</details>

So we remove the root, target the right most node, swap into the root, and sift it downwards.

In the same way, worst case scenario, we swap it down log(n). Which is again efficient.

