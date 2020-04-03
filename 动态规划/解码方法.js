// 一条包含字母 A-Z 的消息通过以下方式进行了编码：

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// 给定一个只包含数字的非空字符串，请计算解码方法的总数。

// 示例 1:

// 输入: "12"
// 输出: 2
// 解释: 它可以解码为 "AB"（1 2）或者 "L"（12）。
// 示例 2:

// 输入: "226"
// 输出: 3
// 解释: 它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/decode-ways
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function numDecodings(s) {
  s = s + ''
  s = s.replace(/10/g, 'a').replace(/20/g, 'b')
  if (s.includes('0')) {
    return 0
  }
  let arr =[]
  if (s.length === 1) return 1
  let result = Number(s[0] + s[1]) <= 26 ? 2 : 1
  arr[0] = result
  if (s.length === 2) return result
  result = result + (Number(s[1] + s[2]) <= 26 ? 1 : 0)
  arr[1] = result
  if (s.length === 3) return result
  //  s 为 a-9 a-b 的
  for (let i = 3, len = s.length; i < len; i++) {
    if (s[i] === 'a' || s[i] === 'b' || Number(s[i-1]+s[i]) > 26 || s[i - 1] === 'a' || s[i - 1] === 'b') {
      arr = [arr[1], arr[1]]
    } else {
      arr = [arr[1], arr[1] + arr[0]]
    }
  }
  return arr[1]
}

console.log(numDecodings('1212'))

// 2472 2
// 24726 4
// 5114 3
// 1212 5
// 16205 2