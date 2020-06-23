// 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

// 示例 1:

// 输入: 2
// 输出: 1
// 解释: 2 = 1 + 1, 1 × 1 = 1。
// 示例 2:

// 输入: 10
// 输出: 36
// 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
// 说明: 你可以假设 n 不小于 2 且不大于 58。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/integer-break
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function integerBreak(n) {
  if (n === 0) {
    return 0
  }
  // dp[n] = max(dp[n], dp[n-i] * dp[i])
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 1
  }
  if (n === 3) {
    return 2
  }
  if (n === 4) {
    return 4
  }
  let dp = [0, 1, 2, 3, 4]

  dp = dp.concat(new Array(n-4).fill(0))
  for (let i = 5; i <= n; i++) {
    for (let j = 1; j <= i / 2; j++) {
      if (i === 10) {
        console.log(j)
      }
      dp[i] = Math.max(dp[i], dp[i-j] * dp[j])
    }
  }
  return dp[n]
}

// const n = 2 // 1
const n = 10 // 36

console.log(integerBreak(n))
