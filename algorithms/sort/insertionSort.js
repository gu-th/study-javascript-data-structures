/*
 * @Author       : guth
 * @Date         : 2023-01-11 14:45:00
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-11 15:36:43
 * @FilePath     : /study-javascript-data-structures/algorithms/sort/insertionSort.js
 * @Description  : 插入排序
 *                 第一项和第二项作比较, 放在原位或插在前面, 再和第三项作比较,以次类推
 */

const { COMPARE } = require('../../utils/constant')
const { defaultCompare } = require('../../utils/utils')

function insertionSort(arr, compareFn = defaultCompare) {
  const { length } = arr
  let temp
  for (let i = 1; i < length; i++) {
    temp = arr[i]
    let j = i
    while (j > 0 && compareFn(temp, arr[j - 1]) === COMPARE.BIGGER_THAN) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
  return arr
}
