/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const maskArray = new Array(nums.length + 1).fill(0)

    for (let i = 0; i < nums.length; i++) {
        maskArray[nums[i]] = 1
    }

    maskArray.shift()

    const disappearedNums = []

    for (let i = 0; i < maskArray.length; i++) {
        if (!maskArray[i]) disappearedNums.push(i + 1)
    }

    return disappearedNums
};