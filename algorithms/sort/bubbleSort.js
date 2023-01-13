/*
 * @Author       : guth
 * @Date         : 2023-01-11 11:18:46
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-11 15:02:26
 * @FilePath     : /study-javascript-data-structures/algorithms/sort/bubbleSort.js
 * @Description  : 冒泡排序 复杂度 O(n²)
 *                 比较相邻的两个项, 如果第一个比第二个大, 就进行交换
 */
const { COMPARE } = require('../../utils/constant')
const { defaultCompare, swap } = require('../../utils/utils')

function bubbleSort(arr, comporeFn = defaultCompare) {
  const { length } = arr
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (comporeFn(arr[j], arr[j + 1]) === COMPARE.BIGGER_THAN) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}
