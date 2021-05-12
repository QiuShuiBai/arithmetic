/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  let i = head
  let j = head
  let count = 0
  while(i.next) {
    i = i.next
    count++
    if (count > n) {
      j = j.next
    }
  }
  if (count < n) {
    return head.next
  }
  j.next = j.next.next
  return head
}
// @lc code=end
