// https://leetcode-cn.com/problems/word-pattern/

function wordPattern(pattern, str) {
	if (!pattern.length) return false
	let arr = str.split(' ')
	const obj = {}
	const obj2 = {}
	let valMap = pattern[0]
	for (let i = 0, iLen = arr.length; i < iLen; i++) {
		valMap = pattern[i]
		if (obj[arr[i]] && valMap !== pattern[i]) return false
		if (obj2[valMap] && obj2[valMap] !== arr[i]) return false
		obj[arr[i]] = pattern[i]
		obj2[valMap] = arr[i]
	}
	arr.forEach((item, index) => {
		arr[index] = obj[item]
	})
	if (arr.join('') === pattern) return true
	return false
}

let pattern = ''
let str = ''
pattern = "", str = "dog cat cat dog"

console.log(wordPattern(pattern, str))