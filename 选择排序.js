const baseFun = require("./baseFun.js")

function Selection(arr) {
	var len = arr.length;
	var	minNum = null;
	var minIndex = null;	
	for(var i = 1; i < len; i++) {
		minNum = arr[i-1];
		minIndex = i - 1;	
		for(var j = i; j < len; j++) {
			if(minNum > arr[j]) {
				minIndex = j;
				minNum = arr[j];
			}
		}
		[arr[i-1], arr[minIndex]] = [arr[minIndex], arr[i-1]];
	}
	return arr;
}

var arrLen = 10, arrDigits = 4;
// 随机创建一个长度为arrLen, 最大位数是4位数的数组
var arr = baseFun.createArr(arrLen, arrDigits);
console.log(arr.join(", "));
arr = Selection(arr);
console.log(arr.join(", "));