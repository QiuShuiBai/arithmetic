// 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。

// '?' 可以匹配任何单个字符。
// '*' 可以匹配任意字符串（包括空字符串）。
// 两个字符串完全匹配才算匹配成功。

// 说明:

// s 可能为空，且只包含从 a-z 的小写字母。
// p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
// 示例 1:

// 输入:
// s = "aa"
// p = "a"
// 输出: false
// 解释: "a" 无法匹配 "aa" 整个字符串。
// 示例 2:

// 输入:
// s = "aa"
// p = "*"
// 输出: true
// 解释: '*' 可以匹配任意字符串。
// 示例 3:

// 输入:
// s = "cb"
// p = "?a"
// 输出: false
// 解释: '?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。
// 示例 4:

// 输入:
// s = "adceb"
// p = "*a*b"
// 输出: true
// 解释: 第一个 '*' 可以匹配空字符串, 第二个 '*' 可以匹配字符串 "dce".
// 示例 5:

// 输入:
// s = "acdcb"
// p = "a*c?b"
// 输入: false

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/wildcard-matching
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function isMatch(s, p) {
  p = p.replace(/\*{2,}/g, '*')

  if (s === '') {
    return p === '' || p === '*'
  } else if (p === '') {
    return s === ''
  }

  let arr = new Array(s.length).fill(false).map(() => new Array(p.length).fill(false))

  for (let i = 0, iLen = s.length; i < iLen; i++) {
    for (let j = 0, jLen = p.length; j <jLen; j++) {
      if (i + j === 0) {
        arr[i][j] = s[i] === p[j] || p[j] === '?' || p[j] === '*'
      } else if (i === 0) {
        if (j === 1) {
          let temp = p.slice(0, 2)
          arr[0][1] = arr[0][0] && (
            ['*' + s[0], '*?', s[0] + '*', '?*'].includes(temp)
          )
        } else {
          arr[0][j] = arr[0][j-1] && p[j] === '*'
        }
      } else if (j === 0) {
        arr[i][j] = arr[i-1][0] && p[0] === '*'
      } else if (arr[i-1][j-1] && ['?', '*', s[i]].includes(p[j])) {
        arr[i][j] = true
      } else if (p[j] === '*' && (arr[i-1][j] || arr[i][j-1])) {
        arr[i][j] = true
      }
    }
  }
  return arr[s.length-1][p.length-1]
  // dp[i][j] 表示 p[0, j] 能不能组成 s[0, i]
  // dp[i+1][j] 表示 p[0, j] 能不能组成 s[0, i+1]
  // dp[i][j+1] 表示 p[0, j+1] 能不能组成 s[0, i]
  // dp[i][j] = p[j] === s[i] || p[j] === '?' || p[j] === '*
}
// const s = "adceb", p = "*a*b"  // true
// const s = "aa", p = "a" // false
// const s = "cb", p = "?a" // false
// const s = "cb", p = "?a" // false
const s = 'acdcb', p = 'a*c?b' // false
// const s = 'aab', p = 'c*a*b' // false

console.log(isMatch(s, p))
