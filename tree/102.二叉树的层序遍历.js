/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
function levelOrder(root) {
  const arr = []
  help(root, arr, 0)
  return arr
}

function help(node, arr, i) {
  if (node) {
    arr[i] = arr[i] || []
    arr[i].push(node.val)
    help(node.left, arr, i + 1)
    help(node.right, arr, i + 1)
  }
}
// @lc code=end
