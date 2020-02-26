// https://leetcode-cn.com/problems/maximum-subarray/

function maxSubArray(nums) {
  let max = nums[0]
  let present = nums[0]
  for (let i = 1, len = nums.length; i < len; i++) {
    present = Math.max(present + nums[i], nums[i])
    max = Math.max(max, present)
  }
  return max
}
let nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums))
// f(x) = max(f(x - 1) + nums[x], nums[x])