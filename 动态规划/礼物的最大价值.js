// 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

//  

// 示例 1:

// 输入: 
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// 输出: 12
// 解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
//  

// 提示：

// 0 < grid.length <= 200
// 0 < grid[0].length <= 200

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function maxValue(grid) {
  // dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]) + grid[i][j]
  let arr = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0))
  arr[0][0] = grid[0][0]
  for (let i = 1, len = arr.length; i < len; i++) {
    arr[i][0] = arr[i-1][0] + grid[i][0]
  }
  for (let i = 1, len = arr[0].length; i < len; i++) {
    arr[0][i] = arr[0][i-1] + grid[0][i]
  }
  for (let i = 1, iLen = arr.length; i < iLen; i++) {
    for (let j = 1, jLen = arr[0].length; j < jLen; j++) {
      arr[i][j] = Math.max(arr[i][j-1], arr[i-1][j]) + grid[i][j]
    }
  }
  return arr[arr.length -1][arr[0].length - 1]
}
const grid =[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
console.log(maxValue(grid))