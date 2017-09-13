var grid1 =
       [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']];
var grid2 =
       [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']];

var grid3 =
[[".",".","4",".",".",".","6","3","."],
 [".",".",".",".",".",".",".",".","."],
 ["5",".",".",".",".",".",".","9","."],
 [".",".",".","5","6",".",".",".","."],
 ["4",".","3",".",".",".",".",".","1"],
 [".",".",".","7",".",".",".",".","."],
 [".",".",".","5",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."]]


 var grid4 = [[".","4",".",".",".",".",".",".","."],
 [".",".","4",".",".",".",".",".","."],
 [".",".",".","1",".",".","7",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".","3",".",".",".","6","."],
 [".",".",".",".",".","6",".","9","."],
 [".",".",".",".","1",".",".",".","."],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","8",".",".",".",".","."]];

function sudoku2(grid) {
    // check if any rows contain dups
    // while doing this create object at index with array of values for cols
  // check if any cols contain dups

  // check if any 9x9 squares contain dups
    // create regions
  var rows = [];
  var cols = [];
  var regions = { // key: tl = topLeft, mm = middleMiddle, br = bottomRight
    tl: [],
    tm: [],
    tr: [],
    ml: [],
    mm: [],
    mr: [],
    bl: [],
    bm: [],
    br: []
  };

  for (var i = 0; i < grid.length; i++) {
    var row = grid[i];
    rows[i] = [];
    for (var j = 0; j < row.length; j++) {
      // create columns
      if (!cols[j]) {
        cols[j] = [];
      }
      var num = parseInt(row[j]);
      // check if rows[i] has a value for num and ignore periods
      if (!isNaN(num)) {
        if (rows[i][num]) {
          return false;
        } else {
          rows[i][num] = num;
        }
        // check if cols[j] has a value for num
        if (cols[j][num]) {
          return false;
        } else {
          cols[j][num] = num;
        }
        // check regions
        if (i >= 0 && i <= 2) { // top regions
          if (j >= 0 && j <= 2) { // tl
            if (regions.tl.includes(num)) {
              return false;
            } else {
              regions.tl.push(num);
            }
          }
          if (j >= 3 && j <= 5) { // tm
            if (regions.tm.includes(num)) {
              return false;
            } else {
              regions.tm.push(num);
            }
          }
          if (j >= 6 && j <= 8) { // tr
            if (regions.tr.includes(num)) {
              return false;
            } else {
              regions.tr.push(num);
            }
          }
        }
        if (i >= 3 && i <= 5) { // middle regions
          if (j >= 0 && j <= 2) { // ml
            if (regions.ml.includes(num)) {
              return false;
            } else {
              regions.ml.push(num);
            }
          }
          if (j >= 3 && j <= 5) { // mm
            if (regions.mm.includes(num)) {
              return false;
            } else {
              regions.mm.push(num);
            }
          }
          if (j >= 6 && j <= 8) { // mr
            if (regions.mr.includes(num)) {
              return false;
            } else {
              regions.mr.push(num);
            }
          }
        }
        if (i >= 6 && i <= 8) { // bottom regions
          if (j >= 0 && j <= 2) { // bl
            if (regions.bl.includes(num)) {
              return false;
            } else {
              regions.tl.push(num);
            }
          }
          if (j >= 3 && j <= 5) { // bm
            if (regions.bm.includes(num)) {
              return false;
            } else {
              regions.bm.push(num);
            }
          }
          if (j >= 6 && j <= 8) { // br
            if (regions.br.includes(num)) {
              return false;
            } else {
              regions.br.push(num);
            }
          }
        }
      }

    }
  }

  return true;
}


console.log('test1: ', sudoku2(grid1) === true)
console.log('test2: ', sudoku2(grid2) === false)
console.log('test3: ', sudoku2(grid3) === false)
console.log('test4: ', sudoku2(grid4) === false)