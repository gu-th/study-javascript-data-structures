/*
 * @Author       : guth
 * @Date         : 2023-01-19 16:45:04
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-20 14:10:17
 * @FilePath     : /study-javascript-data-structures/algorithms/dynamicProgramming/knapSack.js
 * @Description  : 0-1 背包问题：给定一个固定容量的背包，及一组有价值和重量的物品，求解背包装入物品最大价值
 */

/**
 *
 * @param {number} capacity 背包容量
 * @param {Array<number>} weights 物品重量
 * @param {Array<number>} values 物品价值
 * @param {number} n 物品数量
 * @returns {number}
 */
function knapSack(capacity, weights, values, n) {
  // 初始化求解的矩阵（二维数组）
  const kS = []
  for (let i = 0; i <= n; i++) {
    kS[i] = []
  }
  // 迭代数组每个可用项
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      // 矩阵为 kS[n+1][capacity+1]  即忽略第一行和第一列，只处理索引不为 0 的行列
      if (i === 0 || w === 0) {
        kS[i][w] = 0
      }
      // 物品 i 的重量要小于约束 (capacity) 否则会超出背包承重
      else if (weights[i - 1] <= w) {
        const a = values[i - 1] + kS[i - 1][w - weights[i - 1]]
        const b = kS[i - 1][w]
        // 找大值
        kS[i][w] = a > b ? a : b
      } else {
        // 超过承重就忽略掉，用前一个值
        kS[i][w] = kS[i - 1][w]
      }
    }
  }
  findValues(n, capacity, kS, weights, values)
  return kS[n][capacity]
}

function findValues(n, capacity, kS, weights, values) {
  let i = n
  let k = capacity
  console.log('构成解的物品：')
  while (i > 0 && k > 0) {
    if (kS[i][k] !== kS[i - 1][k]) {
      console.log(`物品 ${i} 可以是解的一部分  w: ${weights[i - 1]} ,  v: ${values[i - 1]}`)
      i--
      k -= kS[i][k]
    } else {
      i--
    }
  }
}

const values = [3, 4, 5]
const weights = [2, 3, 4]
const capacity = 5
const n = values.length
console.log(knapSack(capacity, weights, values, n))