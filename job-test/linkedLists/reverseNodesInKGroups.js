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

// const reverseList = node => {
//   var prev = null;
//   while (node) {
//     var temp = prev;
//     prev = new ListNode(node.value);
//     prev.next = temp;
//     node = node.next;
//   }
//   return prev;
// }
// end helper testing class and functions

// const reverseList = node => {
//   var prev = null;
//   while (node) {
//     var temp = prev;
//     prev = new ListNode(node.value);
//     prev.next = temp;
//     node = node.next;
//   }
//   return prev;
// }
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

const concatLists = (l1, l2) => {
  if (!l1) {
    return l2;
  }

  var currentNode = l1;
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = l2;
  return l1;
}

function reverseNodesInKGroups(l, k) {
  // grab k num of nodes and append to newlist
  // if list count < k, reverse that group before prepending
  // reverse list and return

  var newList = null;
  var count = 1;

  while (l) {
    // build group
    var group = null;
    while (count <= k && l) {
      var temp = group;
      group = new ListNode(l.value);
      group.next = temp;

      l = l.next;
      count++;
    }


    if (count === k) { // reverse group
      group = reverseList(group);
    }

    var temp = newList;
    newList = concatLists(temp, group);
    // concat (prepend) group

    count = 1;
  }
  return newList;

}



var l1 = new ListNode();
l1.multiAdd([1, 2, 3, 4, 5]);
var k1 = 2;
console.log('test1', reverseNodesInKGroups(l1, k1));