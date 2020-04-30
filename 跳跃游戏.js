// https://leetcode-cn.com/problems/jump-game-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
  let length = nums.length
  let index = length - 1
  let count = 0
  if (length === 1) return 0
  for (let i = length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (nums[j] + j >= length - 1) {
        index = j
      }
    }
    i = index
    length = i + 1
    count++
  }
  return count
}


let nums = [0]
console.log(jump(nums))