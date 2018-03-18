const baseFun = require("./baseFun.js")

function bubbleSort(arr){
	var len = arr.length;
	for(var i = 0; i < len - 1; i++) {
		for(var j = 0; j < len - 1 -i; j++) {
			if(arr[j] > arr[j+1]) {
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
			}
		}
	}
	return arr;
}

var arrLen = 10, arrDigits = 4;
// 随机创建一个长度为arrLen, 最大位数是4位数的数组
var arr = baseFun.createArr(arrLen, arrDigits)
console.log(arr.join(", "))
arr =  bubbleSort(arr)
console.log(arr.join(", "))