/*
 * @Author       : guth
 * @Date         : 2022-12-22 17:32:21
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-23 10:58:53
 * @FilePath     : /study-javascript-data-structures/List/LinkedList.js
 * @Description  : 链表实现
 */
const { Node } = require('../utils/models')
const { defaultEquals } = require('../utils/utils')

/**
 * 链表
 */
class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }
  /**
   * 向链表中添加一个元素
   * @param {*} element
   */
  push(element) {
    const node = new Node(element)
    let current
    if (this.count === 0) {
      this.head = node
    } else {
      current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }
  /**
   * 向链表指定位置插入一个元素
   * @param {*} el
   * @param {Number} index
   */
  insert(el, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(el)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const pre = this.getElementAt(index - 1)
        const current = pre.next
        pre.next = node
        node.next = current
      }
      this.count++
      return true
    }
    return false
  }
  /**
   * 返回指定位置的元素
   * @param {Number} index
   * @returns {Node} node
   */
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }
  /**
   * 移除链表中的指定元素
   * @param {*} el
   * @returns
   */
  remove(el) {
    // 简便方式需要两次循环
    // const index = this.indexOf(el)
    // return this.removeAt(index)
    if (this.isEmpty()) {
      return undefined
    }
    let current = this.head
    if (this.equalsFn(current.element, el)) {
      this.head = current.next
      return true
    } else {
      let pre
      for (let i = 0; i < this.count; i++) {
        if (this.equalsFn(current.element, el)) {
          pre.next = current.next
          this.count--
          return true
        } else {
          pre = current
          current = current.next
        }
      }
      return false
    }
  }
  /**
   * 返回指定元素在链表中的位置
   * @param {*} el
   * @returns {Number} index 坐标
   */
  indexOf(el) {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(current.element, el)) {
        return i
      }
      current = current.next
    }
    return -1
  }
  /**
   * 移除链表中指定位置的元素
   * @param {Number} index
   * @returns
   */
  removeAt(index) {
    // 判断边界情况
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        let pre = this.getElementAt(index - 1)
        current = pre.next
        pre.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }
  /**
   * 返回链表头
   * @returns head
   */
  getHead() {
    return this.head
  }
  /**
   * 链表是否为空
   * @returns { Boolean }
   */
  isEmpty() {
    return this.count === 0
  }
  /**
   * 链表大小
   * @returns
   */
  size() {
    return this.count
  }
  /**
   * 转换字符串
   * @returns {String}
   */
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let current = this.head.next
    let str = this.head.element
    for (let i = 1; i < this.count && current != null; i++) {
      str = `${str}, ${current.element}`
      current = current.next
    }
    return str
  }
}

function test() {
  const l = new LinkedList()
  l.push('a')
  l.push('b')
  l.push('c')
  // l.push('d')
  l.remove('d')
  // l.removeAt(2)

  console.log(l.size())
  console.log(l.indexOf('b'))
  console.log(l.toString())
}

// test()
module.exports = LinkedList
