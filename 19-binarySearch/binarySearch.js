class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
        this.binarySearchRecursive(nums, target, 0, nums.length - 1);
        return this.flag;
    }

    binarySearchRecursive(nums, target, left, right) {
        if (left > right) {
            return;
        }

        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            this.flag = true;
            return;
        } else if (nums[mid] > target) {
            this.binarySearchRecursive(nums, target, left, mid - 1);
        } else {
            this.binarySearchRecursive(nums, target, mid + 1, right);
        }
    }
}
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;