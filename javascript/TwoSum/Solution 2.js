/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if ((nums[i] + nums[j]) === target) return [i, j]
//         }
//     }
// };

var twoSum = function(nums, target) {
    const map = {}

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map[complement] >= 0) {
            return [map[complement], i]
        } else {
            map[nums[i]] = i
        }
    }
};