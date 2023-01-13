/*
 * @Author       : guth
 * @Date         : 2023-01-11 15:40:44
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-12 16:47:47
 * @FilePath     : /study-javascript-data-structures/algorithms/sort/mergeSort.js
 * @Description  : 归并排序 复杂度O(nlog(n))  分治法
 * 将数组切分成较小的数组，知道每个数组的长度为 1， 再将数组比较归并成大数组
 */

const { COMPARE } = require('../../utils/constant')
const { defaultCompare } = require('../../utils/utils')

function mergeSort(arr, compareFn = defaultCompare) {
  const { length } = arr
  if (length > 1) {
    const middle = Math.floor(length / 2)
    const left = mergeSort(arr.slice(0, middle), compareFn)
    const right = mergeSort(arr.slice(middle, length), compareFn)
    arr = merge(left, right, compareFn)
  }
  return arr
}

function merge(left, right, compareFn) {
  let i = 0
  let j = 0
  const result = []
  while (i< left.length && j < right.length) {
    result.push(
      compareFn(left[i], right[j]) === COMPARE.LESS_THAN ? left[i++] : right[j++]
    )
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}
