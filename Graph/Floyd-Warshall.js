/*
 * @Author       : guth
 * @Date         : 2023-01-09 16:00:59
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-10 09:44:35
 * @FilePath     : /study-javascript-data-structures/Graph/Floyd-Warshall.js
 * @Description  : Floyd-Warshall实现 一种计算图中所有最短路径的动态规划算法
 */
/**
 *               4
 *        B      →     D
 *    2↗    ↘           ↘  2
 *  A    2↓    ↘ 2   ↑3      F
 *    ↘      3   ↘
 *    4   C   →       E   ↗  2
 */
const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 2, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
]
const FloydWarshall = (graph) => {
  const dist = []
  const { length } = graph
  for (let i = 0; i < length; i++) {
    dist[i] = []
    for (let j = 0; j < length; j++) {
      if (i === j) {
        // 顶点到自身的距离为0
        dist[i][j] = 0
      } else if (graph[i][j] === 0) {
        // 两个顶点之间没有边
        dist[i][j] = Infinity
      } else {
        // 两顶点有边，就先记上本身的权值
        dist[i][j] = graph[i][j]
      }
    }
  }
  // 如果两顶点之间有其他顶点o连接，且经过o的距离小于原本的距离，则两点之间最短距离替换为当前值
  for (let k = 0; k < length; k++) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j]
        }
      }
    }
  }

  return dist
}

const d = FloydWarshall(graph)

console.log(d);