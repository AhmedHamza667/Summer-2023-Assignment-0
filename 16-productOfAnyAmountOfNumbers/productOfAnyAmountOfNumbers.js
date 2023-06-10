function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
    if (args.length === 0) {
        return 0; // Edge case: no arguments provided, return 0
    }

    return args.reduce((accumulator, currentValue) => accumulator * currentValue);

}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;