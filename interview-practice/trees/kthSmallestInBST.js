//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
class Queue {
  constructor(n) {
    this.storage = [];
    this.maxSize = n;
  }

  push(val) {
    this.storage.push(val);
    if (this.storage.length > this.maxSize) {
      this.storage.pop();
    }
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }

  pop() {
    return this.storage.pop();
  }

  size() {
    return this.storage.length;
  }
}

function kthSmallestInBST(t, k) {
  var vals = new Queue(k);
  var inOrderTraversal = (node) => {
    if (vals.size() === k) return;

    if (node.left) {
      inOrderTraversal(node.left);
    }

    vals.push(node.value);

    if (node.right) {
      inOrderTraversal(node.right);
    }
  };
  // console.log(vals)
  inOrderTraversal(t);
  return vals.peek();
}

var t = {
    "value": 3,
    "left": {
        "value": 1,
        "left": null,
        "right": null
    },
    "right": {
        "value": 5,
        "left": {
            "value": 4,
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

console.log(kthSmallestInBST(t, 4)) // 5