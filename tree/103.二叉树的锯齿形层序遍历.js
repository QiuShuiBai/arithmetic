/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
function zigzagLevelOrder(root) {
  if (root === null) return []
  const resArr = [[root.val]]
  const nodeArr = []
  if (root.left) nodeArr.push(root.left)
  if (root.right) nodeArr.push(root.right)
  let i = 1
  let direction = 'pop' // shift
  while(true) {
    if (nodeArr.length === 0) break
    const n = nodeArr.length
    const tempResArr = []
    let tempNodeArr = []
    for (let j = 0; j < n; j++) {
      const node = nodeArr[direction]()
      tempResArr.push(node.val)
      if (direction === 'shift') {
        node.left && tempNodeArr.push(node.left)
        node.right && tempNodeArr.push(node.right)
      } else {
        node.right && tempNodeArr.push(node.right)
        node.left && tempNodeArr.push(node.left)
      }
    }
    if (direction === 'pop') {
      tempNodeArr = tempNodeArr.reverse()
    }
    nodeArr.push(...tempNodeArr)
    direction = direction === 'shift' ? 'pop' : 'shift'
    resArr[i] = tempResArr
    i++
  }
  return resArr
}
// @lc code=end

