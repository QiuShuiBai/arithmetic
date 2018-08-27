// len表示数组的长度，digit表示数组的随机数是0到几位
const baseFun = require('../baseFun.js')

// 得到数组中最大数的位数
function getMaxDigit(arr) {
  let maxNum = 0
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i]
    }
  }
  // 得到位数
  return (maxNum + '').length
}

// 初始化数组为二维数组，且各项值为空
function initArr(arr) {
  let len = arr.length
  let newArr = []
  while (len) {
    newArr[len - 1] = []
    len--
  }
  return newArr
}

function getPreArr(arr) {
  let storageArr = []
  let numLen = 0
  for (let i = 0, iLen = arr.length; i < iLen; i++) {
    for (let j = 0, jLen = arr[i].length; j < jLen; j++) {
      if (arr[i][j] !== 0) {
        storageArr[numLen] = arr[i][j]
        numLen++
      }
    }
  }
  return storageArr
}

function radixSort(arr) {
  let digit = getMaxDigit(arr)
  let storageArr = new Array(10)
  storageArr = initArr(storageArr)
  let item = 0
  let count = 0
  while (digit) {
    storageArr = initArr(storageArr)
    for (let i = 0, len = arr.length; i < len; i++) {
      item = ~~(arr[i] / Math.pow(10, count) % 10);
      storageArr[item].push(arr[i])
    }
    digit--
    count++

    let numLen = 0
    for (let p = 0; p <= 9; p++) {
      for (let q = 0; q < storageArr[p].length; q++) {
        if (storageArr[p][q] !== 0) {
          arr[numLen] = storageArr[p][q]
          numLen++
        }
      }
    }
  }
  storageArr = getPreArr(storageArr)
  return storageArr
}

let arrLen = 10
let arrDigits = 4
// 随机创建一个长度为arrLen, 最大位数是4位数的数组
let arr = baseFun.createArr(arrLen, arrDigits)
console.log(arr.join(', '))
arr = radixSort(arr)
console.log(arr.join(', '))
