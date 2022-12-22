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