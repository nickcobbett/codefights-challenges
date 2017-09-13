class ListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }

  add(val) {
    var currentNode = this;

    if (!currentNode.value) {
      this.value = val;
      return this;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new ListNode(val);

    return this;
  }

  multiAdd(array) {
    array.forEach(val => this.add(val));
    return this;
  }

  traverseList(cb) {
    var currentNode = this;
    while (currentNode) {
      cb(currentNode);
      currentNode = currentNode.next;
    }
  }
}

const traverseList = (node, cb) => {
  var currentNode = node;
  while (currentNode) {
    cb(currentNode);
    currentNode = currentNode.next;
  }
}
// end helper testing class and functions

// begin
const reverseList = node => {
  var prev = null;
  while (node) {
    var temp = prev;
    prev = new ListNode(node.value);
    prev.next = temp;
    node = node.next;
  }
  return prev;
}


function addTwoHugeNumbers(a, b) {
  // reverse the lists
  a = reverseList(a);
  b = reverseList(b);
  // sum the lists into new list, handle the carry
  var newList = null;
  var carry = 0;
  while (a || b || carry) {
    var num1;
    var num2;
    a ? num1 = a.value : num1 = 0;
    b ? num2 = b.value : num2 = 0;

    var sum = num1 + num2 + carry;
    var str = sum.toString();
    var maxSum = parseInt(str.slice(-4));

    var temp = newList;
    newList = new ListNode(maxSum);
    newList.next = temp;

    // handle new values and carry
    a ? a = a.next : a = null;
    b ? b = b.next : b = null;
    str.length > 4 ? carry = parseInt(str.charAt(0)) : carry = 0;
  }

  return newList;
}
// end

// tests

var a1 = new ListNode();
var b1 = new ListNode();
a1.multiAdd([9876, 5432, 1999]);
b1.multiAdd([1, 8001]);
// console.log('test1 results: ', addTwoHugeNumbers(a1, b1)); // expect: [9876, 5434, 0]


var a2 = new ListNode();
var b2 = new ListNode();
a2.add(1);
b2.multiAdd([1, 2, 3]);
// console.log('test2: ', addTwoHugeNumbers(a2, b2))


var a3 = new ListNode();
var b3 = new ListNode();
a3.add(1);
b3.multiAdd([9999, 9999, 9999, 9999, 9999, 9999]);
console.log('test3: ', addTwoHugeNumbers(a3, b3))
