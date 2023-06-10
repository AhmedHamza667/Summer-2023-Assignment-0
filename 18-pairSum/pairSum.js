function pairSum(nums, target) {
  // Insert code here;
    const complementSet = new Set();

    for (const num of nums) {
        const complement = target - num;
        if (complementSet.has(num)) {
            return true; // Found a pair that adds up to the target
        }
        complementSet.add(complement);
    }

    return false;
}

// Do not edit this line;
module.exports = pairSum;