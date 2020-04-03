// 给定三个字符串 s1, s2, s3, 验证 s3 是否是由 s1 和 s2 交错组成的。

// 示例 1:

// 输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// 输出: true
// 示例 2:

// 输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// 输出: false

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/interleaving-string
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function isInterleave(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false
  if (s1.length === 0) return s2 === s3
  if (s2.length === 0) return s1 === s3

  const arr = new Array(s1.length+1).fill(0).map(() => new Array(s2.length+1).fill(0))
  arr[0][0] = false
  arr[1][0] = s1[0] === s3[0]
  arr[0][1] = s2[0] === s3[0]

  for (let i = 2, len = s1.length; i <= len; i++) {
    arr[i][0] = arr[i-1][0] ? s1[i-1] === s3[i-1] : false
  }
  for (let j = 2, len = s2.length; j <= len; j++) {
    arr[0][j] = arr[0][j-1] ? s2[j-1] === s3[j-1] : false
  }

  console.log(arr)
  for (let i = 1, iLen = s1.length; i <= iLen; i++) {
    for (let j = 1, jLen = s2.length; j <= jLen; j++) {
      if (arr[i-1][j] && s1[i-1] === s3[i+j-1]) {
        arr[i][j] = true
      } else if (arr[i][j-1] && s2[j-1] === s3[i+j-1]) {
        arr[i][j] = true
      } else {
        arr[i][j] = false
      }
    }
  }
  // console.log(arr)
  return arr[s1.length][s2.length]
}

// const s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// const s1 = "aa", s2 = "bb", s3 = "aabb"
// const s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
const s1 = "aa", s2 = "ab", s3 = "abaa"
console.log(isInterleave(s1, s2, s3))
