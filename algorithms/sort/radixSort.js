/*
 * @Author       : guth
 * @Date         : 2023-01-13 17:02:52
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-13 17:10:51
 * @FilePath     : /study-javascript-data-structures/algorithms/sort/radixSort.js
 * @Description  : 基数排序(分布式排序) 根据数字的有效位或基数将整数分布到桶中, 基数是基于数组中 值的计数制的
 *                例如 十进制数 使用的基数就是10, 算法会使用10个桶来分布元素,
 *                并且首先基于各位数字进行排序, 然后基于十位数字, 然后基于百位数字, 以次类推
 */

const { findMinValue, findMaxValue } = require("../../utils/utils")

function radixSort(arr, radixBase = 10) {
  if (arr.length < 2) {
    return arr
  }
  const minValue = findMinValue(arr)
  const maxValue = findMaxValue(arr)
  let significantDigit = 1
  

}
