var Node = function(val) {
  this.value = val || null;
  this.left = null;
  this.right = null;
}

class Stack {
  constructor() {
    this.storage = [];
  }

  push(val) {
    this.storage.push(val);
  }

  pop() {
    return this.storage.pop();
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }
}


function buildTreeFromString(str) {

  var stack = new Stack();
  var result;
  var i = 0;
  while (i < str.length - 1) {
    if (str[i] === '(' && str[i + 1] === ')') {
      i += 2;
    }
    if (str[i] === ')') {
      result = stack.pop();
    }

    if (str[i] === '(' && str[i + 1] !== ')') {
      var val = str[i + 1];
      // account for multiple digit numbers
      while (str[i + 2] !== ' ') {
        val += str[i + 2];
        i++;
      }

      var currentNode = new Node(parseInt(val));
      if (!stack.isEmpty()) {
        var parentNode = stack.peek();
        if (parentNode.left !== null) {
          parentNode.right = currentNode;
        } else {
          parentNode.left = currentNode;
        }
      }
      stack.push(currentNode);
    }
    i++;
  }
  return stack.peek() ? stack.peek() : result;

};

class Tree {
  constructor(node) {
    this.root = node;
  }

  _setDepths(node) {
    var depth = 0;
    var result = [];
    var helper = function(node) {
      if (node.left) {
        depth++;
        helper(node.left);
      }
      if (node.right) {
        depth++;
        helper(node.right)
      }
      result.push({depth: depth, value: node.value});
      depth--;
    }
    helper(node);
    return result;
  };

  getBottomRow() {

    var depths = this._setDepths(this.root);
    var accum = {depth: 0, values: []}
    var lastRow = depths.reduce((prev, next) => {
      if (next.depth > prev.depth) {
        prev.depth = next.depth;
        prev.values = [next.value];
      } else if (next.depth === prev.depth) {
        prev.values.push(next.value);
      }
      return prev;
    }, accum);
    return lastRow.values;
  }
}



function treeBottom(str) {
  var tree = new Tree(buildTreeFromString(str));
  // console.log('tree', tree);
  return tree.getBottomRow();
}

var tree1 = "(2 (7 (2 () ()) (6 (5 () ()) (11 () ()))) (5 () (9 (4 () ()) ())))";
console.log(treeBottom(tree1))

var tree3 = '(1 () ())'
console.log(treeBottom(tree3))

//            2
//          /   \
//        /       \
//      7          5
//    /   \         \
//   /     \         \
//  2       6        9
//        /   \      /
//       /     \    /
//       5     11  4


// var tree1 = "(2 (7 (2 () ()) (6 (5 () ()) (11 () ()))) (5 () (9 (4 () ()) ())))";
// treeBottom(tree1);
// // var tree1ExpectedOutput = [5, 11, 4];
// var tree1Actual = treeBottom(tree1);
// // console.log('tree1', tree1Actual);

// var tree2 = '(2 (1 () ()) (3 () ())';
// var tree2ExpectedOutput = [2, 3];
// var tree2Actual = treeBottom(tree2);
// // console.log('tree2', tree2Actual);

// var tree3 = '(1 () ())'
// var tree3ExpectedOutput = [1];
// // var tree3Actual = treeBottom(tree3);
// // console.log('tree3', tree3Actual);


// tree = tree.replace(/\)|\)/g, "]");
  // var testStr = '(1)'
  // console.log(testStr.slice(2))

// If the string starts with '(', it starts a tree, following 'A' is the root
// If it is, e.g., 'B', that is a leaf
// If it is '(', recurse
// If next is ')', close off the node started above