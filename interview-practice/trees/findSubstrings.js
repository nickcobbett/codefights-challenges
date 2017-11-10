class Trie {
  constructor() {
    this.storage = {};
    this.index;
  }

  search(word) {

    if (!word) {
      return true;
    }

    if (this.storage[word[0]]) {
      return this.storage[word[0]].search(word.slice(1));
    } else if (!this.storage[word[0]]) {
      return false;
    }
  }

  _insert(word, index) {
    if (!word) return;

    index = index || 0;
    var char = word[0];
    var node = this;

    while (node.storage[char]) {
      node = node.storage[char];
      index++;
    }
    node.storage[char] = new Trie();
    node.storage[char].index = index;

    index++;
    node.storage[char]._insert(word.slice(1) , index);

  }

  insert(word, index) {
    // insert trie for whole word
    // insert trie for each sub string
    if (!word) return;

    index = index || 0;
    this._insert(word, index);
    index++;
    this.insert(word.slice(1), index);

  }
}
// var trie = new Trie();
// trie.insert('banana');
// console.log(trie);

function findSubstrings(words, parts) {

  // parts = parts.filter(part => {
  //   for (var i = 0; i < words.length; i++) {
  //     // console.log(i)
  //     if (words[i].includes(part)) {
  //       return part;
  //       break;
  //     }
  //   }
  // })
  // console.log(parts)

  // build substring tries for each word
  var tries = words.map(word => {
    var trie = new Trie();
    trie.insert(word);
    return trie;
  });

  // for each trie see if a parts substring exists
  var matches = tries.map((trie, i) => {
    var longestPart = '';
    var indexOfLongestPart = Infinity;

    // for (var j = 0; j < parts.length; j++) {
      // var part = parts[i];
    parts.forEach(part => {
      var char = part[0];
      // see if part exists, and then see if part is longer than previously matched part
      if (part.length >= longestPart.length) {
        if (trie.search(part) && (part.length > longestPart.length || part.length >= longestPart.length && trie.storage[char].index < indexOfLongestPart)) {
          indexOfLongestPart = trie.storage[char].index;
          longestPart = part;
        }
      }
    });
    // } // for loop closing backet

    // build the match string
    if (!longestPart) {
      return words[i];
    } else {
      var output = words[i].substr(0, indexOfLongestPart);
      output += '[';
      output += longestPart;
      output += ']';
      output += words[i].substr(indexOfLongestPart + longestPart.length);
      return output;
    }
  });

  // console.log(matches)
  return matches;

}

var test = (words, parts, expected) => {
  return JSON.stringify(findSubstrings(words, parts)) === JSON.stringify(expected);
}

var words = ["Apple", "Melon", "Orange", "Watermelon"];
var parts = ["a", "mel", "lon", "el", "An"];
var expected = ["Apple", "Me[lon]", "Or[a]nge", "Water[mel]on"];
console.log(test(words, parts, expected));
words = ["neuroses",
 "myopic",
 "sufficient",
 "televise",
 "coccidiosis",
 "gules",
 "during",
 "construe",
 "establish",
 "ethyl"];
parts = ["aaaaa",
 "Aaaa",
 "E",
 "z",
 "Zzzzz",
 "a",
 "mel",
 "lon",
 "el",
 "An",
 "ise",
 "d",
 "g",
 "wnoVV",
 "i",
 "IUMc",
 "P",
 "KQ",
 "QfRz",
 "Xyj",
 "yiHS"
 ];
expected = [
 "neuroses",
 "myop[i]c",
 "suff[i]cient",
 "telev[ise]",
 "cocc[i]diosis",
 "[g]ules",
 "[d]uring",
 "construe",
 "est[a]blish",
 "ethyl"];
console.log(test(words, parts, expected));