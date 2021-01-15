/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
 if (root === null) return []
 const res = []
 const nodeArr = []
 while (true) {
   if (root.left) {
     nodeArr.push(root)
     root = root.left
   } else {
    res.push(root.val)
    if (root.right) {
      root = root.right
    } else {
      root = nodeArr.pop()
      root && (root.left = null)
    }
   }
   if (root === undefined) break
 }
 return res
}
// @lc code=end

