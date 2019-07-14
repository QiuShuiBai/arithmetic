// https://leetcode-cn.com/problems/map-sum-pairs/

function MapSum() {
  this.root = {}
}

/** 
* @param {string} word 
* @param {number} num
* @return {void}
*/
MapSum.prototype.insert = function (word, num) {
  let obj = this.root
  for (let i = 0, len = word.length; i < len; i++) {
    if (!obj[word[i]]) {
      obj[word[i]] = {}
    }
    obj = obj[word[i]]
  }
  obj.isEnd = true
  obj.num = num
}

/** 
 * @param {string} word
 * @return {number}
 */
MapSum.prototype.sum = function(word) {
  let obj = this.root
  for (let i = 0, len = word.length; i < len; i++) {
    if (!obj[word[i]]) {
      return 0
    }
    obj = obj[word[i]]
  }
  return searchNum(obj)
};

function searchNum(obj) {
  let num = 0
  let arr = Object.keys(obj)
  arr.forEach(item => {
    num = num + (typeof obj[item] === 'number' ? obj[item] : searchNum(obj[item]))
  })
  return num
}




/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

const obj = new MapSum()
obj.insert('apple', 2)
obj.insert('app', 3)
console.log(obj.sum('app'))
// console.log(obj.startsWith('app'))
// obj.insert('app')
// console.log(obj.search('app'))
