function firstNotRepeatingCharacter(s) {
  var uniques = [];
  var dups = {};
  var chars = s.split('');
  chars.forEach((char) => {
    // is it in dups?
      // y?
        // is it in uniqs?
          // y? remove from uniques
      // n? add to uniqs
    if (!dups[char]) {
      uniques.push(char);
    } else {
      var indexOfChar = uniques.indexOf(char);
      indexOfChar !== -1 ? uniques.splice(indexOfChar, 1) : null;
    }
    dups[char] = 1;
  });
  return uniques[0] || '_';
}

var s1 = "abacabad";
console.log(firstNotRepeatingCharacter(s1)); // 'c'

var s2 = "abacabaabacaba";
console.log(firstNotRepeatingCharacter(s2)); // '_'

var s3 = "bcccccccb";
console.log(firstNotRepeatingCharacter(s3)); // '_'

// Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.