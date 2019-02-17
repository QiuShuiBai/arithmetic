let string = '{}([)]'
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(string = '') {
  string = string.replace(/\s+/g,'')
  if (string.length % 2 === 1) return false
  let str = string.split('')
  let result = []
  let obj = {
    '()': true,
    '[]': true,
    '{}': true
  }
  for (let i = 0, len = str.length; i < len; i++) {
    if (str[i] === '{' || str[i] === '(' || str[i] === '[') {
      result.unshift(str[i])
    } else if (obj[result[0] + str[i]]) {
      result.shift()
    } else {
      return false
    }
  }
  return true
}

console.log(isValid(string))


// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:
// 输入: "()"
// 输出: true

// 示例 2:
// 输入: "()[]{}"
// 输出: true

// 示例 3:
// 输入: "(]"
// 输出: false

// 示例 4:
// 输入: "([)]"
// 输出: false

// 示例 5:
// 输入: "{[]}"
// 输出: true