### Summary of common complexity class: From smallest use/growth rate (best performance) to largest growth rate/use (worst performance)

| type        | O(n)          | Summary | Example |
|-------------|---------------|--------------------------------------------------------------------------------------------------|---------------------------------------------|
| Constant    | 1             | No relation between input size and performance | Key into a JS object |
| Logarithmic | log(n)        | Typically log(2); we halve input each time | Binary Search |
| Linear      | n             | Touch each element once. Typically iterate through input without nested loops/recursion | Check if element exists in an array |
| Quasilinear / Log-Linear  | n log(n) | Combines linear and logarithmic behavior. Ex: Halve input each time, but also do some iterations | mergeSort, quickSort |
| Polynomial  | n<sup>a</sup> | Nested Loops typically.  | Find all pairs of elements in n<sup>2</sup> |
| Exponential | a<sup>n</sup> | Recursive Code where constant # of recursive calls per stack frame (c being # recursive calls) | Generate all subsets/combos of elements  |
| Factorial   | n!            | Worst case. Variable # of recursive calls per stack frame.  | Permutations |

* a are integers or other real numbers > 0. (typically > 1...?) 
* Polynomial and Exponential can seem confusing, but think of the growth rate as n approaches infinity. (Or take the first derivative.)
* Each subsequent step blows the previous in comparison.

### How do we talk about performance?
[Lecture Notes](https://open.appacademy.io/learn/swe-in-person/career-quest/big-o-notes)

  We talk about performance based upon the size of the input and emphasize or plan for the worst-case scenario. Big-O lets us directly talk about our code efficiency based on the size of the input.

  Most functions, the bottle-neck is at just one step. So we focus on the slowest step, and simplify the math terms.
    * Sums: Keep the term with the largest growth rate and drop the rest
    * Products: Drop factors that don't depend on input size

  Terminology and examples

| **n**         | **T(f)**     | **O(f)**         |
|---------------|--------------|------------------|
| Size of input | Unsimplified | Big-O Simplified |


#### Sum Simplification


| Unsimplified                         | Simplified         |
|--------------------------------------|--------------------|
| T( n<sup>3</sup> + n<sup>2</sup>+n ) | O( n<sup>3</sup> ) |
| T( 2<sup>n</sup> + n<sup>2</sup>)    | O( 2<sup>n</sup> ) |
| T( n + log(n) )                      | O( n )             |
| T( n! + 10<sup>n</sup> )             | O( n! )            |

#### Products Simplification

| Unsimplified           | Simplified          |
|------------------------|---------------------|
| T( 5 * n<sup>2</sup> ) | O( n<sup>2</sup> )  |
| T( 10<sup>6</sup> * n) | O( n )              |
| T( 5 n log(n) )        | O(n log(n) )        |
| T( 3 )                 | O( 1 )              |


### What functions will blow make these?

  You should pay attention to whether you have recursion, whether you halve/reduce size of the input, and whether you iterate.

  Recursive makes things expoential, halving or reducing your input each time makes it logarithmic, and iteration makes it linear.

