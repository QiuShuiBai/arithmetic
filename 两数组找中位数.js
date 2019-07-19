// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
// 解题思路 https://hk029.gitbooks.io/leetbook/%E5%88%86%E6%B2%BB/004.%20Median%20of%20Two%20Sorted%20Arrays[H]/004.%20Median%20of%20Two%20Sorted%20Arrays[H].html

function findMedianSortedArrays(nums1, nums2) {
  let len1 = nums1.length
  let len2 = nums2.length
  if (len1 === 0) return getMid(nums2)
  if (len2 === 0) return getMid(nums1)
  if (len1 > len2) {
    let temp = nums1
    nums1 = nums2
    nums2 = temp
    temp = len1
    len1 = len2
    len2 = temp
  }
  let c1, c2, l1, l2, r1, r2, first = 0, larst = 2 * len1

  const MIN = Math.min(nums1[0], nums2[0])
  const MAX = Math.max(nums1[len1 - 1], nums2[len2 - 1])
  while(true) {
    c1 = Math.floor((first + larst) / 2)
    c2 = len1 + len2 - c1

    l1 = c1 === 0 ? MIN : nums1[Math.floor((c1-1)/2)]
    l2 = c2 === 0 ? MIN : nums2[Math.floor((c2-1)/2)]

    r1 = c1 === 2 * len1 ? MAX : nums1[Math.floor(c1/2)]
    r2 = c2 === 2 * len2 ? MAX : nums2[Math.floor(c2/2)]

    if(l1 > r2)
      larst = c1 - 1
    else if(r1 < l2)
      first = c1 + 1
    else
        break
  }
  return (Math.max(l1,l2)+ Math.min(r1,r2)) / 2
}

function getMid(arr) {
  let len = arr.length
  if (len === 0) return NaN
  if (len % 2 === 0) {
    return ( arr[len / 2] + arr[len / 2 - 1] ) / 2
  } else {
    return arr[Math.floor(len / 2)]
  }
}

let nums1 = [1, 3]
let nums2 = [2]
console.log(findMedianSortedArrays(nums1, nums2))
