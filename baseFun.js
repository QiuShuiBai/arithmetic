function createArr(len, digit) {
  var a = [];
  for (var i = 0; i < len; i++) {
    //随机生成0~10^-1digit 范围的的数字，并放入数组
    a.push(~~(Math.random() * Math.pow(10, digit)))
  }
  return a;
}

module.exports.createArr = createArr