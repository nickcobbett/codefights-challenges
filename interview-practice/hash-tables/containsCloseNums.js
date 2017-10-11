function containsCloseNums(nums, k) {
  var hash = {};

  for (var i = 0; i < nums.length; i++) {
    var key = nums[i].toString();
    if (!hash[key]) {
      hash[key] = [];
    }

    hash[key].push(i);
    hash[key].sort();

    var bucket = hash[key];
    if (bucket.length > 1) {
      var diff;
      for (var j = 0; j < bucket.length - 1; j++) {
        diff = Math.abs(bucket[j] - bucket[j + 1]);
        if (diff <= k) {
          return true;
        }
      }
    }
  }
  return false;
}

var nums = [0, 1, 2, 3, 5, 2];
var k = 3;
console.log('test1: ', containsCloseNums(nums, k) === true);