// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

const traverseList = (node, cb) => {
  var currentNode = node;
  while (currentNode) {
    cb(currentNode);
    currentNode = currentNode.next;
  }
}

function isListPalindrome(l) {
  var array = [];

  traverseList(l, (node) => {
    array.push(node.value);
  })

  return JSON.stringify(array) === JSON.stringify(array.reverse());
}
