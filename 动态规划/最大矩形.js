// https://leetcode-cn.com/problems/maximal-rectangle/

function maximalRectangle(matrix) {
  let maxArea = 0
  let m = matrix.length - 1
  if (m === -1) {
    return 0
  }
  let n = matrix[0].length - 1
  if (n === -1) {
    return 0
  }
  let height = new Array(n + 1).fill(0)
  let left = new Array(n + 1).fill(0)
  let right = new Array(n + 1).fill(n)

  for (let i = 0; i <= m; i++) {
    let leftIndex = 0 
    let rightIndex = n
    for (let j = 0; j <= n; j++) {
      if (matrix[i][j] === '1') {
        height[j] = height[j] + 1
        left[j] = Math.max(leftIndex, left[j])
      } else {
        height[j] = 0
        left[j] = 0
        leftIndex = j + 1
      }
    }

    for (let j = n; j >=0; j--) {
      if (matrix[i][j] === '1') {
        right[j] = Math.min(rightIndex, right[j])
      } else {
        rightIndex = j - 1
        right[j] = n
      }
    }
    for (let j = 0; j <= n; j++) {
      maxArea = Math.max(maxArea, height[j] * (right[j] - left[j] + 1))
    }
  }

  return maxArea
}

let matrix = [
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
// let matrix = []

console.log(maximalRectangle(matrix))
