/**
 * @Author       : guth
 * @Date         : 2022-12-23 10:56:08
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-23 11:02:51
 * @FilePath     : /study-javascript-data-structures/utils/constant.js
 * @Description  : 常量文件
 */

const COMPARE = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
}

/**
 * AVL树平衡因子
 */
const BALANCE_FACTOR = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCE_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCE_LEFT: 4,
  UNBALANCED_LEFT: 5,
}

/**
 * 颜色（用于标注红黑树节点颜色）
 */
const RBCOLOR = {
  RED: 'red',
  BLACK: 'black'
}

/**
 * 标注图顶点
 */
const COLOR = {
  // 白色 该顶点还未被访问
  WHITE: 0,
  // 灰色 该顶点被访问过，但并未被探索过
  GREY: 1,
  // 黑色 该顶点被访问过且被完全探索过
  BLACK: 2,
}

module.exports = {
  COMPARE,
  BALANCE_FACTOR,
  RBCOLOR,
  COLOR
}