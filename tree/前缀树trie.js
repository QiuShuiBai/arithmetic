// https://leetcode-cn.com/problems/implement-trie-prefix-tree/

function Trie() {
  this.root = {}
}

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let obj = this.root
  for (let i = 0, len = word.length; i < len; i++) {
    if (!obj[word[i]]) {
      obj[word[i]] = {}
    }
    obj = obj[word[i]]
  }
  obj.isEnd = true
}

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let obj = this.root
  for (let i = 0, len = word.length; i < len; i++) {
    if (!obj[word[i]]) {
      return false
    }
    obj = obj[word[i]]
  }
  return !!obj.isEnd
}

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (word) {
  let obj = this.root
  for (let i = 0, len = word.length; i < len; i++) {
    if (!obj[word[i]]) {
      return false
    }
    obj = obj[word[i]]
  }
  return true
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const obj = new Trie()
// obj.insert('apple')
console.log(obj.search('a'))
// console.log(obj.startsWith('app'))
// obj.insert('app')
// console.log(obj.search('app'))
