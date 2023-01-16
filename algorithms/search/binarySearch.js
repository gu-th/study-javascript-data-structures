/*
 * @Author       : guth
 * @Date         : 2023-01-16 16:35:06
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-16 16:58:56
 * @FilePath     : /study-javascript-data-structures/algorithms/search/binarySearch.js
 * @Description  : 二分搜索
 *
 * 二分搜索需要先将数组排序，然后选择中间值，搜索值比中间值小，则在左侧继续寻找，
 * 搜索值比中间值大，则在右侧继续寻找，直至选中值为搜索值
 */
const { COMPARE } = require('../../utils/constant')
const { defaultCompare, lesserOrEquals } = require('../../utils/utils')
const quickSort = require('../sort/quickSort')

function binarySearch(arr, value, compareFn = defaultCompare) {
  const sortedArr = quickSort(arr)
  console.log(sortedArr)
  let low = 0
  let high = arr.length - 1
  while (lesserOrEquals(low, high, compareFn)) {
    const mid = Math.floor((low + high) / 2)
    const midVal = sortedArr[mid]
    if (compareFn(midVal, value) === COMPARE.LESS_THAN) {
      low = mid + 1
    } else if (compareFn(midVal, value) === COMPARE.BIGGER_THAN) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return mid
}

