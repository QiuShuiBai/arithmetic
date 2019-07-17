// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
  let len = getLen(head)
  if (k > len || k === 1) return head
  let p = head.next
  let q = p.next
  head.next = null
  let last = head
  let i = 1
  let pl = ''
  let main = ''
  let j = 0
  while(true) {
    p.next = head
    head = p
    p = q
    q = q && q.next
    i++
    if (i === k) {
      j = j + 1
      if (pl === '') {
        main = head
      } else {
        pl.next = head 
      }
      if (!p) return main
      pl = last
      head = p
      if (len - j * k < k) {
        pl.next = head
        return main
      }
      p = p.next
      q = q.next
      head.next = null
      last = head
      i = 1
    }
  }
}

function getLen(head) {
  let i = 0
  while(head) {
    head = head.next
    i++
  }
  return i
}