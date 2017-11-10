//
// Definition for binary tree:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}


const restoreBinaryTree = (inorder, preorder) => {
  var tree = new Tree(preorder[0]);

  var leftInorder = inorder.slice(0, inorder.indexOf(preorder[0]));
  var rightInorder = inorder.slice(inorder.indexOf(preorder[0]) + 1);
  var leftPreorder = preorder.slice(1, leftInorder.length + 1);
  var rightPreorder = preorder.slice(leftInorder.length + 1);

  if (leftInorder.length) {
    tree.left = restoreBinaryTree(leftInorder, leftPreorder);
  }
  if (rightInorder.length) {
    tree.right = restoreBinaryTree(rightInorder, rightPreorder);
  }

  return tree;
};









var inorder = [4, 2, 1, 5, 3, 6];
var preorder = [1, 2, 4, 3, 5, 6];
var expected = {
    "value": 1,
    "left": {
        "value": 2,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": null
    },
    "right": {
        "value": 3,
        "left": {
            "value": 5,
            "left": null,
            "right": null
        },
        "right": {
            "value": 6,
            "left": null,
            "right": null
        }
    }
}

var test = (inorder, preorder, expected) => {
  return JSON.stringify(restoreBinaryTree(inorder, preorder)) === JSON.stringify(expected);
}

// console.log(restoreBinaryTree(inorder, preorder))

// console.log(test(inorder, preorder, expected)); // true

inorder = [8, 4, 2, 7, 1, 9, 5, 10, 3, 6];
preorder = [1, 2, 4, 8, 7, 3, 5, 9, 10, 6];
expected = {
    "value": 1,
    "left": {
        "value": 2,
        "left": {
            "value": 4,
            "left": {
              "value": 8,
              "left": null,
              "right": null
            },
            "right": null
        },
        "right": {
          value: 7,
          left: null,
          right: null
        }
    },
    "right": {
        "value": 3,
        "left": {
            "value": 5,
            "left": {
              "value": 9,
              "left": null,
              "right": null
            },
            "right": {
              "value": 10,
              "left": null,
              "right": null
            }
        },
        "right": {
            "value": 6,
            "left": null,
            "right": null
        }
    }
}

// var vals = [];
// var inOrder = (t) => {
//   if (t.left) inOrder(t.left);
//   vals.push(t.value);
//   if (t.right) inOrder(t.right)
// }
// inOrder(expected)
// console.log(vals)
// console.log(restoreBinaryTree(inorder, preorder))
console.log(test(inorder, preorder, expected)); // true