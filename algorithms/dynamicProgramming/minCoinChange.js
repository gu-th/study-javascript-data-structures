/*
 * @Author       : guth
 * @Date         : 2023-01-19 10:07:20
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-20 10:13:11
 * @FilePath     : /study-javascript-data-structures/algorithms/dynamicProgramming/minCoinChange.js
 * @Description  : 最少硬币找零问题: 给定面额和总数，求解最小（硬币数）找零
 */

/**
 * @param {array<number>} coins 面额
 * @param {number} amount 总数
 * @return {array<number>}
 * @description
 */
function minCoinChange(coins, amount) {
  const cache = []
  const makeChange = (value) => {
    // amount 不为正， 返回空数组
    if (!value) {
      return []
    }
    // 结果已缓存，直接返回，否则继续执行算法
    if (cache[value]) {
      return cache[value]
    }
    let min = [] // 最小硬币数量
    let newMin // 新计算的最小硬币数
    let newAmount // 新的总量
    // 每个值都对所有面额进行计算
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i]
      // 每个面额计算newAmount, 会逐次减小, 直到找到找零的最小钱数
      newAmount = value - coin
      if (newAmount >= 0) {
        newMin = makeChange(newAmount)
      }
      /**
       * 1、newAmount 是否有效（大于等于0）
       * 2、newMin(最小硬币数) 是否是最优解
       * 3、newMin 和 newAmount 是否是合理值
       * 如果符合条件，就说明存在比之前更优的答案
       */
      if (newAmount >= 0 &&
          (newMin.length < min.length - 1 || !min.length) &&
          (newMin.length || !newAmount)) {
            min = [coin].concat(newMin)
            // console.log(`new Min ${min} for ${newAmount}`);
      }
    }
    // 缓存每个小值的结果
    return (cache[value] = min)
  }
  return makeChange(amount)
}


console.log(minCoinChange([1,3,4], 6));