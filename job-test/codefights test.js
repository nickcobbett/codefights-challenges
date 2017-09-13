function zigzag(array) {

  var maxLen = 1;
  var i = 0;

  while (i < array.length - 1) {
    var k = i;
    var val = array[k];
    var next = array[k + 1];

    var len = 1;
    var flag;
    next > val ? flag = true : flag = false;

    while (k < array.length - 1 && val !== next) {
      val = array[k];
      next = array[k + 1];
      if ((next > val && flag) || (next < val && !flag)) {
        flag = !flag;
        len++;
        k++;
      } else {
        break;
      }
    }

    if (len > maxLen) {
      maxLen = len;
    }

    i++;

  }
  return maxLen;
}

var test1 = [9, 8, 8, 5, 3, 5, 3, 2, 8, 6]; // [5,3,5,3]
var test2 = [2, 1, 4, 4, 1, 4, 4, 1, 2, 0, 1, 0, 0, 3, 1, 3, 4, 1, 3, 4]; // [4, 1, 2, 0, 1, 0]
var test3 = [4, 4];
var test4 = [1, 2, 1];
var test5 = [1, 2, 2];
var test6 = [1, 2];
var test7 = [1];
console.log('test1', zigzag(test1) === 4);
console.log('test2', zigzag(test2) === 6);
console.log('test3' , zigzag(test3) === 1);
console.log('test4' , zigzag(test4) === 3);
console.log('test5' , zigzag(test5) === 2);
console.log('test6' , zigzag(test6) === 2);
console.log('test7', zigzag(test7) === 1);







// A sequence of integers is called a zigzag sequence if each of its elements is either strictly less than both neighbors or strictly greater than both neighbors. For example, the sequence 4 2 3 1 5 3 is a zigzag, but 7 3 5 5 2 and 3 8 6 4 5 aren't.

// For a given array of integers return the length of its longest contiguous sub-array that is a zigzag sequence.

// Example

// For a = [9, 8, 8, 5, 3, 5, 3, 2, 8, 6], the output should be
// zigzag(a) = 4.

// The longest zigzag sub-arrays are [5, 3, 5, 3] and [3, 2, 8, 6] and they both have length 4.

// For a = [4, 4], the output should be
// zigzag(a) = 1.

// The longest zigzag sub-array is [4] - it has only one element, which is strictly greater than its neighbors (there are none of them).

// Input/Output

// [time limit] 4000ms (js)
// [input] array.integer a

// Guaranteed constraints:
// 2 ≤ a.length ≤ 25,
// 0 ≤ a[i] ≤ 100.

// [output] integer


    // while (array[k] && (array[k] < left)) {
    //   var j = k;
    //   while (array[j] && (array[j] >)) {

    //   }
    //   k++;
    // }




    // zigs = [];
    // array[k] > right ? zigs = [array[k], right] : zigs = [left, array[k]]

    // if (array[k] > left && array[k] > right) {

    // }

    // while ((array[k] > left && array[k] > right) || (array[k] < left && array[k] < right)) {
    //   zigs.push(right)
    //   k++;
    // }
    // console.log(zigs)