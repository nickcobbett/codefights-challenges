var str = "lvvyfrbhgiyexoirhunnuejzhesylojwbyatfkrv";
var pairs = [[13,23],
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

var test = pairs.forEach(pair => {
   console.log(str[pair[0]], str[pair[1]])
})

