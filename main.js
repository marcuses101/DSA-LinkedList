const { LinkedList, _Node } = require("./linkedListPractice");

function thirdFromLast(list) {
  if (list.isEmpty()) console.log("list empty");
  let currentNode = list.head;
  for (let i = 0; i < list.size() - 3; i++) {
    currentNode = currentNode.next;
  }
  return currentNode.value;
}

const headNode = new _Node(1);
const secondNode = new _Node(2);
const thirdNode = new _Node(3);
headNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = headNode;

const CycleList = {
  head: headNode,
};

function cycleList(list) {
  const visitedNodes = [];
  let currentNode = list.head;
  while (currentNode.next) {
    if (visitedNodes.includes(currentNode)) return true;
    visitedNodes.push(currentNode);
    currentNode = currentNode.next;
  }
  return false;
}

function sort(list) {
  function checkOrdered() {
    let current = list.head;
    while (current) {
      if (current.next && current.value > current.next.value) return false;
      current = current.next;
    }
    return true;
  }
  let unordered = !checkOrdered();
  while (unordered) {
    let current = list.head;
    let previous = null;
    while (current.next){
      if (current.value <= current.next.value){
        previous = current;
        current = current.next
      }
      else {
        if (previous === null){
          list.head = current.next
        }
        const now = current
        const next = current.next;
        const nextNext = next.next;
       if (previous?.next) previous.next = next;
        next.next = now;
        now.next = nextNext;
        current = next;
      }
    }
    unordered= !checkOrdered();
  }
}

function main() {
  const list = new LinkedList();
  list.insertLast(10);
  list.insertLast(3);
  list.insertLast(1);
  list.insertLast(2);
  list.insertLast(5);
  list.insertLast(0)
  sort(list);
  list.display();
}

main();
