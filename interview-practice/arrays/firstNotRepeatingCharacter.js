const firstNotRepeatingCharacter = (str) => {
  var obj = {};
  var uniques = [];

  for (var i = str.length - 1; i >= 0; i--) {
    var uniqueIndex = uniques.indexOf(str[i]);
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
      uniques.push(str[i]);
    } else if (uniqueIndex !== -1) {
      uniques.splice(uniqueIndex, 1);
    }
  }
  // console.log(obj);
  return uniques.length ? uniques[uniques.length - 1] : '_';
}

console.log(firstNotRepeatingCharacter('abacabaabacaba') === "_");
// console.log(firstNotRepeatingCharacter('abacabad'))
console.log(firstNotRepeatingCharacter('abacabad') === "c");