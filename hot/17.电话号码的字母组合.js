/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  if (!digits.length) return []
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  digits = digits.split('').map(item => {
    return map[item].split('')
  })
  let res = [...digits[0]]
  for (let i = 1; i < digits.length; i++) {
    for (let j = 0; j < res.length; j++){
      const baseStr = res[j]
      res.splice(j, 1, ...digits[i].map(item => {
        return baseStr + item
      }))
      j = j + digits[i].length - 1
    }
  }
  return res
}
// @lc code=end
