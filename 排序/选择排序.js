const baseFun = require('../baseFun.js')

function Selection(arr) {
  let len = arr.length
  let minNum = null
  let minIndex = null
  for (let i = 1; i < len; i++) {
    minNum = arr[i - 1]
    minIndex = i - 1
    for (let j = i; j < len; j++) {
      if (minNum > arr[j]) {
        minIndex = j
        minNum = arr[j]
      }
    }
    [arr[i - 1], arr[minIndex]] = [arr[minIndex], arr[i-1]]
  }
  return arr
}

let arrLen = 10
let arrDigits = 4
// 随机创建一个长度为arrLen, 最大位数是4位数的数组
let arr = baseFun.createArr(arrLen, arrDigits)
console.log(arr.join(', '))
arr = Selection(arr)
console.log(arr.join(', '))
