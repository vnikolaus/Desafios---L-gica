    // const nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
    // const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], k = 3
    // const nums = [1,1,1,0,0,0,1,1,1,1], k = 1
    const nums = [0, 0, 1, 1, 1, 0, 0 ], k = 3
    function longestBinary(nums, k) {
        let tmp = 0
        for (const num of nums) {
            if (num === 0) k--;
            if (k < 0) {
                if (nums[tmp] === 0) k++;
                tmp++
            }
        }
        return nums.length - tmp;
    }
    // longestBinary(nums, k)
    console.log("longestBinary(nums, k): ", longestBinary(nums, k));