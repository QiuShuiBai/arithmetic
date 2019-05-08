// https://leetcode-cn.com/problems/add-and-search-word-data-structure-design/
// 基于前缀树改变

function WordDictionary() {
  this.root = {}
}

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
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
WordDictionary.prototype.search = function (word, root = false) {
  let obj = root || this.root
  let letter = ''
  for (let i = 0, len = word.length; i < len; i++) {
    letter = word[i]
    if (letter === '.') {
      let arr = Object.keys(obj)
      let subWord = word.slice(i + 1)
      for (let j = 0, jLen = arr.length; j < jLen; j++) {
        if (this.search(subWord, obj[arr[j]])) return true
      }
      return false
    } else if (!obj[letter]) return false
    obj = obj[letter]
  }
  return !!obj.isEnd
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const obj = new WordDictionary()
obj.addWord("bad")
obj.addWord("dad")
obj.addWord("mad")
obj.search("pad")
obj.search("bad")
obj.search(".ad")
obj.search("b..")
console.log(
  obj.search("pad"),
  obj.search("bad"),
  obj.search(".ad"),
  obj.search("b..")
)