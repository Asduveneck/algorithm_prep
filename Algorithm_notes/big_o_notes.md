### Summary of Order: From smallest use/growth rate to largest

| type        | O(n)          |
|-------------|---------------|
| Constant    | 1             |
| Logarithmic | log(n)        |
| Linear      | n             |
| Log-Linear  | n log(n)      |
| Polynomial  | n<sup>a</sup> |
| Exponential | a<sup>n</sup> |
| Factorial   | n!            |

* a are integers or other real numbers > 0. (typically > 1...?) 
* Polynomial and Exponential can seem confusing, but think of the growth rate as n approaches infinity. (Or take the first derivative.)
* Each subsequent step blows the previous in comparison.

### How do we talk about performance?
[Lecture Notes](https://open.appacademy.io/learn/swe-in-person/career-quest/big-o-notes)

  We talk about performance based upon the size of the input and emphasize or plan for the worst-case scenario.

  Most functions, the bottle-neck is at just one step. So we focus on the slowest step, and simplify the math terms. 

### What functions will blow make these?
