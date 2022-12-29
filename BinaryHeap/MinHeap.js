/*
 * @Author       : guth
 * @Date         : 2022-12-29 15:46:26
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-29 20:03:14
 * @FilePath     : /study-javascript-data-structures/BinaryHeap/MinHeap.js
 * @Description  : 最小堆实现
 */

const { COMPARE } = require('../utils/constant')
const { defaultCompare } = require('../utils/utils')

class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.heap = []
  }

  /**
   * 获取左子节点坐标
   * @param {Number} index
   */
  getLeftIndex(index) {
    return 2 * index + 1
  }

  /**
   * 获取右子节点坐标
   * @param {Number} index
   */
  getRightIndex(index) {
    return 2 * index + 2
  }
  /**
   * 获取父节点坐标
   * @param {Number} index
   */
  getParentIndex(index) {
    if (index === 0) {
      return undefined
    }
    return Math.floor((index - 1) / 2)
  }

  /**
   * 向堆中插入新值
   * @param {Number} value
   * @returns {Boolean}
   */
  insert(value) {
    if (value != null) {
      this.heap.push(value)
      this.siftUp(this.heap.length - 1)
      return true
    }
    return false
  }

  /**
   * 上移方法
   * @param {Number} index
   */
  siftUp(index) {
    const parentIndex = this.getParentIndex(index)
    const current = this.heap[index]
    const parent = this.heap[parentIndex]
    while (index > 0 && this.compareFn(parent, current) > COMPARE.BIGGER_THAN) {
      this.swap(this.heap, index, parentIndex)
    }
  }
  /**
   * 下移方法
   * @param {Number} index
   */
  siftDown(index) {
    let el = index
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)
    const size = this.size()
    if (left < size && this.compareFn(this.heap[el], this.heap[left]) > COMPARE.BIGGER_THAN) {
      el = left
    }
    if (right < size && this.compareFn(this.heap[el], this.heap[right]) > COMPARE.BIGGER_THAN) {
      el = right
    }
    if (index !== el) {
      this.swap(this.heap, index, el)
      this.siftDown(el)
    }
  }

  /**
   * 交换数组两个坐标的值
   * @param {Array} array
   * @param {Number} a
   * @param {Number} b
   */
  swap(array, a, b) {
    // [array[a], array[b]] = [array[b], array[a]]
    const temp = array[a]
    array[a] = array[b]
    array[b] = temp
  }

  size() {
    return this.heap.length
  }
  isEmpty() {
    return this.size() === 0
  }
  /**
   * 移除最小或最大值并返回该值
   * @returns {any}
   */
  extract() {
    if (this.isEmpty()) {
      return undefined
    }
    if (this.size() === 1) {
      return this.heap.shift()
    }
    const removed = this.heap.shift()
    this.heap[0] = this.heap.pop()
    this.siftDown(0)
    return removed
  }
  /**
   * 返回最小或最大值
   * @returns {Number}
   */
  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0]
  }
}


module.exports = MinHeap