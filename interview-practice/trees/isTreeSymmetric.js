//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isTreeSymmetric(t) {
  // in order traversal
  // store values in array? see if array is palindromic?

  if (!t) return true;
  var vals = [];
  var inOrderTraversal = (node) => {
    if (node.left) {
      inOrderTraversal(node.left);
    }

    vals.push(node.value);

    if (node.right) {
      inOrderTraversal(node.right);
    }
  }

  inOrderTraversal(t);

  console.log(vals);
  if (vals.length % 2 === 0) return false;

  while (vals.length > 1) {
    if (vals.pop() !== vals.shift()) {
      return false
    }
  }
  return true;
};

t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": {
            "value": 3,
            "left": null,
            "right": null
        },
        "right": {
            "value": 4,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 2,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
}

console.log(isTreeSymmetric(t)) // true