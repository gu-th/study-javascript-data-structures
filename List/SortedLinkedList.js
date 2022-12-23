/**
 * @Author       : guth
 * @Date         : 2022-12-23 11:05:27
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-23 13:53:52
 * @FilePath     : /study-javascript-data-structures/List/SortedLinkedList.js
 * @Description  : 有序链表
 */

const { COMPARE } = require('../utils/constant')
const { defaultEquals, defaultCompare } = require('../utils/utils')
const LinkedList = require('./LinkedList')

/**
 * 有序链表
 */
class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn)
    this.compareFn = compareFn
  }

  /**
   * 有序插入
   * @param {*} el
   * @param {*} index
   * @returns {Boolean}
   */
  insert(el, index = 0) {
    if (this.isEmpty()) {
      return super.insert(el, 0)
    }
    const position = this.getIndexNextSortedElement(el)
    console.log(position);
    return super.insert(el, position)
  }

  push(el) {
    return this.insert(el)
  }

  /**
   * 根据元素排序获取要插入元素的位置
   * @param {*} el
   */
  getIndexNextSortedElement(el) {
    let current = this.head
    let i = 0
    while (i < this.size() && current) {
      const comp = this.compareFn(el, current.element)
      if (comp === COMPARE.LESS_THAN) {
        return i
      }
      current = current.next
      i++
    }
    return i
  }
}

function test() {
  const sll = new SortedLinkedList()
  sll.insert(1)
  sll.insert(3)
  sll.insert(2)
  sll.insert(5)
  sll.insert(-8)

  console.log(sll.toString())
}
test()
