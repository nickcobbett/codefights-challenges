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

function rearrangeLastN(list, n) {
  // reverse list
  // remove vals from top of reversed list while i < n
  list = reverseList(list);
  var newList = null;
  var currentNode = list;
  var i = 0;
  while (i < n) {
    var temp = newList;
    newList = new ListNode(currentNode.value);
    newList.next = temp;
    currentNode = currentNode.next
    i++;
  }


  return concatLists(newList, currentNode);
}



var l1 = new ListNode();
l1.multiAdd([1, 2, 3, 4, 5]);
console.log('test1', rearrangeLastN(l1, 3)); // 3, 4, 5, 1, 2

var l2 = new ListNode();