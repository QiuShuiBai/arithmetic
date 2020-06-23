// 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

// 示例 1:

// 输入: n = 12
// 输出: 3 
// 解释: 12 = 4 + 4 + 4.
// 示例 2:

// 输入: n = 13
// 输出: 2
// 解释: 13 = 4 + 9.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/perfect-squares
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function numSquares(n) {
  // dp[n] = min( (dp[n-k] + dp[k])... )
  const dp = new Array(n + 1).fill(n)
  for (let i = 0; i <= n; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      dp[i] = 1
      continue
    }
    const end = Math.floor(Math.sqrt(i))
    for (let j = 0; j <= end; j++) {
      const temp = j * j
      dp[i] = Math.min(dp[i-temp] + dp[temp], dp[i])
    }
  }
  // console.log(dp)
  return dp[n]
}

const n = 12 // 3
// const n = 13 // 2
// const n = 18 // 2
console.log(numSquares(n))
