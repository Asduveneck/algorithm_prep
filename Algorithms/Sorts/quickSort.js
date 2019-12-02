// quickSort splits things left and right based upon a pivot value

// Splitting the array in half based upon value
function partition(arr, piv) {
  let left = [];
  let right = [];

  arr.forEach(ele => {
    if (ele < piv) { //If value is less than pivot
      left.push(ele)
    } else { // IF value > OR = to pivot. NEEDED IF WE HAVE A VALUE = PIVOT
      right.push(ele)
    }
  });
  return [left, right]; // => [ leftArray, rightArray ]
}

// Another partition
function part(arr, piv) {
  let left = arr.filter(ele => ele < piv) // runs through array twice, so 2n...
  let right = arr.filter(ele => ele >= piv)
  return [left, right];
}

