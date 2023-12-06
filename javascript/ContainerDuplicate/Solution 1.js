/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set()

    for (let i = 0; i < nums.length; i++) {
        const digit = nums[i]
        if (set.has(digit)) return true
        set.add(digit)
    }

    return false
};