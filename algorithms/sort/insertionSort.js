/*
 * @Author       : guth
 * @Date         : 2023-01-11 14:45:00
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-13 16:41:40
 * @FilePath     : /study-javascript-data-structures/algorithms/sort/insertionSort.js
 * @Description  : 插入排序 排序小数组不错的算法
 *                 第一项和第二项作比较, 放在原位或插在前面, 再和第三项作比较,以次类推
 */

const { COMPARE } = require('../../utils/constant')
const { defaultCompare } = require('../../utils/utils')

function insertionSort(arr, compareFn = defaultCompare) {
  const { length } = arr
  let temp
  for (let i = 1; i < length; i++) {
    // 设置temp用于比较的值, 从 1 开始
    temp = arr[i]
    let j = i
    // 与前一个值比较, 直到找到比当前值大的值 下标为 j
    while (j > 0 && compareFn(temp, arr[j - 1]) === COMPARE.LESS_THAN) {
      arr[j] = arr[j - 1]
      j--
    }
    // 找到前边的比temp大的值, 替换temp
    arr[j] = temp
  }
  return arr
}


module.exports = insertionSort