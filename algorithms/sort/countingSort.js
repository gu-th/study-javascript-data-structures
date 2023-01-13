/*
 * @Author       : guth
 * @Date         : 2023-01-13 15:42:02
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-13 17:08:00
 * @FilePath     : /study-javascript-data-structures/algorithms/sort/countingSort.js
 * @Description  : 计数排序  是一种分布式排序 时间复杂度O(n+k) k 是临时计数数组的大小
 *  计数排序是一个 整数排序算法
 *  计数排序使用一个存储每个元素原始数组出现次数的临时数组
 *  在所有元素计数完成后, 临时数组已排好序并可迭代以构建排序后的结果数组
 */

const { findMaxValue } = require("../../utils/utils")

function countingSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  // 找到数组最大值
  const maxValue = findMaxValue(arr)
  // 构建一个计数数组
  const counts = new Array(maxValue + 1)
  // 对数组中每个元素计数, 并放在元素值对应的坐标中
  // counts 数组的坐标即值, 值为个数, 此时排序已经确定了
  arr.forEach(item => {
    if (!counts[item]) {
      counts[item] = 0
    }
    counts[item] ++
  })
  let sortedIndex = 0
  // 此时counts是顺序的,只需将有值的坐标取出即可
  counts.forEach((count, i) => {
    // count 大于 0, 即坐标值的数字存在
    while (count > 0) {
      // 坐标本身是数组元素的值
      arr[sortedIndex ++] = i
      count--
    }
  })
  return arr
}
