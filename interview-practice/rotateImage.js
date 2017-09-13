function rotateImage(matrix) {

  var minRowIndex = 0;
  var minColIndex = 0;
  var maxRowIndex = matrix.length - 1;
  var maxColIndex = matrix[0].length - 1;

  while (maxRowIndex - minRowIndex > 0) {
    // grab all the corner values
    var topLeft = matrix[minRowIndex][minColIndex];
    var bottomLeft = matrix[maxRowIndex][minColIndex];
    var topRight = matrix[minRowIndex][maxColIndex];
    var bottomRight = matrix[maxRowIndex][maxColIndex];

    // store nextVals in an array
    var newVals = [];

    // store left col
    for (var y = maxRowIndex - 1; y > minRowIndex; y--) {
      newVals.push(matrix[y][minColIndex])
    }
    // swap vals from newVals with top row
    var i = 0;
    for (var x = minColIndex + 1; x < maxColIndex; x++) {
      var a = newVals[i];
      var b = matrix[minRowIndex][x];
      matrix[minRowIndex][x] = a;
      newVals[i] = b;
      i++;
    }
    // swap vals from newVals with right col
    i = 0;
    for (var y = minRowIndex + 1; y < maxRowIndex; y++) {
      var a = newVals[i];
      var b = matrix[y][maxColIndex];
      matrix[y][maxColIndex] = a;
      newVals[i] = b;
      i++;
    }

    // swap vals from newVals with bottom row
    i = 0;
    for (var x = maxColIndex - 1; x > minColIndex; x--) {
      var a = newVals[i];
      var b = matrix[maxRowIndex][x];
      matrix[maxRowIndex][x] = a;
      newVals[i] = b;
      i++;
    }
    // insert vals from newVals to left col
    i = 0;
    for (var y = maxRowIndex - 1; y > minRowIndex; y--) {
      matrix[y][minColIndex] = newVals[i];
      i++;
    }
    // insert corners to new positions
    matrix[minRowIndex][maxColIndex] = topLeft;
    matrix[maxRowIndex][maxColIndex] = topRight
    matrix[minRowIndex][minColIndex] = bottomLeft;
    matrix[maxRowIndex][minColIndex] = bottomRight;
    // change dimensions
    minRowIndex++;
    minColIndex++;
    maxRowIndex--;
    maxColIndex--;
  }
  return matrix;
}

var a1 =
[[1,2,3],
 [4,5,6],
 [7,8,9]];
var a1Expected =
[[7,4,1],
 [8,5,2],
 [9,6,3]];
var a2 =
[[1, 2, 3, 4],
 [5, 6, 7, 8],
 [9, 10,11,12],
 [13,14,15,16]]
var a2Expected =
[ [ 13, 9, 5, 1 ],
  [ 14, 10, 6, 2 ],
  [ 15, 11, 7, 3 ],
  [ 16, 12, 8, 4 ] ];
var a3 = [
[1, 2],
[3, 4]];
var a3Expected = [
[3, 1],
[4, 2]];
var a4 = [[40,12,15,37,33,11,45,13,25,3],
 [37,35,15,43,23,12,22,29,46,43],
 [44,19,15,12,30,2,45,7,47,6],
 [48,4,40,10,16,22,18,36,27,48],
 [45,17,36,28,47,46,8,4,17,3],
 [14,9,33,1,6,31,7,38,25,17],
 [31,9,17,11,29,42,38,10,48,6],
 [12,13,42,3,47,24,28,22,3,47],
 [38,23,26,3,23,27,14,40,15,22],
 [8,46,20,21,35,4,36,18,32,3]];
var a4Expected =
[[8,38,12,31,14,45,48,44,37,40],
 [46,23,13,9,9,17,4,19,35,12],
 [20,26,42,17,33,36,40,15,15,15],
 [21,3,3,11,1,28,10,12,43,37],
 [35,23,47,29,6,47,16,30,23,33],
 [4,27,24,42,31,46,22,2,12,11],
 [36,14,28,38,7,8,18,45,22,45],
 [18,40,22,10,38,4,36,7,29,13],
 [32,15,3,48,25,17,27,47,46,25],
 [3,22,47,6,17,3,48,6,43,3]];
var a5 =
[[1, 2, 3, 4, 5, 6],
 [7, 8, 9, 10,11,12],
 [13,14,15,16,17,18],
 [19,20,21,22,23,24],
 [25,26,27,28,29,30],
 [31,32,33,34,35,36]];
var a5Expected =
[[31, 25, 19, 13, 7, 1],
[32, 26, 20, 14, 8, 2],
[33, 27, 21, 15, 9, 3],
[34, 28, 22, 16, 10, 4],
[35, 29, 23, 17, 11, 5],
[36, 30, 24, 18, 12, 6]]
console.log('Test a1: ', JSON.stringify(rotateImage(a1)) === JSON.stringify(a1Expected));
console.log('Test a2: ',JSON.stringify(rotateImage(a2)) === JSON.stringify(a2Expected));
console.log('Test a3: ', JSON.stringify(rotateImage(a3)) === JSON.stringify(a3Expected));
console.log('Test a4: ', JSON.stringify(rotateImage(a4)) === JSON.stringify(a4Expected));
console.log('Test a5: ', JSON.stringify(rotateImage(a5)) === JSON.stringify(a5Expected));

// Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).
