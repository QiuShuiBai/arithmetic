/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// function isSymmetric(root) {
//   if (!root) return true
//   return check(root.left, root.right)
// }

// function check(left, right) {
//   if (!left && !right) return true
//   if (left && right) {
//     if (left.val === right.val) {
//       return check(left.left, right.right) && check(left.right, right.left)
//     } else {
//       return false
//     }
//   }
//   return false
// }

function isSymmetric(root) {
  if (!root) return true
  const arr = []
  let left = root.left
  let right = root.right
  while(true) {
    if (left && right) {
      if (left.val === right.val) {
        arr.push({
          left: left,
          right: right
        })
        left = left.left
        right = right.right
      } else {
        return false
      }
    } else if (!left && !right) {
      if (arr.length === 0) return true
      const node = arr.pop()
      left = node.left.right
      right = node.right.left
    } else {
      return false
    }
  }
}
// @lc code=end
