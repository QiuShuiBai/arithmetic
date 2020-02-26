// https://leetcode-cn.com/problems/unique-paths-ii/

function uniquePathsWithObstacles(obstacleGrid) {
  let m = obstacleGrid.length - 1
  let n = obstacleGrid[0].length - 1
  
  
  let arr = new Array(m + 1).fill(1).map(() => new Array(n + 1).fill(1))
  
  let i = 1
  while (i <= m) {
    if (obstacleGrid[i][0] === 1) {
      arr[i][0] = 0
    } else {
      arr[i][0] = arr[i - 1][0]
    }
    i++
  }
  i = 1
  while (i <= n) {
    if (obstacleGrid[0][i] === 1) {
      arr[0][i] = 0
    } else {
      arr[0][i] = arr[0][i]
    }
    i++
  }
  console.log(arr)
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (obstacleGrid[i][j] === 1) {
        arr[i][j] = 0
      } else {
        arr[i][j] = arr[i - 1][j] + arr[i][j-1]
      }
    }
  }
  return arr[m][n]
}

// let obstacleGrid = [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]

let obstacleGrid = [
  [0, 1, 0]
]
console.log(uniquePathsWithObstacles(obstacleGrid))
