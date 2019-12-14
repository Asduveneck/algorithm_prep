// Testing timeEnd... is it accurate? IDK because I am trying to evaluate a promise... but not doing it well yet.
// console.time("");
//   setTimeout(function () { alert("Hello"); }, 3000);
// console.timeEnd("")

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

function benchmark(callback, name = `${callback+""}`) { // Convert callback to literal string if no name provided
  console.log(`${name}`);
  console.time("time");
  console.log(`\t${callback}`);
  console.timeEnd("time");
  console.log('\n');
}
console.log('\n');
console.log("#".repeat(80));
console.log("Factorials without memo");
console.log("#".repeat(80));
console.log('\n');

benchmark(factorial(6), "factorial(6)")  // => 720, requires 6 calls
benchmark(factorial(6), "factorial(6) again")  // => 720, requires 6 calls
benchmark(factorial(5), "factorial(5)")  // => 120, requires 5 calls
benchmark(factorial(7), "factorial(7)")  // => 5040, requires 7 calls
