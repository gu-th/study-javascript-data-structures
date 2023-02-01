/*
 * @Author       : guth
 * @Date         : 2023-02-01 10:16:01
 * @LastEditors  : guth
 * @LastEditTime : 2023-02-01 10:42:20
 * @FilePath     : /study-javascript-data-structures/algorithms/greedy/minCoinChange.js
 * @Description  : 贪心 最小硬币找零, 结果不总是最优的
 */

/**
 * @param {Array<number>} coins 面额
 * @param {number} amount 总数
 * @return {Array<number>}
 */
function minCoinChange(coins, amount) {
  const change = []
  let total = 0
  // 从最大面额开始计算
  for (let  i = coins.length;  i >= 0;  i--) {
    const coin = coins[i]
    // 对每个面额与total相加, 相加结果小于amount, 就将当前面额添加到结果中
    while (total + coin <= amount) {
      change.push(coin)
      total += coin
    }
  }
  return change
}
