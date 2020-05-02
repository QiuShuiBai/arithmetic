// 在计算机界中，我们总是追求用有限的资源获取最大的收益。

// 现在，假设你分别支配着 m 个 0 和 n 个 1。另外，还有一个仅包含 0 和 1 字符串的数组。

// 你的任务是使用给定的 m 个 0 和 n 个 1 ，找到能拼出存在于数组中的字符串的最大数量。每个 0 和 1 至多被使用一次。

// 注意:

// 给定 0 和 1 的数量都不会超过 100。
// 给定字符串数组的长度不会超过 600。
// 示例 1:

// 输入: Array = {"10", "0001", "111001", "1", "0"}, m = 5, n = 3
// 输出: 4

// 解释: 总共 4 个字符串可以通过 5 个 0 和 3 个 1 拼出，即 "10","0001","1","0" 。
// 示例 2:

// 输入: Array = {"10", "0", "1"}, m = 1, n = 1
// 输出: 2

// 解释: 你可以拼出 "10"，但之后就没有剩余数字了。更好的选择是拼出 "0" 和 "1" 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/ones-and-zeroes
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var findMaxForm = function(strs, m, n) {
  // dp[k][i][j] = Math.max(dp[k-1][i][j], dp[k-1][i-strsI][j-strsJ] + 1)
  const arr = new Array(strs.length+1).fill(0).map(() => new Array(m+1).fill(0).map(() => new Array(n+1).fill(0)))
  for (let k = 1, kLen = strs.length+1; k < kLen; k++) {
    const count = [0, 0]
    for (let word of strs[k-1]) {
      count[word] = count[word]+1
    }
    const [strsI, strsJ] = count
    for(let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
        arr[k][i][j] = arr[k-1][i][j]
        if (i >= strsI && j >= strsJ) {
          arr[k][i][j] = Math.max(arr[k-1][i][j], arr[k-1][i-strsI][j-strsJ] + 1)
        }
      }
    }
  }
  return arr[strs.length][m][n]
}
// const Arr = ["10", "0", "1"], m = 1, n = 1 // 2
// const Arr = ["10", "0001", "111001", "1", "0"], m = 5, n = 3 // 4
// const Arr = ["10","0001","111001","1","0"], m = 3, n = 4 // 3
const Arr = ["10","0001","111001","1","0"], m = 5, n =3 // 4
console.log(findMaxForm(Arr, m, n))

/**
 * 类似于背包问题
 * 背包问题: 在有限的容量內，选择最大价值数。dp[i][j] = max(dp[i-1][j], dp[i-1][j-v[i])
 * 
 * 在这题中，抽象理解为物品会拆分为两部分：a和b。a只能装如包m，b只能装入包n
 * 
 * 设dp[k][i][j] 表示的是。前k个(包括第k个)字符串，能由i个0，j个1组成的最大个数
 * 
 * 对于第k个字符串有两种情况： 选或者不选
 * 
 * 如果选择组成第k个字符串，那么剩下0的个数为 i - strs[k].zeroCount，1的个数为 j - strs[k].oneCount
 * 此时 dp[k][i][j] = dp[k-1][i - strs[k].zeroCount][j - strs[k].oneCount] + 1
 * 字面意思就是：选择第k个字符后，需要找到剩下的0、1能在前k-1个字符串组成的最大个数
 * 
 * 如果不选择第k个字符串，那么剩下的0的个数为 i，1的个数为j
 * 此时 dp[k][i][j] = dp[k-1][i][j]
 * 很明显，因为不选择第k个字符，那么dp[k][i][j]能组成的最大个数就要从前k-1的字符串里产生
 * 
 * 那么可得：dp[k][i][j] = Math.max(dp[k-1][i][j], dp[k-1][i - strs[k].zeroCount][j - strs[k].oneCount] + 1)
 */