function areFollowingPatterns(strings, patterns) {
  var keys = {};
  var vals = {};
  for (var i = 0; i < strings.length; i++) {
    var key = strings[i];
    var value = patterns[i];
    if (!keys[key]) {
      keys[key] = value;
    }
    if (!vals[value]) {
      vals[value] = key;
    }
    if (keys[key] !== value || vals[value] !== key) {
      return false;
    }
  }
  return true;
}

var str1 = ['cat', 'dog', 'dog'];
var pattern1 = ['a', 'b', 'b'];
console.log('test1', areFollowingPatterns(str1, pattern1) === true);

var str2 = ['cat', 'dog', 'dogggy'];
var pattern2 = ['a', 'b', 'b'];
console.log('test2', areFollowingPatterns(str2, pattern2) === false);