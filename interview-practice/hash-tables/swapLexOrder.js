function isNotEmptyObject(obj) {
  for(var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return true;
    }
  }
  return false;
}

function swapLexOrder(str, pairs) {
  // while swap is still yielding new results go through all the pairs
  // swap letters and add to swaps and compare to maxStr
  var maxStr = '';
  var swaps = {};
  swaps[str] = [...pairs];
  var todos = [];
  todos.push(str);

  const replaceAt = (str, index, replacement) => {
    return str.substr(0, index) + replacement + str.substr(index + replacement.length);
  }

  const swapLtrs = (str, pair) => {

    var str = str;
    var a = pair[0] - 1;
    var b = pair[1] - 1;
    var temp = str[a];

    str = replaceAt(str, a, str[b]);
    str = replaceAt(str, b, temp);

    return str;
  };

  while (todos.length) {
    todos.forEach((todo, i) => {
      swaps[todo].forEach((pair, k) => {
        console.log(swaps)
        var swap = swapLtrs(todo, pair);
        // console.log(todo, swap)
        // console.log('swaps', swaps)
        if (swap > maxStr) maxStr = swap;
        if (!swaps[swap]) {
          var pairsToDo = [...pairs];
          pairsToDo.splice(pairsToDo.indexOf(pair), 1);
          swaps[swap] = pairsToDo;
        } else {
          swaps[swap].splice(swaps[swap].indexOf(pair), 1);
        }

        if (swaps[swap].length) {
          todos.push(swap);
        } else {
          todos.splice(todos.indexOf(swap), 1);
        }
      });
      todos.splice(todos.indexOf(todo), 1);
      swaps[todo] = [];
    })
  }

  // for all of todos make all its swaps
  // abdc -> 1-4, 3-4,
  // add to swaps
    // swaps[abdc] = [] (empty)
    // swaps[cbda] = [3,4] splice out 1,4 since its had that done. needs to have 3,4 done
    // swaps[abcd] = [1,4] splice out 3,4 '' '' '' needs 1,4 done
  // since theyre not full they get added to a todo cache
    // todos[cbda] = 1, [abcd] = 1
    // while todos has props
    // for each todo


  // console.log('swaps', swaps);
  // console.log('maxStr', maxStr);
  return maxStr;
};


var str = "abdc";
var pairs = [[1,4], [3,4]];
console.log('test1: ', swapLexOrder(str, pairs) === 'dbca');
str = "acxrabdz"
pairs = [[1,3], [6,8], [3,8], [2,7]];
// console.log('test3: ', swapLexOrder(str, pairs) === 'zdxrabca');
str = "z"
pairs = [];
// console.log('test4: ', swapLexOrder(str, pairs) === 'z');
str = "fixmfbhyutghwbyezkveyameoamqoi";
pairs = [[8,5],
 [10,8],
 [4,18],
 [20,12],
 [5,2],
 [17,2],
 [13,25],
 [29,12],
 [22,2],
 [17,11]];
// console.log('test6: ', swapLexOrder(str, pairs) === 'fzxmybhtuigowbyefkvhyameoamqei');

str = "lvvyfrbhgiyexoirhunnuejzhesylojwbyatfkrv";
pairs = [[13,23],
 [13,28],
 [15,20],
 [24,29],
 [6,7],
 [3,4],
 [21,30],
 [2,13],
 [12,15],
 [19,23],
 [10,19],
 [13,14],
 [6,16],
 [17,25],
 [6,21],
 [17,26],
 [5,6],
 [12,24]];
// console.log('test7: ', swapLexOrder(str, pairs) === 'lyyvurrhgxyzvonohunlfejihesiebjwbyatfkrv');