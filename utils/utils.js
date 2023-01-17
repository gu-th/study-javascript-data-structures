/**
 * @Author       : guth
 * @Date         : 2022-12-22 17:32:21
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-23 11:02:59
 * @FilePath     : /study-javascript-data-structures/utils/utils.js
 * @Description  : 公共函数文件
 */
/**
 * 判断两个元素是否相等，可拓展
 * @param {*} a
 * @param {*} b
 * @returns {Boolean} boolean
 */
const { COMPARE } = require('./constant')
function defaultEquals(a, b) {
  return a === b
}
/**
 * 比较函数
 * @param {*} a
 * @param {*} b
 * @return {Number}
 */
function defaultCompare(a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? COMPARE.LESS_THAN : COMPARE.BIGGER_THAN
}

/**
 * 返回字符串
 * @param {*} item
 * @returns {String}
 */
function defaultToString(item) {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}

/**
 * 初始化每个节点的颜色
 * @param {*} vertices
 * @returns color
 */
const initializeColor = (vertices) => {
  const color = {}
  vertices.forEach((v) => (color[v] = COLOR.WHITE))
  return color
}
/**
 * 交换数组两个坐标的值
 * @param {Array} array
 * @param {Number} a
 * @param {Number} b
 */
function swap(array, a, b) {
  // [array[a], array[b]] = [array[b], array[a]]
  const temp = array[a]
  array[a] = array[b]
  array[b] = temp
}

/**
 * 返回数组的最大值
 * @param {array<number>} arr
 * @returns
 */
function findMaxValue(arr) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}
/**
 * 返回数组的最小值
 * @param {array<number>} arr
 * @returns
 */
function findMinValue(arr) {
  let min = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}

/**
 * 小于或相等
 * @param {*} a
 * @param {*} b
 * @param {*} compareFn
 * @returns
 */
function lesserOrEquals(a, b, compareFn) {
  const comp = compareFn(a, b)
  return comp === COMPARE.LESS_THAN || comp === COMPARE.EQUALS
}

/**
 * 大于或等于
 * @param {*} a
 * @param {*} b
 * @param {*} compareFn
 * @returns
 */
function biggerOrEquals(a, b, compareFn) {
  const comp = compareFn(a, b)
  return comp === COMPARE.BIGGER_THAN || comp === COMPARE.EQUALS
}

/**
 * 返回两数差
 * @param {*} a 
 * @param {*} b 
 * @returns {Number}
 */
function defaultDiff(a, b) {
  return Number(a) - Number(b);
}

module.exports = {
  defaultEquals,
  defaultCompare,
  defaultToString,
  initializeColor,
  swap,
  findMaxValue,
  findMinValue,
  lesserOrEquals,
  biggerOrEquals,
  defaultDiff,
}
