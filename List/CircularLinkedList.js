// const DoublyNode = require('../utils/models')
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
    const node = new Node(el)
    if (this.count === 0) {
      this.head = node
      node.next = node
      this.count ++
      return true
    }
    if (index >= 0 && index <= this.count) {
      let current = this.head
      if (index === 0) {
        const tail = this.getElementAt(this.count - 1)
        this.head = node
        node.next = current
        tail.next = node
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
    if (index >= 0 && index <= this.count) {
      let current = this.head
      if (index === 0) {
        if (this.count === 1) {
          this.head = undefined
        } else {
          const pre = this.getElementAt(this.count - 1)
          pre.next = current.next
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
// console.log(c.toString());
c.insert('e', 4)
// console.log(c.toString());
console.log(c.removeAt(0));
console.log(c.toString());
// c.removeAt(3)
// console.log(c.toString());
// console.log(new CircularLinkedList())
