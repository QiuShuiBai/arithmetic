const baseFun = require('../baseFun.js')

let arr = baseFun.createArr(13, 2)
// let arr = [2, 38, 13, 20, 92, 98, 23, 4, 21, 44, 22, 81, 18, 72, 55]
function heapSort(array) {
  let arr = [...array]
  let len = arr.length
  let result = []
  if (len <= 1) return
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    maxHeapify(arr, i)
  }
  for (let j = 0; j < len; j ++) {
    swap(arr, 0, len - j - 1)
    result.push(arr.pop())
    maxHeapify(arr, 0)
  }
  return result
}

function maxHeapify(arr, i) {
  let len = arr.length
  let lIndex = i * 2 + 1
  let rIndex = i * 2 + 2
  if (lIndex <= len && arr[i] < arr[lIndex]) {
    swap(arr, i, lIndex);
    maxHeapify(arr, lIndex);
  }
  if (rIndex <= len && arr[i] < arr[rIndex]) {
    swap(arr, i, rIndex);
    maxHeapify(arr, rIndex);
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function show(array) {
  let arr = [...array]
  for (let i = 1, len = arr.length; i <= len; i = i * 2) {
    let result = []
    j = i
    while(j > 0 && arr.length) {
      result.push(arr.shift())
      j--
    }
    console.log(result)
  }
  console.log('------------------------------------------')
}

arr = heapSort(arr)
show(arr)
console.log(arr)