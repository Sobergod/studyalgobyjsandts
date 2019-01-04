// 节点
class Node_js {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
// 链表
class LinkList {
  constructor() {
    this.head = new Node_js("head");
  }
  // 获取链表长度
  getLinkListLength() {
    let length = 0;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      length++;
      currentNode = currentNode.next;
    }
    return length;
  }
  // 查找节点根据value
  findByValue(item) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode === null ? -1 : currentNode;
  }
  // 查找节点根据index
  findByInde(index) {
    let currentNode = this.head;
    let pos = 0;
    let linkListLength = this.getLinkListLength();
    if (index > linkListLength || index < 0) {
      console.log("下标越界");
      return;
    }
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next;
      pos++;
    }
    return currentNode === null ? -1 : currentNode;
  }
  // 向后插入节点
  insertAfter(newElement, element) {
    const currentNode = this.findByValue(element);
    if (currentNode === -1) {
      console.log("未找到插入位置");
      return;
    }
    const newNode = new Node_js(newElement);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
  // 查找前一个节点
  findPrev(item) {
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
  remove(element) {
    const delNode = this.findByValue(element);
    if (delNode === -1) {
      console.log("没有这个节点");
      return;
    }
    let prevNode = this.findPrev(element);
    prevNode.next = delNode.next;
  }
  // 遍历显示所有节点
  getAllNodes() {
    let currentNode = this.head;
    // while (currentNode !== null) {
    //   currentNode = currentNode.next;
    // }
    console.log(currentNode);
  }
  // 链表逆序
  // 开个新链表不停的往新表的表头插数据
  reverseList() {
    // 创建一个新的链表
    let newLink = new Node_js("head");
    // 逆转的链表表头不参与逆序
    let currentNode = this.head.next;
    while (currentNode !== null) {
      // 把cuurrentNode.next存上
      const nextTemp = currentNode.next;
      // 插入新的链表,当前节点的next指向新链表表头的next
      currentNode.next = newLink.next;
      // 新链表表头的next指向当前节点
      newLink.next = currentNode;
      // 插下一个
      currentNode = nextTemp;
    }
    // 替换原链表
    this.head = newLink;
  }
}
let LList = new LinkList();
LList.insertAfter("haha0", "head");
LList.insertAfter("haha1", "haha0");
LList.insertAfter("haha2", "haha1");
LList.reverseList();
LList.getAllNodes();
