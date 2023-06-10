function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
    var minValue = Math.min(...nums);
    var maxValue = Math.max(...nums);

    return minValue + maxValue;

}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;