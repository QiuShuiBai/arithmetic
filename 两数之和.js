/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(arr, target) {
  let i = 0
  let num = 0
  while(true) {
    num = arr.indexOf(target - arr.shift())
    if (num !== -1) {
      return [i, i + num + 1]
    }
    i++
  }
}
console.log(twoSum([3, 8, 15, 1, 7], 9))