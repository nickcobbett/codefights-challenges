function findProfession(level, pos) {
  var root = 'Engineer';
  var getLen = (level) => Math.pow(2, level); // 8
  while (pos > 1) {
    if (pos > (getLen(level) / 2)) {
      root === 'Engineer' ? root = 'Doctor' : root = 'Engineer';
      pos -= Math.pow(2, level - 1);
    }
    level--;
  }
  return root;
}


console.log(findProfession(1,1) === 'Engineer') // Engineer
console.log(findProfession(2,2) === 'Doctor') // Doctor
console.log(findProfession(3,1) === 'Engineer') // Engineer
console.log(findProfession(3,2) === 'Doctor') // Doctor
console.log(findProfession(3,3) === 'Doctor') // Doctor
console.log(findProfession(3,4) === 'Engineer') // Engineer
console.log(findProfession(25,16777216) === 'Engineer') // Engineer
console.log(findProfession(8,100) === 'Engineer') // Engineer
console.log(findProfession(10,470) === 'Engineer') // Engineer



// function findProfession(level, pos) {
//   var parent = 'Engineer';
//   var len = (level) => Math.pow(2, level - 1); // 4
//   while (pos > 2) {
//     // console.log('len', len(level))
//     // console.log('pos ', pos)
//     // console.log('math', pos > (len(level) / 2))
//     if (pos > (len(level) / 2)) {
//       parent === 'Engineer' ? parent = 'Doctor' : parent = 'Engineer';
//       pos -= Math.pow(2, level - 2);
//     }
//     // console.log('parent', parent)
//     level--;
//   }

//   // console.log('final len', len(level))
//   // console.log('final pos ', pos)

//   if (parent === 'Engineer') {
//     if (pos === 1) {
//       return 'Engineer';
//     } else {
//       return 'Doctor';
//     }
//   } else {
//     if (pos === 1) {
//       return 'Doctor';
//     } else {
//       return 'Engineer';
//     }
//   }
// }
