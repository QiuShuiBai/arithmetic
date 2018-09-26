// 动态规划
// 设arr[i][j]为前i种币，可组成j元的方法
// 设coin[]为存钱币类型数组
// arr[i][j]有三种情况
// 1. coin[i] > j 没有组成情况，arr[i][j] = arr[i-1][j]
// 2. coin[i] = j 正好一份纸币等于j元  arr[i][j] = arr[i-1][j]+1
// 3. coin[i] < j 不使用coin[i]有 arr[i-1][j]种情况
//                使用coin[i]有 arr[i][j-coin[i]]种情况
const COIN = [0, 1, 5, 10, 20, 50, 100]
function initArr(arr, money) {
  for(let i = 0; i <= 6; i++) {
    arr[i] = []
    for(let j = 0; j <= money; j++) {
      arr[i][j] = 0
    }
  }
  return arr
}
function getNum(money) {
  let arr = []
  arr = initArr(arr, money)
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= money; j++) {
      if (COIN[i] > j) {
        arr[i][j] = arr[i - 1][j]
      } else if (j === COIN[i]) {
        arr[i][j] = arr[i - 1][j] + 1
      } else if (COIN[i] <= j) {
        arr[i][j] = arr[i - 1][j] + arr[i][j-COIN[i]]
      }
    }
  }
  return arr[6][money]
}
console.log(getNum(10))
