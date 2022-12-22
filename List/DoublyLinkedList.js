const { DoublyNode } = require('../utils/models')
const { defaultEquals } = require('../utils/utils')
const LinkedList = require('./LinkedList')
/**
 * 双向链表，比链表多了一个前向指针prev
 */
class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined
  }

  // push 方法也需要重写，但书中没有该内容
  push(el) {
    const node = new DoublyNode(el)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      const current = this.tail
      current.next = node
      this.tail = node
    }
    this.count ++
  }
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      if (index === 0) {
        return this.head
      } else if (index === this.count - 1) {
        return this.tail
      } else if (index <= this.count / 2) {
        return super.getElementAt(index)
      } else {
        let current = this.tail
        for (let i = this.count - 1; i > 0; i--) {
          if (i === index) {
            return current
          }
          current = current.prev
        }
      }
      return undefined
    }
  }

  /**
   * 指定位置插入元素
   * @param {*} el
   * @param {Number} index
   */
  insert(el, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(el)
      let current = this.head
      if (index === 0) {
        if (current == null) {
          this.head = node
          this.tail = node
        } else {
          node.next = current
          current.prev = node
          this.head = node
        }
      } else if (index === this.count) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        const pre = this.getElementAt(index - 1)
        current = pre.next
        pre.next = node
        current.prev = node
        node.prev = prev
        node.next = current
      }
      this.count++
      return true
    }
    return false
  }

  removeAt(index) {
    if (this.isEmpty()) {
      return false
    }
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
        if (this.count === 1) {
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      } else if (index === this.count - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = undefined
      } else {
        current = this.getElementAt(index)
        const pre = current.prev
        const next = current.next
        pre.next = next
        next.prev = pre
      }
      this.count--
      return true
    }
    return false
  }

  getTail() {
    return this.tail
  }
}

const dll = new DoublyLinkedList()
dll.push('a')
dll.push('b')
dll.push('c')
dll.push('d')
dll.push('e')
dll.push('f')
console.log(dll);
console.log(dll.getElementAt(2))
console.log(dll.getElementAt(5))
