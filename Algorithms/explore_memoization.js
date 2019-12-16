function benchmark(callback, name = `${callback+""}`) { // Convert callback to literal string if no name provided
  console.log(`${name}`);
  console.time("time");
  console.log(`\t${callback}`);
  console.timeEnd("time");
  console.log('\n');
}

function consoleHeader(message = "") {
  let newMessage = "";

  if(message.length % 2 === 0) {
    newMessage = message
  } else {
    newMessage = " " + message
  }

  let numSpaces = (80 - newMessage.length)/2 - 1
  console.log(`\n${"#".repeat(80)}`);
  console.log(`#${" ".repeat(numSpaces)}${newMessage}${" ".repeat(numSpaces)}#`);
  console.log(`${"#".repeat(80)}\n`);
}

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

consoleHeader("Non-Memoized Factorial");
benchmark(factorial(6), "factorial(6)");  // => 720, requires 6 calls
benchmark(factorial(6), "factorial(6) again");  // => 720, requires 6 calls
benchmark(factorial(6), "factorial(6) again");  // => 720, requires 6 calls
benchmark(factorial(6), "factorial(6) again");  // => 720, requires 6 calls
benchmark(factorial(5), "factorial(5)");  // => 120, requires 5 calls
benchmark(factorial(7), "factorial(7)");  // => 5040, requires 7 calls
