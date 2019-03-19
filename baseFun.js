function createArr(len, digit) {
  let a = []
  for (let i = 0; i < len; i++) {
    // 随机生成0~10^-1digit 范围的的数字，并放入数组
    a.push(~~(Math.random() * Math.pow(10, digit)))
  }
  return a
}

function shuffle(array) {
  let m = array.length
  let t, i
  while (m) {
    i = Math.floor(Math.random() * m--)
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }
  return array
}

function numCount(arr, num) {
  let count = 0
  arr.forEach(item => {
    count = item === num ? count + 1 : count
  })
  return count
}

// 交换数组两个值
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

// 选择数组中的一个值，取出后插入至选定的索引，该索引之后的值的索引加一
// [1, 2, 3, 4]  =>  [4, 1, 2, 3]
function insert(arr, i, j) {
  let item = arr.splice(j, 1)[0]
  arr.splice(i, 0, item)
}

function arrMin(arr) {
  let min = arr[0]
  arr.forEach(item => {
    min = Math.min(min, item)
  })
  return min
}

function arrMax(arr) {
  let min = arr[0]
  arr.forEach(item => {
    min = Math.max(min, item)
  })
  return min
}

module.exports.createArr = createArr
module.exports.shuffle = shuffle
module.exports.numCount = numCount
module.exports.swap = swap
module.exports.insert = insert
module.exports.arrMin = arrMin
module.exports.arrMax = arrMax
