let i = 1
let a = [[1], [1, 1]]
console.log(a[0])
let q = 0
while (i < 5) {
  q = i + 1
  while (i - 1) {
    a[1][0] = 1
    a[1][q - i] = a[0][q - i - 1] + a[0][q - i]
    i--
  }
  a[1][q - 1] = 1
  a[0] = [...a[1]]
  console.log(a[0])
  i = q
}
