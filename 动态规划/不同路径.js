// https://leetcode-cn.com/problems/unique-paths/

function uniquePaths(m, n) {
  let arr = new Array(m).fill(1).map(() => new Array(n).fill(1))
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j-1]
    }
  }
  return arr[m - 1][n - 1]
}

console.log(uniquePaths(7, 3))
