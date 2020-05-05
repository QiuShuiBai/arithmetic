// 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。

// 示例 1:

// 输入:
// A: [1,2,3,2,1]
// B: [3,2,1,4,7]
// 输出: 3
// 解释: 
// 长度最长的公共子数组是 [3, 2, 1]。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var findLength = function(A, B) {
  if (A.length === 0 || B.length === 0) return 0
  const dp = new Array(A.length).fill(0).map(() => new Array(B.length).fill(0))
  let max = 0
  for (let i = 0, iLen = A.length; i < iLen; i++) {
    for (let j = 0, jLen = B.length; j < jLen; j++) {
      if (A[i] === B[j]) {
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = dp[i-1][j-1] + 1
        }
        max = Math.max(max, dp[i][j])
      } else {
        dp[i][j] = 0
      }
    }
  }
  return max
};

const A = [1,2,3,2,1], B = [3,2,1,4,7] // 3
console.log(findLength(A, B))

/**
 * 设dp[i][j] 为以 A[i] B[j]结尾的数组的最长子数组长度
 * 若 A[i] === B[j] 则 dp[i][j] = dp[i-1][j-1] + 1
 * 若 A[i] !== B[j] 则 dp[i][j] = 0
*/
