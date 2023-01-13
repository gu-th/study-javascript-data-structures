/*
 * @Author       : guth
 * @Date         : 2023-01-12 16:48:07
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-13 15:31:27
 * @FilePath     : /study-javascript-data-structures/algorithms/sort/quickSort.js
 * @Description  : 快速排序实现 复杂度 O(nlog(n))
 *
 * 1、在数组中选择一个值作主元(pivot)，即数组中间的值
 * 2、创建两个指针分别指向数组的首尾，移动左指针直至找到一个比主元大的值
 *    移动右指针直至找到一个比主元小的值，然后交换两个值的位置
 *    重复这个步骤直至左指针超过右指针，此时比主元小的值都在左侧，比主元大的值都在右侧
 *    这一步骤，叫作 划分(partition) 操作
 * 3、对划分后的小数组重复前两步骤，直至数组完全排序
 */

const { COMPARE } = require('../../utils/constant')
const { defaultCompare, swap } = require('../../utils/utils')

function quickSort(arr, compareFn = defaultCompare) {
  return quick(arr, 0, arr.length - 1, compareFn)
}

function quick(arr, left, right, compareFn) {
  let index
  if (arr.length > 1) {
    // 划分操作
    index = partition(arr, left, right, compareFn)
    // 以index将数组分成左右两部分, 分别重复划分操作
    if (left < index - 1) {
      quick(arr, left, index - 1, compareFn)
    }
    if (index < right) {
      quick(arr, index, right, compareFn)
    }
  }
  return arr
}

function partition(arr, left, right, compareFn) {
  // 取数组中间的值作主元
  const pivot = arr[Math.floor((left + right) / 2)]
  // 初始左右指针（就是数组的首位）
  let i = left
  let j = right
  while (i <= j) {
    // 左指针找到比主元大的坐标
    if (compareFn(arr[i], pivot) === COMPARE.LESS_THAN) {
      i++
    }
    // 右指针找比主元小的坐标
    if (compareFn(arr[j], pivot) === COMPARE.BIGGER_THAN) {
      j--
    }
    // 交换左右指针值，比主元小的在左，比主元大的在右侧
    if (i <= j) {
      swap(arr, i, j)
      i++
      j--
    }
  }
  return i
}
