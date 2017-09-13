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

function mergeTwoLinkedLists(l1, l2) {
  // traverse each list
  // if one is lower than the other grab that value and advance that list
  // if values are equal grab each value and advance both lists.

  var mergedList = null;

  while (l1 && l2) {
    var temp = mergedList;
    if (l1.value < l2.value) {
      mergedList = new ListNode(l1.value);
      mergedList.next = temp;
      l1 = l1.next;
    } else if (l2.value < l1.value) {
      mergedList = new ListNode(l2.value);
      mergedList.next = temp;
      l2 = l2.next;
    } else {
      mergedList = new ListNode(l1.value);
      mergedList.next = new ListNode(l2.value);
      mergedList.next.next = temp;
      l1 = l1.next;
      l2 = l2.next;
    }
  }

  while (l1) {
    var temp = mergedList;
    mergedList = new ListNode(l1.value);
    mergedList.next = temp;
    l1 = l1.next;
  }

  while (l2) {
    var temp = mergedList;
    mergedList = new ListNode(l2.value);
    mergedList.next = temp;
    l2 = l2.next;
  }

  return reverseList(mergedList);
}



var l1 = new ListNode();
var l2 = new ListNode();
l1.multiAdd([1, 2, 3]);
l2.multiAdd([4, 5, 6]);
console.log(mergeTwoLinkedLists(l1, l2));