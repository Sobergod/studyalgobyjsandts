// 节点
interface Node_ts {
  element: string;
  next: null;
}
// 链表
class LinkList_ts {
  head: any;
  constructor(node: Node_ts) {
    this.head = node;
  }
  // 根据value查找节点
  findByValue(element: string) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode === null ? -1 : currentNode;
  }
  // 根据index查找节点
  findByIndex(index: number) {
    let currentNode = this.head,
      pos: number = 0;
    while (currentNode.next !== null && pos !== index) {
      currentNode = currentNode.next;
      pos++;
    }
    return currentNode === null ? -1 : currentNode;
  }
  // 向后插入节点
  insertAfter(newElement: string, element: string) {
    let currentNode = this.findByValue(element);
    if (currentNode === -1) {
      console.log("未找到插入位置");
      return;
    }
    let newNode: Node_ts = {
      element: newElement,
      next: currentNode.next
    };
    currentNode.next = newNode;
  }
  // 查找前一个节点
  findPrev(item: string) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }
    if (currentNode.next === null) {
      return -1;
    }
    return currentNode;
  }
  // 删除节点
  remove(element: string) {
    const currentNode = this.findByValue(element);
    if (currentNode === -1) {
      console.log("没有这个节点");
      return;
    }
    let prevNode = this.findPrev(element);
    prevNode.next = currentNode.next;
  }
  // 遍历显示所有节点
  findAllNodes() {
    let currnetNode = this.head;
    while (currnetNode.next !== null) {
      console.log(currnetNode);
      currnetNode = currnetNode.next;
    }
  }
}

let headNode = { element: "head", next: null };
const linkList = new LinkList_ts(headNode);
linkList.insertAfter("a1", "head");
linkList.insertAfter("a2", "head");
console.log(linkList);
// 游标没法删除
linkList.remove("head");
// 删除节点
linkList.remove("a1");

console.log(linkList);
