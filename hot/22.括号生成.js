/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  let res = ['()']
  for (let i = 2; i <= n; i++) {
    const newRes = []
    for (let j = 0, len = res.length; j < len; j++) {
      const str = res[j]
      for (let k = 0, kLen = str.length; k < kLen; k++) {
        if (str[k] === ')') {
          const pre = str.substring(0, k)
          const post = str.substring(k + 1)
          newRes.push(pre + '())' + post, pre + ')()' + post)
        }
      }
    }
    res = [... new Set(newRes)]
  }
  return res
}
// @lc code=end

/**
 * 能在 ) 前填加 () ，或者在 ) 后添加 ()
 * 得到 ()) 或 )()
 */