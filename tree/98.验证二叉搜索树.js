/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
let _result = true

function isValidBST(root) {

  if (root === null) {
    return true
  }

  const leftRes = isValidBST(root.left)

  const rightRes = isValidBST(root.right)

  if (root.val === 3) {
    console.log(leftRes)
    console.log(rightRes)
  }
  if (leftRes === false || rightRes === false) {
    return false
  }

  const rootVal = root.val

  if (leftRes === true && rightRes === true) {
    return {
      max: rootVal,
      min: rootVal
    }
  }
  
  if (leftRes === true) {
    const { min, max } = rightRes
    if (rootVal < root.right.val && rootVal < min) {
      return {
        min: rootVal,
        max
      }
    } else {
      return false
    }
  }

  if (rightRes === true) {
    const { min, max } = leftRes
    if (rootVal > root.left.val && rootVal > max) {
      return {
        min,
        max: rootVal
      }
    } else {
      return false
    }
  }

  if (rootVal <= root.left.val || rootVal >= root.right.val) {
    return false
  } else if (rootVal <= leftRes.max || rootVal >= rightRes.min) {
    return false
  } else {
    return {
      min: leftRes.min,
      max: rightRes.max
    }
  }
}

// [3,1,5,0,2,4,6,null,null,null,3] false
// [3,1,5,0,2,4,6] true
// @lc code=end

/**
 * 思路:
 * 
 * 如果是二叉树搜索树，把根结点的左右子结点各当作新树的根结点
 * 
 * 新树也为二叉搜索树，倒推理出：
 * 
 * 要证明一树是二叉搜索树，先证明其左右子结点是二叉搜索树：
 * 
 * isValidBST(root) ==> 
 * 
 * isValidBST(root.left) && isValidBST(root.right)
 * 
 * 当左子树为二叉搜索树时，若添加根结点后还要满足二叉搜索树还需要两个条件：
 * 
 * root.val > root.left.val
 * 
 * 同时，因为根结点要大于左边所有树，则只需要得：
 * 
 * root.val > Tree(root.left).maxV  注意，Tree(root.left)，指的是root.left为根结点的树
 * 
 * 右子树同理，区别在于 root.val < root.right.val  && root.val < Tree(root.right).minV
 * 
 */