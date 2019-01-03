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
  // 删除节点
  // 遍历显示所有节点
}

let headNode = { element: "head", next: null };
const linkList = new LinkList_ts(headNode);
linkList.insertAfter("a1", "head");
linkList.insertAfter("a2", "head");
console.log(linkList);
