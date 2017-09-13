function textJustification(words, l) {
  var justified = [];
  var i = 0;

  var word = words[i];
  var nextWord = words[i + 1];
  while (i < words.length) { // split up the lines.
    var k = i;
    var line = words[i];
    while ((k < words.length - 1) && line.length + words[k + 1].length < l) {
      line += (' ' + words[k + 1]);
      k++;
    }
    // center justify
    var diff = l - line.length;
    var wordsInLine = line.split(' ');
    var j = 0;
    while (diff > 0) {
      wordsInLine[j] += ' ';
      diff--;
      if (j === wordsInLine.length - 2) {
        j = 0;
      }
      else if (wordsInLine.length === 1) {
        j = 0;
      }
      else {
        j++;
      }
    }
    justified.push(wordsInLine.join(' '));

    if (i === k) {
      i++;
    } else {
      i = k + 1;
    }
  }

  // left justify last line.
  var line = justified[justified.length - 1].split(' ').filter(char => char !== '').join(' ');

  if (line.length < l) {
    var gap = new Array(l- line.length).fill(' ').join('');
    line += gap;
    justified[justified.length - 1] = line;
  }

  return justified;
}


var words1 = ["This", "is", "an", "example", "of", "text", "justification."];
var twoWords = ["Two", "words."];
var words3 = ["Looks",
 "like",
 "it",
 "can",
 "be",
 "a",
 "tricky",
 "test"]
// var test1 = console.log(textJustification(words1, 16));


// console.log(test1Actual[0].length === test1Expected[0].length)
var test2 = console.log(textJustification(twoWords, 9));
// var test3 = console.log(textJustification(words3, 25))