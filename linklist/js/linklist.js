// 节点信息
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
// 链表
class LinkList {
    constructor() {
        this.head = new Node("head");
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
        return currentNode === null ? -1 : currentNode
    }
    // 查找节点根据index
    findByInde(index) {
        let currentNode = this.head;
        let pos = 0;
        let linkListLength = this.getLinkListLength()
        if (index > linkListLength || index < 0) {
            console.log("下标越界")
            return
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
        const newNode = new Node(newElement);
        newNode.next = element.next;
        element.next = newNode;
    }
    // 查找前一个节点
    findPrev(item) {
        let currentNode = this.head
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
    }
}