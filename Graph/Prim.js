/*
 * @Author       : guth
 * @Date         : 2023-01-10 09:45:40
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-10 15:04:49
 * @FilePath     : /study-javascript-data-structures/Graph/Prim.js
 * @Description  : 一种求解加权无向连通图的MST问题的贪心算法
 *
 * 找出某种边的子集，使其构成的树包含图中所有顶点，且边的权值最小
 *                 MST - 最小生成树
 */

const grapg = [
  [0, 2, 4, 0, 0, 0],
  [2, 0, 2, 4, 2, 0],
  [4, 2, 0, 0, 3, 0],
  [0, 4, 0, 0, 3, 2],
  [0, 2, 3, 3, 0, 2],
  [0, 0, 0, 2, 2, 0],
]

const INF = Number.MAX_SAFE_INTEGER

const prim = (graph) => {
  const parent = []
  const key = []
  // 节点是否访问过
  const visited = []
  const { length } = graph
  // 初始化
  for (let i = 0; i < length; i++) {
    key[i] = INF
    visited[i] = false
  }
  // 用第一个key作为顶点, 是mst的根节点
  key[0] = 0
  // 根节点的父节点
  parent[0] = -1
  for (let i = 0; i < length - 1; i++) {
    const u = minKey(graph, key, visited)
    visited[u] = true
    for (let v = 0; v < length; v++) {
      if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
        parent[v] = u
        key[v] = graph[u][v]
      }
    }
  }
}

const minKey = (graph, key, visited) => {
  // let min = INF
  // let minIndex = -1
  // for (let v = 0; v < dist.length; v++) {
  //   if (visited[v] === false && dist[v] <= min) {
  //     min = dist[v]
  //     minIndex = v
  //   }
  // }
  // return minIndex
}
