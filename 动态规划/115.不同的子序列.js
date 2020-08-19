/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function numDistinct(s, t) {
  if (s.length === 0) return 0
  if (t.length === 0) return 0
  if (s.length < t.length) return 0
  if (s.length === t.length) return Number(s === t)
  const arr = new Array(s.length).fill(0).map(() => new Array(t.length).fill(0))
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (i + j === 0) {
        arr[0][0] = Number(s[0] === t[0], 10)
      } else if (i === 0) {
        arr[0][j] = 0
      } else if (j === 0) {
        arr[i][0] = arr[i-1][0] + Number(s[i] === t[0])   
      } else if (s[i] === t[j]) {
        arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
      } else {
        arr[i][j] = arr[i-1][j]
      }
    }
  }
  return arr[s.length - 1][t.length - 1]
};
// @lc code=end
// const S = "rabbbit", T = "rabbit" // 3
const S = "babgbag", T = "bag" // 5
console.log(numDistinct(S, T))
// dp[i][j] 表示 s(0, i) 中 t(0, j)的个数
