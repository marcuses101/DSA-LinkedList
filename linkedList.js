class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) return this.insertFirst(item);
    let tempNode = this.head;
    while (tempNode.next !== null) tempNode = tempNode.next;
    tempNode.next = new _Node(item, null);
  }
  find(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) return null;
      curNode = currNode.next;
    }
    return currNode;
  }
  removeNode(item) {
    if (!this.head) return null;
    if (this.head.value === item) {
      this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode!== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}
