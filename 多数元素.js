// 一个数在数据中出现了一半以上，则算做多数数
let baseFun = require('./baseFun')

function candidate(e) {
  let arr = [...e]
  let j = 1
  let len = arr.length
  for (j; j < len; j++) {
    if (arr[0] !== arr[j]) {
      arr.splice(j, 1)
      arr.splice(0, 1)
      len = len - 2
      j = j - 2
    }
  }
  return arr[0]
}

let arr = baseFun.createArr(10000, 2)
let arrTotal = new Array(10000)
arrTotal.fill(100)
arr = baseFun.shuffle(arr.concat(arrTotal))

console.log(arr)
let num = candidate(arr)
if (num) {
  let count = baseFun.numCount(arr, num)
  if (count > arr.length / 2) {
    console.log('多数元素为:', num)
  } else {
    console.log('无多数元素')
  }
} else {
  console.log('无多数元素')
}
