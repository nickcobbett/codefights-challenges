var sol1 = [['O', '0'],
            ['M', '1'],
            ['Y', '2'],
            ['E', '5'],
            ['N', '6'],
            ['D', '7'],
            ['R', '8'],
            ['S', '9']];
var crypt1 = ["SEND", "MORE", "MONEY"];

function isCryptSolution(crypt, solution) {
  crypt = crypt.map(word => {
    return word.split('').map(char => {
      var num;
      solution.forEach(legend => {
        if (legend[0] === char) {
          num = legend[1];
        }
      })
      return num;
    }).join('');
  });
  // console.log(crypt)

  if ((crypt[0][0] === '0' && crypt[0].length > 1) || (crypt[1][0] === '0' && crypt[1].length > 1) || (crypt[2][0] === '0' && crypt[2].length > 1)) {
    return false;
  } else {
    return parseInt(crypt[0]) + parseInt(crypt[1]) === parseInt(crypt[2]);
  }

}

console.log('test1: ', isCryptSolution(crypt1, sol1) === true);