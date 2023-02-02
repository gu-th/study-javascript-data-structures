/*
 * @Author       : guth
 * @Date         : 2023-02-02 15:20:23
 * @LastEditors  : guth
 * @LastEditTime : 2023-02-02 15:32:16
 * @FilePath     : /study-javascript-data-structures/algorithms/backtracking/ratInAMaze.js
 * @Description  : 迷宫老鼠问题
 */

function ratInAMaze(maze) {
  const solution = []
  // 构建一个解的矩阵，初始化每个位置为 0，老鼠的行动路径标记为 1
  for (let i = 0; i < maze.length; i++) {
    solution[i] = []
    for (let j = 0; j < maze[i].length; j++) {
      solution[i][j] = 0
    }
  }
  if (findPath(maze, 0, 0, solution) === true) {
    return solution
  }
  return 'NO PATH FOUND'
}

function findPath(maze, x, y, solution) {
  const n = maze.length
  // 验证是否到达终点，如果到达，结束
  if (x === n - 1 && y === n - 1) {
    solution[x][y] = 1
    return true
  }
  if (isSafe(maze, x, y) === true) {
    // 当前路径可通过，移动一步
    solution[x][y] = 1
    // 判断当前路径下一步是否能移动
    if (findPath(maze, x + 1, y, solution)) {
      return true
    }
    if (findPath(maze, x, y + 1, solution)) {
      return true
    }
    // 当前路径的下一步不能通过，那么就不走当前的路径，即回溯
    solution[x][y] = 0
    return false
  }
  return false
}

function isSafe(maze, x, y) {
  const n = maze.length
  // 验证位置是否可通过
  if (x >= 0 && y >= 0 && x < n && y < n && maze[x][y] !== 0) {
    return true
  }
  return false
}

