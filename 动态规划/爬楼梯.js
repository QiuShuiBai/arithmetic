// https://leetcode-cn.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  if (n <= 2) {
    return n
  }
  let arr = new Array(n).fill(0)
  arr[0] = 1
  arr[1] = 2
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n - 1]
}

let n = 9
console.log(climbStairs(n))