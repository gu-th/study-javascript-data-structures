/**
 * @Author       : guth
 * @Date         : 2022-12-24 23:50:29
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-24 23:50:37
 * @FilePath     : /study-javascript-data-structures/Dictionary/HashTableSeparateChaining.js
 * @Description  : 8.2.4 散列表实现（分离链接法） 避免hash值冲突
 */

const LinkedList = require('../List/LinkedList')
const { ValuePair } = require('../utils/models')
const { defaultToString } = require('../utils/utils')

class HashTableSeparateChaining {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
  /**
   * 散列函数 生成hash
   * @param {*} key
   * @returns {Number}
   */
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key
    }
    const tableKey = this.toStrFn(key)
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37
  }

  /**
   * 返回根据key生成的hashCOde
   * @param {*} key
   * @returns {Number}
   */
  hashCode(key) {
    return this.loseloseHashCode(key)
  }

  /**
   * 向散列表中添加一个属性
   * @param {Number} key
   * @param {*} value
   * @returns {Boolean}
   */
  put(key, value) {
    if (key != null && value != null) {
      const hash = this.hashCode(key)
      if (this.table[hash] == null) {
        this.table[hash] = new LinkedList()
      }
      this.table[hash].push(new ValuePair(key, value))
      return true
    }
    return false
  }
  /**
   * 从散列表中移除一个元素
   * @param {*} key
   */
  remove(key) {
    const hash = this.hashCode(key)
    const list = this.table[hash]
    if (list != null && !list.isEmpty()) {
      let current = list.getHead()
      while (current != null) {
        if (current.element.key === key) {
          list.remove(current.element)
          if (list.isEmpty()) {
            delete this.table[hash]
          }
          return true
        }
        current = current.next
      }
    }
    return false
  }
  /**
   * 从散列表中取出一个元素
   * @param {*} key
   * @returns
   */
  get(key) {
    if (key != null) {
      const hash = this.hashCode(key)
      const list = this.table[hash]
      let current = list.getHead()
      while (current != null) {
        if (current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
    }
    return undefined
  }
}
