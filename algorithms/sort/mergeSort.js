/*
 * @Author       : guth
 * @Date         : 2023-01-11 15:40:44
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-13 15:17:17
 * @FilePath     : /study-javascript-data-structures/algorithms/sort/mergeSort.js
 * @Description  : 归并排序 复杂度O(nlog(n))  分治法
 * 将数组切分成较小的数组，知道每个数组的长度为 1， 再将数组比较归并成大数组
 */

const { COMPARE } = require('../../utils/constant')
const { defaultCompare } = require('../../utils/utils')

function mergeSort(arr, compareFn = defaultCompare) {
  const { length } = arr
  if (length > 1) {
    // 取数组中间坐标
    const middle = Math.floor(length / 2)
    // 以中间划分左右两部分重复拆分归并
    const left = mergeSort(arr.slice(0, middle), compareFn)
    const right = mergeSort(arr.slice(middle, length), compareFn)
    // 将左右排好序的数组合并
    arr = merge(left, right, compareFn)
  }
  return arr
}

function merge(left, right, compareFn) {
  let i = 0
  let j = 0
  // 新数组存放合并后的数组
  const result = []
  // 循环比较两个数组的每个值并放入result
  while (i < left.length && j < right.length) {
    result.push(compareFn(left[i], right[j]) === COMPARE.LESS_THAN ? left[i++] : right[j++])
  }
  // 因为左右数组是已排序的, 所以剩下的值直接合并进result即可
  return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}
