// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
// 示例：
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

// 链接：https://leetcode-cn.com/problems/add-two-numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  l1 = createList(l1)
  l2 = createList(l2)
  let i = 0
  let list = {}
  let node = list
  while(l1 || l2 || i) {
    if (!l1) l1 = { next : null, val : 0 }
    if (!l2) l2 = { next : null, val : 0 }
    num = l1.val + l2.val + i
    if (num < 10) {
      i = 0
    } else {
      num = num - 10
      i = 1
    }
    node.next = new ListNode(num)
    node = node.next
    l1 = l1.next
    l2 = l2.next
  }
  return list.next
}

function ListNode(val) {
  this.val = val
  this.next = null
}

function createList(arr) {
  let list = new ListNode(arr.shift())
  let node = list
  while(arr.length) {
    node.next = new ListNode(arr.shift())
    node = node.next
  }
  node = null
  return list
}

let arr1 = [2,4,3]
let arr2 = [5,6,4]

console.log(addTwoNumbers(arr1, arr2))
