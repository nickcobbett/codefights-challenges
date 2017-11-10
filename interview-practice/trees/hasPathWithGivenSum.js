// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
// need to take all the root to leaf paths, if one of them equals s return, else keep going
function hasPathWithGivenSum(t, s) {
  if (!t && !s) return true;
  if (!t && s) return false;

  var hasPath = false;
  var traverse = (node, sum) => {
    var pathSum = sum || 0;
    if (hasPath) return;

    pathSum += node.value;

    if (node.left) traverse(node.left, pathSum);
    if (node.right) traverse(node.right, pathSum);

    if (!node.left && !node.right && (pathSum === s)) {
      hasPath = true;
      return;
    }

  };

  traverse(t);

  return hasPath;
}

t = {
    "value": 4,
    "left": {
        "value": 1,
        "left": {
            "value": -2,
            "left": null,
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "value": 3,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": {
                "value": -2,
                "left": null,
                "right": null
            },
            "right": {
                "value": -3,
                "left": null,
                "right": null
            }
        }
    }
};

console.log(hasPathWithGivenSum(t, 7)) // true