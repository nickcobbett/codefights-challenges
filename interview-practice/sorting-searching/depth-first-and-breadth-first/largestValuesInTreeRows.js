function largestValuesInTreeRows(t) {
  if (!t) return [];

  var queue = [[t]];
  var maxes = [];
  var level = 0;

  while (queue.length) {
    var nodes = queue.pop();
    var children = [];
    maxes[level] = -Infinity;

    nodes.forEach(node => {
      if (node.value > maxes[level]) {
        maxes[level] = node.value;
      }
      if (node.left) {
        children.push(node.left);
      }
      if (node.right) {
        children.push(node.right);
      }
    });

    if (children.length) {
      queue.push(children);
    }

    level++;

  }
  return maxes;
}

var t =  {
    "value": -1,
    "left": {
        "value": 5,
        "left": null,
        "right": null
    },
    "right": {
        "value": 7,
        "left": null,
        "right": {
            "value": 1,
            "left": null,
            "right": null
        }
    }
}
// console.log('test1',largestValuesInTreeRows(t)); // [1,2,4,3,5]

t = {
    "value": -1,
    "left": null,
    "right": null
}

// console.log('test2', largestValuesInTreeRows(t));

t = {
    "value": -1,
    "left": {
        "value": 5,
        "left": null,
        "right": null
    },
    "right": {
        "value": 7,
        "left": null,
        "right": {
            "value": 1,
            "left": {
                "value": 5,
                "left": null,
                "right": null
            },
            "right": null
        }
    }
}

// console.log('test4', largestValuesInTreeRows(t));

t = {
    "value": -1,
    "left": {
        "value": 5,
        "left": {
            "value": -1,
            "left": {
                "value": 10,
                "left": null,
                "right": null
            },
            "right": null
        },
        "right": null
    },
    "right": {
        "value": 7,
        "left": null,
        "right": {
            "value": 1,
            "left": {
                "value": 5,
                "left": null,
                "right": null
            },
            "right": null
        }
    }
}

// console.log('test5', largestValuesInTreeRows(t)); // [-1, 7, 1, 10]

t = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: null
    }
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 7,
      left: null,
      right: null
    }
  }
}

console.log('test17', largestValuesInTreeRows(t)); // [1, 3, 7]

t = null

// console.log('test empty t', largestValuesInTreeRows(t)); // [1, 3, 7]