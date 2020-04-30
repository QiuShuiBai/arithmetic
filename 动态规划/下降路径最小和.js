// 给定一个方形整数数组 A，我们想要得到通过 A 的下降路径的最小和。

// 下降路径可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列。

//  

// 示例：

// 输入：[[1,2,3],[4,5,6],[7,8,9]]
// 输出：12
// 解释：
// 可能的下降路径有：
// [1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
// [2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
// [3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]
// 和最小的下降路径是 [1,4,7]，所以答案是 12。

//  

// 提示：

// 1 <= A.length == A[0].length <= 100
// -100 <= A[i][j] <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/minimum-falling-path-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function minFallingPathSum(A) {
  // dp[i][j] = Math.min(dp[i+1][j-1], dp[i+1][j+1]) + A[i][j]
  for (let i = A.length - 2; i >= 0; i--) {
    for (let j = 0, len = A[0].length; j < len; j++) {
      A[i][j] = A[i][j] + Math.min(A[i+1][j], A[i+1][j+1] || Infinity, A[i+1][j-1] || Infinity)
    }
  }
  let min = A[0][0]
  A[0].forEach(item => {
    if (item < min) min = item
  })
  return min
}
// const A = [[1,2,3],[4,5,6],[7,8,9]] // 12
const A = [[51,24],[-50,82]]
console.log(minFallingPathSum(A))

/**
 * 动态规划思路
 * 
 * 至底向上策略
 * 假设dp[i][j] 表示的是，在A[i][j]这个点后，还需要走的最小路径和(包括A[i][j]当前点的路径)
 * [
 *   [1, 2, 3]
 *   [4, 5, 6]
 *   [7, 8, 9]
 * ]
 * dp[2][1] 表示的在5这个位置 ，还需要走的最小路径和
 * 有三种情况：下降至左一列、下降至当前列、下降至右一列
 * 则 dp[2][1] = Math.min(dp[3][0], dp[3][1], dp[3][2]) + A[2][1]
 * 得 dp[i][j] = Math.min(dp[i][j], dp[i][j-1], dp[i][j+1]) + A[i][j]
 * 
 * 边界处理：
 * 在最下层时，dp[A.length-1][j] = A[A.length-1][j]。 原因是在最下层，只需要走当前点
 * 若 j === 0， 则dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + A[i][j]
 * 若 j === A[0].length-1， 则dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j-1]) + A[i][j]
 */