const baseFun = require('../baseFun.js')

function quickScort(arr, min, high) {
  let i = min
  let j = high
  let k = arr[min]
  if (i === j) return
  for (j; j >= min; j--) {
    if (arr[j] < k) {
      for (i; i < high; i++) {
        if (i === j) {
          let item = arr[i]
          arr[i] = arr[min]
          arr[min] = item
          quickScort(arr, min, i)
          quickScort(arr, i + 1, high)
          break
        }
        if (arr[i] > k) {
          let item = arr[i]
          arr[i] = arr[j]
          arr[j] = item
          break
        }
      }
    }
    if (i === j) {
      let item = arr[i]
      arr[i] = arr[min]
      arr[min] = item
      quickScort(arr, min, i)
      quickScort(arr, i + 1, high)
      break
    }
  }
}

let arr = baseFun.createArr(10, 7)
quickScort(arr, 0, arr.length - 1)
console.log(arr.join(', '))
