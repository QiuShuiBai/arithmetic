// https://leetcode-cn.com/problems/minimum-path-sum/

function minPathSum(grid) {
  let m = grid.length - 1
  let n = grid[0].length - 1
  
  
  let arr = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  arr[0][0] = grid[0][0]

  let i = 1
  while (i <= m) {
    arr[i][0] = grid[i][0] + arr[i - 1][0]
    i++
  }
  i = 1
  while (i <= n) {
    arr[0][i] = grid[0][i] + arr[0][i - 1]
    i++
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      arr[i][j] = Math.min(arr[i][j - 1], arr[i - 1][j]) + grid[i][j]
    }
  }

  return arr[m][n]
}

let grid = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]

// let grid = [[1,2,5],[3,2,1]]
console.log(minPathSum(grid))
