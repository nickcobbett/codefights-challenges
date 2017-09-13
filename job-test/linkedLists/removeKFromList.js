var l1 = [3, 1, 2, 3, 4, 5];
// var test1 = removeKFromList(l1, 3)

// Definition for singly-linked list:
class Node {
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
    currentNode.next = new Node(val);

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

// var list = new List();
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// console.log(list);


var list1 = new Node();
list1.multiAdd(l1);
// console.log(list1)
// list1.traverseList(val => console.log(val))



function removeKFromList(list, k) {
  var newList = new Node()

  traverseList(list, (node) => {
    if (node.value !== k) {
      newList.add(node.value)
    }
  })

  return newList;

}
// console.log(list1)
console.log(removeKFromList(list1, 3));


