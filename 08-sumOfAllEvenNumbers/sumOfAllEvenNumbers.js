function sumOfAllEvenNumbers(nums) {
  // Insert code here;
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            sum += nums[i];
        }
    }
    return sum;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;