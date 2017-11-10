function bubbleSort(items) {

  var swap = function(firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
  }

  var len =  items.length ,
      i, j, stop;

  for (i = 0; i < len; i++){
    for (j = 0, stop = len - i; j < stop - 1; j++){
      if (items[j] > items[j + 1]){
        swap(j, j + 1);
      }
    }
  }

  return items;
}

const test = (items, result) => {
  return JSON.stringify(items.sort()) === JSON.stringify(bubbleSort(items));
}

var items = [2, 4, 1, 5];
var test1 = test(items);
console.log('test1: ', test1)

