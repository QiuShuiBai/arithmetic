/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
function buildTree(preorder, inorder) {
  if (!preorder.length) return null
  const val = preorder[0]
  const root = new TreeNode(val)

  const indexInorder = inorder.indexOf(val)

  const leftInorder = inorder.slice(0, indexInorder)
  const rightInorder = inorder.slice(indexInorder + 1)

  const indexPreorder = leftInorder.length
  const leftPreorder = preorder.slice(1, indexPreorder + 1)
  const rightPreorder = preorder.slice(indexPreorder + 1)

  root.left = buildTree(leftPreorder, leftInorder)
  root.right = buildTree(rightPreorder, rightInorder)
  return root
}

// @lc code=end

