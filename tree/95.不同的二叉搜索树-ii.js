/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
function generateTrees(n) {
  return generateSubTrees(1, n)
}

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function generateSubTrees(start, end) {
  if (start === end) return [new TreeNode(start)]
  if (start > end) return []
  const min = start
  const max = end
  let n = min
  const result = []
  while(n <= max) {
    const leftArr = generateSubTrees(min, n - 1)
    const rightArr = generateSubTrees(n + 1, max)
    for (let i = 0; i <= leftArr.length; i++) {
      for (let j = 0; j <= rightArr.length; j++) {
        if (n === max || n === min) {
          if (leftArr[i] || rightArr[j]) {
            result.push(new TreeNode(n,
              leftArr[i],
              rightArr[j]
            ))
          }  
        } else {
          if (leftArr[i] && rightArr[j]) {
            result.push(new TreeNode(n,
              leftArr[i],
              rightArr[j]
            ))
          }
        }
      }
    }
    n++
  }
  return result
}
// @lc code=end

// [
//   [1,null,3,2],
//   [3,2,null,1],
//   [3,1,null,null,2],
//   [2,1,3],
//   [1,null,2,null,3]
// ]
// 解释：
// 以上的输出对应以下 5 种不同结构的二叉搜索树：

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3
console.log(generateTrees(3).length)
