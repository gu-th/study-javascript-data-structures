/*
 * @Author       : guth
 * @Date         : 2023-01-11 14:26:12
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-11 15:02:38
 * @FilePath     : /study-javascript-data-structures/algorithms/sort/selectionSort.js
 * @Description  : 选择排序 复杂度 O(n²)
 *                 找到数组中最小值放在第一位, 找到第二小放在第二位 以次类推
 */

const { COMPARE } = require('../../utils/constant')
const { defaultCompare, swap } = require('../../utils/utils')

function selectionSort(arr, compareFn = defaultCompare) {
  const length = arr
  let minIndex
  for (let i = 0; i < length; i++) {
    minIndex = i
    for (let j = 0; j < length; j++) {
      if (compareFn(arr[minIndex], arr[j]) === COMPARE.BIGGER_THAN) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      swap(arr, i, minIndex)
    }
  }
  return arr
}
