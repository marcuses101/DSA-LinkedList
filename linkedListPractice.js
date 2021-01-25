class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    if (this.head === null) {
      this.head = new _Node(item);
      return;
    }
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.head = new _Node(item);
      return;
    }
    let tempNode = this.head;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(item);
  }
  remove(item) {
    if (!this.head) return null;

    if (this.head.value === item) {
      console.log("found");
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode !== null && currentNode.value !== item) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (!currentNode) {
      console.log("Item not found");
      return;
    }

    previousNode.next = currentNode.next;
  }
  find(item) {
    let currentNode = this.head;
    if (!this.head) return null;
    while (currentNode.value !== item) {
      if (currentNode.next === null) return null;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  insertBefore(target, item) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.next.value === target) {
        currentNode.next = new _Node(item, currentNode.next);
        return;
      }
      currentNode = currentNode.next;
    }
    console.log("target not found");
  }
  insertAfter(afterTarget, item) {
    const nodeToInsertAfter = this.find(afterTarget);
    if (!nodeToInsertAfter) console.log("item not found");
    const newNode = new _Node(item, nodeToInsertAfter.next);
    nodeToInsertAfter.next = newNode;
  }
  insertAt(index, item) {
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (!currentNode) return console.log("index error");
      currentNode = currentNode.next;
    }
    currentNode.next = new _Node(item, currentNode.next);
  }
  display() {
    if (!this.head) {
      console.log("list empty");
      return;
    }
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
  size() {
    if (this.head === null) return 0;
    let count = 1;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      count++;
    }
    return count;
  }
  isEmpty() {
    return this.head === null ? true : false;
  }
  findPrevious(item){
    let currentNode = this.head;
    while (currentNode.next !== null){
      if (currentNode.next.value === item) return currentNode;
      currentNode = currentNode.next;
    }
    console.log('not found')
  }
  findLast(){
    if (this.head === null) return null;
    let currentNode = this.head;
    while (!currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  reverseList(){

    function reverse(node,previousNode=null){
      const nextNode = node.next;
      node.next = previousNode;
      if (!nextNode) {
        return node
      };
     return reverse(nextNode,node);
    }
  this.head = reverse(this.head)
  }
}

module.exports = { LinkedList ,_Node};
