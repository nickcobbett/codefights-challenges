//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isSubtree(t1, t2) {
  if (!t1 && !t2) return true;
  if (t1 && !t2) return true;
  if (!t1 && t2) return false;

  var treesEqual = false;

  var compareTrees = (t1, t2) => {
    // console.log(t1, t2)
    if (t1 && (t1.value === t2.value)) {
      treesEqual = true;
    } else {
      treesEqual = false;
      return;
    }
    if (t2.left) compareTrees(t1.left, t2.left);
    if (t2.right) compareTrees(t1.right, t2.right);
  };
  var traverseMainTree = (t1) => {
    if (treesEqual) return;
    if (t1.value === t2.value) {
      compareTrees(t1, t2);
    }
    if (t1.left) traverseMainTree(t1.left);
    if (t1.right) traverseMainTree(t1.right);
  };
  traverseMainTree(t1);

  return treesEqual;
}

t1 = {
    "value": 5,
    "left": {
        "value": 10,
        "left": {
            "value": 4,
            "left": {
                "value": 1,
                "left": null,
                "right": null
            },
            "right": {
                "value": 2,
                "left": null,
                "right": null
            }
        },
        "right": {
            "value": 6,
            "left": null,
            "right": {
                "value": -1,
                "left": null,
                "right": null
            }
        }
    },
    "right": {
        "value": 7,
        "left": null,
        "right": null
    }
}

t2 = {
    "value": 10,
    "left": {
        "value": 4,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 6,
        "left": null,
        "right": {
            "value": -1,
            "left": null,
            "right": null
        }
    }
}

var t3 = {
    "value": 5,
    "left": {
        "value": 10,
        "left": {
            "value": 4,
            "left": {
                "value": 1,
                "left": null,
                "right": null
            },
            "right": {
                "value": 2,
                "left": null,
                "right": null
            }
        },
        "right": {
            "value": 6,
            "left": {
                "value": -1,
                "left": null,
                "right": null
            },
            "right": null
        }
    },
    "right": {
        "value": 7,
        "left": null,
        "right": null
    }
}

var t4 = {
    "value": 10,
    "left": {
        "value": 4,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 6,
        "left": null,
        "right": {
            "value": -1,
            "left": null,
            "right": null
        }
    }
}
console.log(isSubtree(t1, t2)) // true
console.log(isSubtree(t3, t4)) // false