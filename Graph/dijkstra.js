/*
 * @Author       : guth
 * @Date         : 2023-01-04 16:18:09
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-11 16:58:28
 * @FilePath     : /study-javascript-data-structures/Graph/dijkstra.js
 * @Description  : dijkstra
 *
 * dijkstra 算法 是一种计算从单个源到所有其他源的最短路径的贪心算法
 * 我们可以用它计算从图的一个顶点到其余各顶点的最短路径
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

const INF = Number.MAX_SAFE_INTEGER

/**
 *
 * @param {*} graph 邻接矩阵图
 * @param {*} src 一个源顶点
 */
const dijkstra = (graph, src) => {
  const dist = []
  const visited = []
  const { length } = graph
  for (let i = 0; i < length; i++) {
    // 将所有距离初始化为无限大
    dist[i] = INF
    // visited[] 初始化为false，即未访问过
    visited[i] = false
  }
  // 源顶点到自己的距离设为 0
  dist[src] = 0

  // 找到其余顶点的最短路径
  for (let i = 0; i < length - 1; i++) {
    // 从未处理的顶点中找出最近的顶点
    const u = minDistance(dist, visited)
    // 选出的顶点标记为 visited 避免重复计算
    visited[u] = true
    for (let v = 0; v < length; v++) {
      // 该顶点未计算过；该顶点与 u 存在路径；u距离源顶点不是无限大；u到源顶点距离 + uv距离 < v到源顶点距离
      if (!visited[v] && graph[u][v] !== 0 && dist[u] !== INF && dist[u] + graph[u][v] < dist[v]) {
        // 找到最短的路径，更新路径
        dist[v] = dist[u] + graph[u][v]
      }
    }
  }
  // 返回从源顶点到其他顶点最短路径的结果
  return dist
}


/**
 * 找到路径中的最小值并返回坐标
 * @param {*} dist 
 * @param {*} visited 
 * @returns 
 */
const minDistance = (dist, visited) => {
  let min = INF
  let minIndex = -1
  for (let v = 0; v < dist.length; v++) {
    if (visited[v] === false && dist[v] <= min) {
      min = dist[v]
      minIndex = v
    }
  }
  return minIndex
}
