function minimumTotal(triangle) {
  // dp[i][j] = triangle[i][j] + min(dp[i+1][j], dp[i+1][j+1])
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j <= triangle[i].length - 1; j++) {
      triangle[i][j] = triangle[i][j] + Math.min(triangle[i+1][j], triangle[i+1][j+1])
    }
  }
  return triangle[0][0]
}

const triangle = [
  [2],
 [3,4],
[6,5,7],
[4,1,8,3]
] // 11 -> 2 + 3 + 5 + 1

console.log(minimumTotal(triangle))
