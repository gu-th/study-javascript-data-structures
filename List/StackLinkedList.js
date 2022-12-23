/**
 * @Author       : guth
 * @Date         : 2022-12-23 13:56:01
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-23 13:58:06
 * @FilePath     : /study-javascript-data-structures/List/StackLinkedList.js
 * @Description  : 使用双向链表实现栈结构 （双向链表可以无需迭代直接获取尾元素，减少消耗）
 * 
 * 用链表实现 队列 栈 也是可以的 ！
 */

const DoublyLinkedList = require('./DoublyLinkedList')
const { defaultEquals } = require('../utils/utils')

/**
 * 栈 - 链表实现
 */
class StackLinkedList extends DoublyLinkedList {
  constructor() {
    this.items = new DoublyLinkedList()
  }
  push(el) {
    this.items.push(el)
  }
  pop () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items.removeAt(this.size() - 1)
  }
  isEmpty() {
    return this.items.isEmpty()
  }
  size() {
    return this.items.size()
  }
  clear() {
    return this.items.clear()
  }
  toString() {
    return this.items.toString()
  }
  peek() {
    if (this.items.isEmpty()) {
      return undefined
    }
    return this.items.getElementAt(this.size() - 1)
  }
}