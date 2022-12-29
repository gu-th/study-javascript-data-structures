/*
 * @Author       : guth
 * @Date         : 2022-12-29 20:03:26
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-29 20:05:45
 * @FilePath     : /study-javascript-data-structures/BinaryHeap/MaxHeap.js
 * @Description  : 最大堆实现
 */

const { defaultCompare } = require('../utils/utils')
const MinHeap = require('./MinHeap')

function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a)
}

class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = reverseCompare(compareFn)
  }
}
