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
  BIGGER_THAN: 1
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

module.exports = {
  COMPARE,
  BALANCE_FACTOR
}