function fizzBuzz(start, end) {
  // Insert code here;
    var result = [];

    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }

    return result;
}

// Do not edit this line;
module.exports = fizzBuzz;