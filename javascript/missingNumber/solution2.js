var missingNumber = function(nums) {
    let finalSum = 0
    let accmulateSum = 0

    for (let i = 0; i < nums.length; i++) {
        accmulateSum += nums[i]
        finalSum = finalSum + (i + 1)
    }

    return finalSum - accmulateSum
};

console.log(missingNumber([0,1,3,4,5]))