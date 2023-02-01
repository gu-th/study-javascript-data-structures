/*
 * @Author       : guth
 * @Date         : 2023-01-30 10:43:30
 * @LastEditors  : guth
 * @LastEditTime : 2023-02-01 10:08:05
 * @FilePath     : /study-javascript-data-structures/algorithms/dynamicProgramming/lcs.js
 * @Description  : 最长公共子序列 找出两个字符串序列最长子序列的长度
 *                 最长子序列：在两个字符串序列中以相同顺序出现，但不要求连续的字符串序列
 */

function lcs(wordX, wordY) {
  const m = wordX.length
  const n = wordY.length
  const l = []
  const solution = []

  // 初始化求解矩阵
  for (let i = 0; i <= m; i++) {
    l[i] = []
    solution[i] = []
    for (let j = 0; j <= n; j++) {
      l[i][j] = 0
      solution[i][j] = '0'
    }
  }

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        // 忽略第一排第一列
        l[i][j] = 0
      } else if (wordX[i - 1] === wordY[j - 1]) {
        // 当前两字母相等，长度从上一个长度 + 1
        l[i][j] = l[i - 1][j - 1] + 1
        // 结果矩阵标记
        solution[i][j] = 'diagonal'
      } else {
        // 如果不相等，那么当前行列的最大公共自序列长度还是之前的
        const a = l[i - 1][j]
        const b = l[i][j - 1]
        l[i][j] = a > b ? a : b // max(a, b)
        // 标记字母位置在当前的左侧还是右侧
        solution[i][j] = (l[i][j] == l[i - 1][j]) ? 'top' : 'left'
      }
    }
  }
  printSolution(solution, wordX, m, n)
  return l[m][n]
}

function printSolution(solution, wordX, m, n) {
  let a = m
  let b = n
  let x = solution[a][b]
  let answer = ''
  while (x !== '0') {
    // 从最末端倒着找
    if (solution[a][b] === 'diagonal') {
      // 当前字母符合条件，就去前一行前一列查找
      answer = wordX[a - 1] + answer
      a--
      b--
    } else if (solution[a][b] === 'left') {
      // 符合条件的在左侧，就去前一列找
      b--
    } else if (solution[a][b] === 'top') {
      // 符合条件的在左侧，就去前一行找
      a--
    }
    x = solution[a][b]
  }
  console.log(`lcs:  ${answer}`)
}

console.log(lcs('acbaed', 'abcadf'))
