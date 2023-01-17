/*
 * @Author       : guth
 * @Date         : 2023-01-17 15:57:51
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-17 17:11:04
 * @FilePath     : /study-javascript-data-structures/algorithms/search/binarySearchRecursive.js
 * @Description  : 分治法 二分搜索
 *
 * 1、分解：计算mid并搜索数组较小或较大的一半
 * 2、解决：在较小或较大额一半中搜索值
 * 3、没有3，不需要合并
 */

const { DOES_NOT_EXIST, COMPARE } = require('../../utils/constant')
const { defaultCompare } = require('../../utils/utils')
const quickSort = require('../sort/quickSort')

function binarySearchRecursive(arr, value, low, high, compareFn = defaultCompare) {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (compareFn(arr[mid], value) === COMPARE.LESS_THAN) {
      return binarySearchRecursive(arr, value, mid + 1, high, compareFn)
    } else if (compareFn(arr[mid], value) === COMPARE.BIGGER_THAN) {
      return binarySearchRecursive(arr, value, low, mid - 1, compareFn)
    } else {
      // 如果返回索引，是排序后的索引，可能不是原数组的索引
      return true
    }
  }
  return false
}

function binarySearch(arr, value, compareFn = defaultCompare) {
  const sortedArray = quickSort(arr)
  const low = 0
  const high = sortedArray.length - 1
  return binarySearchRecursive(arr, value, low, high, compareFn)
}
