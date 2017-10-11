function possibleSums(coins, quantity) {
  var combos = {};
  var sums = {};
  var count = 0;
  var key = 0;

  coins.forEach((coin, i) => {
    var key1 = key.toString();
    combos[key1] = [];
    for (var q = 1; q <= quantity[i]; q++) {
      combos[key1].push(coin*q)
      if (!sums[(coin*q).toString()]) {
        sums[(coin*q).toString()] = 1;
        count++;
      }
    }
    combos[key1].forEach(sum1 => {
      for (var key2 in combos) {
        if (key2 === key1) {
          continue;
        }
        combos[key2].forEach(sum2 => {
          var sum3 = sum1 + sum2;
          combos[key1].push(sum3);
          if (!sums[sum3.toString()]) {
            sums[sum3.toString()] = 1;
            count++;
          }
        })
      }
    })
    key++;
  });

  // console.log('combos', combos);
  // console.log('sums', sums);
  return count;
}

var coins = [10, 50, 100];
var quantity = [1, 2, 1];
console.log('test1: ', possibleSums(coins, quantity)); // 9
coins = [10, 50, 100, 500];
quantity = [5, 3, 2, 2];
console.log('test2: ', possibleSums(coins, quantity)); // 122
coins = [1];
quantity = [5];
console.log('test3: ', possibleSums(coins, quantity)); // 5
coins = [1, 1];
quantity = [2, 3];
console.log('test4: ', possibleSums(coins, quantity)); // 5
coins = [1, 2];
quantity = [50000, 2];
console.log('test5: ', possibleSums(coins, quantity)); // 50004
coins = [3, 1, 1]
quantity = [111, 84, 104]
console.log('test7', possibleSums(coins, quantity)); // 521