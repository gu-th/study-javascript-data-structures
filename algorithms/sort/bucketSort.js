/*
 * @Author       : guth
 * @Date         : 2023-01-13 16:21:54
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-13 17:00:09
 * @FilePath     : /study-javascript-data-structures/algorithms/sort/bucketSort.js
 * @Description  : 桶排序(分布式排序) 将元素分为不同的桶(即较小的数组), 再使用一个简单排序算法来对每个桶排序
 *                然后 将所有的桶合并为结果数组
 */

const insertionSort = require('./insertionSort')

function bucketSort(arr, bucketSize = 5) {
  if (arr.length < 2) {
    return arr
  }
  const buckets = createBuckets(arr, bucketSize)
  return sortBuckets(buckets)
}
/**
 * 创建桶
 * @param {array} arr
 * @param {number} bucketSize
 * @returns
 */
function createBuckets(arr, bucketSize) {
  let minValue = arr[0]
  let maxValue = arr[0]
  // 找到数组中的最小值和最大值
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i]
    } else if (arr[i] > maxValue) {
      maxValue = arr[i]
    }
  }
  // 计算每个桶需要分布的元素个数
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  // 初始化桶
  const buckets = []
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = []
  }
  // 迭代数组 计算每个值应该放在哪个桶里
  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize)
    buckets[bucketIndex].push(arr[i])
  }
  // 返回桶
  return buckets
}
/**
 * 桶排序
 * @param {array<array<number>>} buckets
 */
function sortBuckets(buckets) {
  // 初始化一个排序数组
  const sortedArray = []
  // 遍历每个桶并
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      // 每个桶进行插入排序
      insertionSort(buckets[i])
      // 排序后放入数组中
      sortedArray.push(...buckets[i])
    }
  }
  // 返回排序后的结果
  return sortedArray
}
