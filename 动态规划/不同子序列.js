// 给定一个字符串 S 和一个字符串 T，计算在 S 的子序列中 T 出现的个数。

// 一个字符串的一个子序列是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）

//  

// 示例 1：

// 输入：S = "rabbbit", T = "rabbit"
// 输出：3
// 解释：

// 如下图所示, 有 3 种可以从 S 中得到 "rabbit" 的方案。
// (上箭头符号 ^ 表示选取的字母)

// rabbbit
// ^^^^ ^^
// rabbbit
// ^^ ^^^^
// rabbbit
// ^^^ ^^^
// 示例 2：

// 输入：S = "babgbag", T = "bag"
// 输出：5
// 解释：

// 如下图所示, 有 5 种可以从 S 中得到 "bag" 的方案。 
// (上箭头符号 ^ 表示选取的字母)

// babgbag
// ^^ ^
// babgbag
// ^^    ^
// babgbag
// ^    ^^
// babgbag
//   ^  ^^
// babgbag
//     ^^^

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/distinct-subsequences
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function numDistinct(s, t) {
  const arr = new Array(s.length).fill(0).map(() => new Array(t.length).fill(0))
  if (s.length == 0 || t.length === 0) {
    return s.length === t.length
  }
  for (let i = 0, iLen = s.length; i < iLen; i++) {
    for (let j = 0; j <= i; j++) {
      const sTemp = s.slice(0, i + 1)
      const tTemp = t.slice(0, j + 1)
      if (i === 0) {
        arr[0][0] = Number(s[0] === t[0])
      } else if (j === 0) {
        arr[i][0] = sTemp.length - sTemp.replace(new RegExp(t[0], 'g'), '').length
      } else if (i === j) {
        arr[i][j] === Number(sTemp === tTemp)
      } else if (!arr[i][j-1]) {
        arr[i][j] = 0
        break
      } else if (arr[i][j-1]) {
        if (!arr[i-1][j]) {
          arr[i][j] = s[i] === t[j] ? arr[i][j] : 0
        } else {
        }
      }
    }
  }
  console.log(arr)
}

const S = "rabbbit", T = "rabbit"  // 3
console.log(numDistinct(S, T))

// C(m, n) = m! / [n!(m-n)!]
// C(m+1, n) = [(m+1) / (m+1-n)] * C(m, n)
// c(m, n+1) = [(m-n) / (n+1)] * C(m, n)