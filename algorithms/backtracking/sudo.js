/*
 * @Author       : guth
 * @Date         : 2023-02-02 15:35:58
 * @LastEditors  : guth
 * @LastEditTime : 2023-02-02 16:47:50
 * @FilePath     : /study-javascript-data-structures/algorithms/backtracking/sudo.js
 * @Description  : 数独问题
 */

const UNASSIGNED = 0

function sudo(matrix) {
  if (solveSudo(matrix) === true) {
    return matrix
  }
  return '无解'
}

function solveSudo(matrix) {
  let row = 0
  let col = 0
  let checkBlankSpaces = false
  // 验证问题是否已解决
  for (row = 0; row < matrix.length; row++) {
    for (col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === UNASSIGNED) {
        // 有空白位置，就跳出循环，继续解决问题
        checkBlankSpaces = true
        break
      }
    }
    // 有空白位置，就跳出循环，继续解决问题
    if (checkBlankSpaces === true) {
      break
    }
  }
  // 没有空白位置，即问题已解决。
  if (checkBlankSpaces === false) {
    return true
  }
  // 用 1~9 填入空位置
  for (let num = 1; num <= 9; num++) {
    // 验证填入的数字是否合规
    if (isSafe(matrix, row, col, num)) {
      // 合规就填入数字
      matrix[row][col] = num
      // 递归填写下一个空位置并校验
      if (solveSudo(matrix)) {
        return true
      }
      // 下一个位置如果不合规，当前位置置空，会在上一个递归的循环里尝试填写下一个数字
      matrix[row][col] = UNASSIGNED
    }
  }
  // 没有符合条件的数字，返回false
  return false
}

function isSafe(matrix, row, col, num) {
  return (
    !usedInRow(matrix, row, num) &&
    !usedInCol(matrix, col, num) &&
    !usedInBox(matrix, row - (row % 3), col - (col % 3), num)
  )
}

// 检查要填写数字是否在当前行中已存在
function usedInRow(matrix, row, num) {
  for (let col = 0; col < matrix.length; col++) {
    if (matrix[row][col] === num) {
      return true
    }
  }
  return false
}
// 检查要填写数字是否在当前列中已存在
function usedInCol(matrix, col, num) {
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][col] === num) {
      return true
    }
  }
  return false
}
// 检查要填写数字是否在 3 * 3 的矩阵中已存在
function usedInBox(matrix, boxStartRow, boxStartCol, num) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (matrix[row + boxStartRow][col + boxStartCol] === num) {
        return true
      }
    }
  }
  return false
}

const grid = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
]
const res = sudo(grid)
console.log(res)
