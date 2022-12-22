const DoublyNode = require('../utils/models')
const LinkedList = require('./LinkedList')
const defaultEquals = require('../utils/utils')

/**
 * 单向循环链表
 * 链表最后一个元素next指针 指向链表第一个元素head
 */
class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }
  insert(el, index) {
    
  }

}

console.log(new CircularLinkedList());