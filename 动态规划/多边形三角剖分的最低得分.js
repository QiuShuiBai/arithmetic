// 给定 N，想象一个凸 N 边多边形，其顶点按顺时针顺序依次标记为 A[0], A[i], ..., A[N-1]。

// 假设您将多边形剖分为 N-2 个三角形。对于每个三角形，该三角形的值是顶点标记的乘积，三角剖分的分数是进行三角剖分后所有 N-2 个三角形的值之和。

// 返回多边形进行三角剖分后可以得到的最低分。
//  

// 示例 1：

// 输入：[1,2,3]
// 输出：6
// 解释：多边形已经三角化，唯一三角形的分数为 6。
// 示例 2：



// 输入：[3,7,4,5]
// 输出：144
// 解释：有两种三角剖分，可能得分分别为：3*7*5 + 4*5*7 = 245，或 3*4*5 + 3*4*7 = 144。最低分数为 144。
// 示例 3：

// 输入：[1,3,1,4,1,5]
// 输出：13
// 解释：最低分数三角剖分的得分情况为 1*1*3 + 1*1*4 + 1*1*5 + 1*1*1 = 13。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/minimum-score-triangulation-of-polygon
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function minScoreTriangulation(A) {
  const obj = {}
  function handler(A) {
    const key = A.join(',')
    if (obj[key]) return obj[key]
    if (A.length <= 2) {
      obj[key] = 0
      return 0
    }
    if (A.length === 3) {
      obj[key] = A[0] * A[1] * A[2]
      return A[0] * A[1] * A[2]
    }
    let min = 1 / 0
    for (let i = 2; i < A.length; i++) {
      const arr = A.slice(i)
      arr.unshift(A[0])
      min = Math.min(A[0] * A[1] * A[i] + handler(A.slice(1, i+1)) + handler(arr), min)
    }
    obj[key] = min
    return min
  }
  return handler(A)
}

// const A = [3,7,4,5] // 144
// const A = [1,3,1,4,1,5] // 13
// const A = [35,73,90,27,71,80,21,33,33,13,48,12,68,70,80,36,66,3,70,58] // 140295
const A = [45,85,82,68,68,1,39,91,36,2,25,16,86,98,90,90,17,31,83,85,5,89,28,19,51,67,91,75,58,96,12,24,57,7,63,69,44,80,27,20,79,39,47,93,74,86,56,51,41,69] // 154930

console.log(minScoreTriangulation(A))
