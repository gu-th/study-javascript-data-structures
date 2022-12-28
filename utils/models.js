/*
 * @Author       : guth
 * @Date         : 2022-12-22 17:32:21
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-28 09:48:21
 * @FilePath     : /study-javascript-data-structures/utils/models.js
 * @Description  : 公共类文件
 */

const { COLORS } = require('./constant')

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

/**
 * 树节点类
 */
class TreeNode {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class RedBlackTreeNode extends TreeNode {
  constructor(key, color = COLORS.RED, parent = null) {
    super(key)
    this.color = color
    this.parent = parent
  }
  isRed() {
    return this.color === COLORS.RED
  }
}

module.exports = {
  Node,
  DoublyNode,
  ValuePair,
  TreeNode,
  RedBlackTreeNode
}
