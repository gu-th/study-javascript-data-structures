/*
 * @Author       : guth
 * @Date         : 2023-01-16 17:05:59
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-17 15:47:24
 * @FilePath     : /study-javascript-data-structures/algorithms/search/insertpolationSearch.js
 * @Description  : 内插搜索 算法要求数组已排序
 *
 * 1、使用position公式选中一个值
 * 2、如果这个值是待搜索值，则算法执行完毕
 * 3、待搜索值比选中值小，返回（1）步骤 并在选中值左边的子数组中寻找
 * 4、待搜索值比选中值大，返回（1）步骤 并在选中值右边的子数组中寻找
 */

const { COMPARE, DOES_NOT_EXIST } = require('../../utils/constant')
const { defaultCompare, defaultEquals, defaultDiff, biggerOrEquals, lesserOrEquals } = require('../../utils/utils')

function insertpolationSearch(arr, value, comporeFn = defaultCompare, equalsFn = defaultEquals, diffFn = defaultDiff) {
  const { length } = arr
  let low = 0
  let high = length - 1
  let position = -1
  let delta = -1
  while (low <= high && biggerOrEquals(value, arr[low], comporeFn) && 
        lesserOrEquals(value, arr[high], comporeFn)) 
  {
    delta = diffFn(value, arr[low]) / diffFn(arr[high], arr[low])
    // 计算要比较值的位置
    position = low + Math.floor((high - low) * delta)
    // 相等就返回位置
    if (equalsFn(arr[position], value)) {
      return position
    }
    if (comporeFn(arr[position], value) === COMPARE.LESS_THAN) {
      low = position + 1
    } else {
      high = position - 1
    }
  }
  return DOES_NOT_EXIST
}
