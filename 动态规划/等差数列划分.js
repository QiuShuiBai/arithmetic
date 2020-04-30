// 如果一个数列至少有三个元素，并且任意两个相邻元素之差相同，则称该数列为等差数列。

// 例如，以下数列为等差数列:

// 1, 3, 5, 7, 9
// 7, 7, 7, 7
// 3, -1, -5, -9
// 以下数列不是等差数列。

// 1, 1, 2, 5, 7
//  

// 数组 A 包含 N 个数，且索引从0开始。数组 A 的一个子数组划分为数组 (P, Q)，P 与 Q 是整数且满足 0<=P<Q<N 。

// 如果满足以下条件，则称子数组(P, Q)为等差数组：

// 元素 A[P], A[p + 1], ..., A[Q - 1], A[Q] 是等差的。并且 P + 1 < Q 。

// 函数要返回数组 A 中所有为等差数组的子数组个数。

//  

// 示例:

// A = [1, 2, 3, 4]

// 返回: 3, A 中有三个子等差数组: [1, 2, 3], [2, 3, 4] 以及自身 [1, 2, 3, 4]。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/arithmetic-slices
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 动态规划
function numberOfArithmeticSlices(A) {
  let result = 0
  let count = 0
  for (let i = 2, len = A.length; i < len; i++) {
    if (A[i] - A[i-1] === A[i-1] - A[i-2]) {
      count = count + 1
    } else {
      count = 0
    }
    result = result + count
  }
  return result
}

const A = [1, 2, 3, 4] // 3
// const A = [1,2,3,4,5,6] // 10
// const A = [1, 2, 3, 8, 9, 10] // 2
console.log(numberOfArithmeticSlices(A))

/**
 * 动态规划思路
 * 
 * 设 A[i] 为 A 中的第 i 个数
 *   dp[i] 为 以 A[i] 为结尾的等差数列的个数
 * 
 * 状态转移方程：
 * 如果 A[i] - A[i-1] === A[i-1] - A[i-2]
 * 则 dp[i] = dp[i-1] + 1
 * 否则 dp[i] = 0
 * 
 * 这里在A[i] - A[i-1] !== A[i-1] - A[i-2] 时，dp[i] = 0很好理解：
 * 因最后三个数构不成等差数列，可得以 A[i] 为结尾的数列构造不成等差数列，可知dp[i] = 0
 * 
 * 难点在于 A[i] - A[i-1] === A[i-1] - A[i-2] 时，dp[i] = dp[i-1] + 1：
 * 分两种情况，一种是dp[i-1]为0，一种是dp[i-1]不为0
 * 
 * dp[i-1]为0时，以A[i]结尾的等差数列只有一个 A[i-2, i]，所以dp[i] = dp[i-1] + 1 成立
 * 注意，此时组成等差数列的数字个数为3
 * 
 * dp[i-1]不为0时，在以A[i-1]结尾的等差数列的末尾，全部添加A[i]
 * 现在得以A[i]结尾的等差数列有d[i-1]个，且组成等差数列的数字个数最少为4个: A[i-3, i]
 * 那么因为组成等差数列的数字个数最少为3，可知，我们还能添加一个数列: A[i-2, i]
 * 得 dp[i] = dp[i-1] + 1
 * 
 */


/* 
暴力破解法
function numberOfArithmeticSlices(A) {
  let result = 0
  let current = 0
  for (let i = 0, iLen = A.length; i < iLen-2; i++) {
    current = 0
    for (let j = i+2; j < iLen; j++) {
      if (j === i+2) {
        if (A[j] - A[j-1] === A[j-1] - A[j-2]) {
          current = j - i - 1
        }
      } else if (current) {
        if (A[j] - A[j-1] === A[j-1] - A[j-2]) {
          current = j - i - 1
        } else {
          break
        }
      }
    }
    result = result + current
  }
  return result
}
*/
