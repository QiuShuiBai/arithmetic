// 给你一个 m * n 的矩阵 mat 和一个整数 K ，请你返回一个矩阵 answer ，其中每个 answer[i][j] 是所有满足下述条件的元素 mat[r][c] 的和： 

// i - K <= r <= i + K, j - K <= c <= j + K 
// (r, c) 在矩阵内。
//  

// 示例 1：

// 输入：mat = [[1,2,3],[4,5,6],[7,8,9]], K = 1
// 输出：[[12,21,16],[27,45,33],[24,39,28]]
// 示例 2：

// 输入：mat = [[1,2,3],[4,5,6],[7,8,9]], K = 2
// 输出：[[45,45,45],[45,45,45],[45,45,45]]
//  

// 提示：

// m == mat.length
// n == mat[i].length
// 1 <= m, n, K <= 100
// 1 <= mat[i][j] <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/matrix-block-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function matrixBlockSum(mat, K) {
  const sumArr = new Array(mat.length+1).fill(0).map(() => new Array(mat[0].length+1).fill(0))

  for (let i = 1; i <= mat.length; i++) {
    for (let j = 1; j <= mat[0].length; j++) {
      sumArr[i][j] = sumArr[i-1][j] + sumArr[i][j-1] - sumArr[i-1][j-1] + mat[i-1][j-1]
    }
  }
  // console.log(sumArr)
  const answer = new Array(mat.length).fill(0).map(() => new Array(mat[0].length).fill(0))

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      // i - K <= r <= i + K, j - K <= c <= j + K 
      const startI = ((i - K) >= 0 ? (i - K) : 0) + 1
      const endI = ((i + K) >= (mat.length - 1) ? (mat.length - 1) : (i + K)) + 1

      const startJ = ((j - K) >= 0 ? (j - K) : 0) + 1
      const endJ = ((j + K) >= (mat[0].length - 1) ? (mat[0].length - 1) : (j + K)) + 1

      // console.log(startI, endI, startJ, endJ)

      answer[i][j] = sumArr[endI][endJ] + sumArr[startI-1][startJ-1] - sumArr[endI][startJ-1] - sumArr[startI-1][endJ]
    }
  }
  return answer
}

// const mat = [[1,2,3],[4,5,6],[7,8,9]], K = 2 //[[45,45,45],[45,45,45],[45,45,45]]

// const mat = [[1,2,3],[4,5,6],[7,8,9]], K = 1 // 输出：[[12,21,16],[27,45,33],[24,39,28]]

const mat = [[67,64,78],[99,98,38],[82,46,46],[6,52,55],[55,99,45]], K = 3 // [[731,731,731],[930,930,930],[930,930,930],[930,930,930],[721,721,721]]


console.log(matrixBlockSum(mat, K))
