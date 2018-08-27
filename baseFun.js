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
module.exports.createArr = createArr
module.exports.shuffle = shuffle
module.exports.numCount = numCount
