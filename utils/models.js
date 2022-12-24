/**
 * @Author       : guth
 * @Date         : 2022-12-22 17:32:21
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-23 11:00:48
 * @FilePath     : /study-javascript-data-structures/utils/models.js
 * @Description  : 公共类文件
 */
/**
 * 节点类 （用于栈、队列）
 */
class Node {
  constructor(el) {
    this.element = el
    this.next = undefined
  }
}
/**
 * 双向节点类 （用于双向队列）
 */
class DoublyNode extends Node {
  constructor(el, next, prev) {
    super(el, next)
    this.prev = prev
  }
}
/**
 * 键值对类（用于字典）
 */
class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
  toString() {
    return `${this.key}: ${this.value}`
  }
}
module.exports = {
  Node,
  DoublyNode,
  ValuePair
}