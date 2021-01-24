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
    if (this.head === null) this.head = new _Node(item);
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
  }
  remove(item) {
    if (!this.head) return null;

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    let previousNode = this.head;

    while (!(currentNode.value !== item || currentNode === null)) {
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
}
