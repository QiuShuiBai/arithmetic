function isAlienSorted(words, order) {
	let i = 0
	let index = -2
	let nowIndex = -1
	while(i <= 25) {
		index = -2
		for (let j = 0, jLen = words.length; j < jLen; j++) {
			if (words[j].length < i + 1) {
				nowIndex = -1
			}
			else {
				nowIndex = order.indexOf(words[j][i])
			} 
			if (index < nowIndex) {
				console.log(j, words.length)
				if (j === words.length - 1) return true
				index = nowIndex
			} else {
				return false
			}
		}
		// words.forEach(item => {
			// if (i + 1 < item.length ? order.indexOf(item[i]) : -2 >= index) {
			// 	index = i + 1 < item.length ? order.indexOf(item[i]) : -2
			// } else {
			// 	return false
			// }
		// })
		i++
	}
	return true
}
let words = ''
let order = ''
words = ["word","world","row"], order = "worldabcefghijkmnopqrstuvxyz"
// words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
console.log(isAlienSorted(words, order))