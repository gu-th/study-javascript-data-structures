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

module.exports = {
  defaultEquals,
  defaultCompare,
  defaultToString,
  initializeColor,
  swap
}
