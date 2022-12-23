/*
 * @Author       : guth
 * @Date         : 2022-12-22 17:32:21
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-23 10:57:39
 * @FilePath     : /study-javascript-data-structures/List/CircularLinkedList.js
 * @Description  : 单向循环链表, 链表最后一个元素next指针 指向链表第一个元素head
 */
const { Node } = require('../utils/models')
const { defaultEquals } = require('../utils/utils')
const LinkedList = require('./LinkedList')

/**
 * 单向循环链表
 * 链表最后一个元素next指针 指向链表第一个元素head
 */
class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }
  push(el) {
    const node = new Node(el)
    if (this.isEmpty()) {
      this.head = node
      node.next = node
    } else {
      const tail = this.getElementAt(this.count - 1)
      tail.next = node
      node.next = this.head
    }
    this.count++
  }

  insert(el, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(el)
      let current = this.head
      if (index === 0) {
        if (this.head == null) {
          this.head = node
          node.next = this.head
        } else {
          node.next = current
          // p112 6.3.1 书中此行代码 `current = this.getElementAt(this.count - 1)` 是错误的
          current = this.getElementAt(this.count - 1)
          current.next = node
          this.head = node 
        }
      } else {
        const pre = this.getElementAt(index - 1)
        current = pre.next
        pre.next = node
        node.next = current
      }
      this.count++
      return true
    }
    return false
  }

  removeAt(index) {
    if (this.isEmpty()) {
      return undefined
    }
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        if (this.count === 1) {
          this.head = undefined
        } else {
          // p113 6.3.2 `current = this.getElementAt(this.size())` 代码是错误的
          const pre = this.getElementAt(this.count - 1)
          pre.next = current.next
          this.head = current.next
        }
      } else {
        const pre = this.getElementAt(index - 1)
        current = pre.next
        pre.next = current.next
      }
      this.count--
      return current
    }
    return undefined
  }
}

const c = new CircularLinkedList()
c.push('a')
c.push('b')
c.push('c')
c.insert('f', 0)
c.insert('e', 4)
console.log(c.toString());
console.log('removed:', c.removeAt(0).element)
console.log('removed:', c.removeAt(3).element);
console.log(c.toString());
