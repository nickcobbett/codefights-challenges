//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

class Queue {
  constructor(val) {
    this.storage = [val];
  }

  pop() {
    return this.storage.pop();
  }

  push(val) {
    this.storage.unshift(val)
  }

  isEmpty() {
    return this.storage.length === 0;
  }
}

function traverseTree(t) {
  var output = [];
  if (!t) return output;
  // grab the root value
  // grab left and right values
  var queue = new Queue(t);
  while (!queue.isEmpty()) {
    var currentNode = queue.pop();
    output.push(currentNode.value);

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);

  }
  return output;
}

var t =  {
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 4,
        "left": {
            "value": 5,
            "left": null,
            "right": null
        },
        "right": null
    }
}

console.log(traverseTree(t)); // [1,2,4,3,5]