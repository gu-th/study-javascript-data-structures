/*
 * @Author       : guth
 * @Date         : 2023-01-13 17:02:52
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-16 15:03:16
 * @FilePath     : /study-javascript-data-structures/algorithms/sort/radixSort.js
 * @Description  : 基数排序(分布式排序) 根据数字的有效位或基数将整数分布到桶中, 基数是基于数组中 值的计数制的
 *                例如 十进制数 使用的基数就是10, 算法会使用10个桶来分布元素,
 *                并且首先基于各位数字进行排序, 然后基于十位数字, 然后基于百位数字, 以次类推
 */

const { findMinValue, findMaxValue } = require('../../utils/utils')

function radixSort(arr, radixBase = 10) {
  if (arr.length < 2) {
    return arr
  }
  const minValue = findMinValue(arr)
  const maxValue = findMaxValue(arr)
  // 先从最后一位开始排序， 迭代时会基于第二个有效位排序（十位），然后是第三位（百位） 以次类推
  let significantDigit = 1
  // 直至没有待排序的有效位
  while ((maxValue - minValue) / significantDigit >= 1) {
    arr = countingSortForRadix(arr, radixBase, significantDigit, minValue)
    significantDigit *= radixBase
  }
  return arr
}

function countingSortForRadix(arr, radixBase, significantDigit, minValue) {
  let bucketsIndex
  const buckets = []
  const aux = []
  // 基于基数初始化桶，十进制就是10个桶
  for (let i = 0; i < radixBase; i++) {
    buckets[i] = 0
  }
  // 基于数组中 数字的有效进行计数排序
  for (let i = 0; i < arr.length; i++) {
    // 有效位
    bucketsIndex = Math.floor(((arr[i] - minValue) / significantDigit) % radixBase)
    // 计数排序
    buckets[bucketsIndex]++
  }
  // 计算累计结果得到计数值
  for (let i = 1; i < radixBase; i++) {
    buckets[i] += buckets[i - 1]
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    // 再次获取有效位
    bucketsIndex = Math.floor(((arr[i] - minValue) / significantDigit) % radixBase)
    // 将值移动到aux中 （从buckets数组综中减去它的计数值）
    aux[--buckets[bucketsIndex]] = arr[i]
  }
  // 复制值 （可选）
  for (let i = 0; i < arr.length; i++) {
    arr[i] = aux[i]
  }
  return arr
}

console.log(radixSort([456, 789, 123, 1, 32, 4, 243, 321, 42, 90, 10, 999]))
//  未排序        第一次排序        第二次排序          第三次排序
//  4 5 6               1                1                   1
//  7 8 9           3 2 1                4                   4
//  1 2 3             3 2              1 0                 1 0
//      1             4 2            3 2 1                 3 2
//    3 2           1 2 3            1 2 3                 4 2
//      4           2 4 3              3 2                 9 0
//  2 4 3               4              4 2               1 2 3
//  3 2 1           4 5 6            2 4 3               2 4 3
//    4 2           7 8 9            4 5 6               3 2 1
//    9 0           9 9 9            7 8 9               4 5 6
//    1 0             9 0              9 0               7 8 9
//  9 9 9             1 0            9 9 9               9 9 9
