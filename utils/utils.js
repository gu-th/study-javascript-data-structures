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

module.exports = {
  defaultEquals,
  defaultCompare
}
