const baseFun = require('../baseFun.js')

const insert = baseFun.insert

// let arr = baseFun.createArr(100, 2)
function insertionSort(arr) {
  for (let i = 1, len = arr.length; i < len; i++) {
    for (let j = 0; j < i; j++) {
      // j 表排好的数组
      if (arr[i] <= arr[j] && ( arr[i] >= arr[j - 1] || j - 1 < 0)) {
        insert(arr, j, i)
        break
      }
    }
  }
  return arr
}
let arr = [7, 51, 3, 121, 3, 32, 21, 43, 4, 25, 56, 77, 16, 22, 87, 56, 10, 68, 99, 70]
arr = insertionSort(arr)
console.log(arr.join(','))

// 排序思想： 把一个新的元素插入已排好序的数组形成一个新的已排好序的数组
