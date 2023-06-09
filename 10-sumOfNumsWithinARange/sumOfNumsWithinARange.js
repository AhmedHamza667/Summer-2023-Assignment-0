function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
    var sum = 0;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] >= start && nums[i] <= end) {
            sum += nums[i];
        }
    }
    return sum;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;