/*
 * @Author       : guth
 * @Date         : 2023-02-01 10:45:32
 * @LastEditors  : guth
 * @LastEditTime : 2023-02-01 16:19:11
 * @FilePath     : /study-javascript-data-structures/algorithms/greedy/knapSack.js
 * @Description  : 分数背包问题, 可以装入部分的物品
 */

/**
 *
 * @param {number} capacity 背包容量
 * @param {Array<number>} weights 物品重量
 * @param {Array<number>} values 物品价值
 * @returns {number}
 */
function knapSack(capacity, weights, values) {
  const n = values.length
  let load = 0
  let val = 0
  for (let  i = 0;  i < n && load < capacity;  i++) {
    // 物品装入后,总重量小于背包, 就装
    if (weights[i] <= capacity - load) {
      val += values[i]
      load += weights[i]
    } else {
      // 物品装入后, 重量大于背包, 就只装部分
      const r = (capacity - load) / weights[i]
      val += r * values[i]
      load += weights[i]
    }
  }
  return val
}
