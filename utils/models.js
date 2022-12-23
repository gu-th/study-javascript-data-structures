/*
 * @Author       : guth
 * @Date         : 2022-12-22 17:32:21
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-23 11:00:48
 * @FilePath     : /study-javascript-data-structures/utils/models.js
 * @Description  : 公共类文件
 */
class Node {
  constructor(el) {
    this.element = el
    this.next = undefined
  }
}
class DoublyNode extends Node {
  constructor(el, next, prev) {
    super(el, next)
    this.prev = prev
  }
}
module.exports = {
  Node,
  DoublyNode
}