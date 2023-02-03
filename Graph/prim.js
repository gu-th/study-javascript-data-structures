/*
 * @Author       : guth
 * @Date         : 2023-01-10 09:45:40
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-11 16:58:01
 * @FilePath     : /study-javascript-data-structures/Graph/Prim.js
 * @Description  : 一种求解加权无向连通图的MST问题的贪心算法
 *
 * 找出某种边的子集，使其构成的树包含图中所有顶点，且边的权值最小
 *                 MST - 最小生成树
 */

const graph = [
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
    // 找出最小值
    const u = minKey(graph, key, visited)
    visited[u] = true
    for (let v = 0; v < length; v++) {
      if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
        // 如果有更小的权值，则保存MST路径
        parent[v] = u
        // 然后更新权值
        key[v] = graph[u][v]
      }
    }
  }
  // 返回包含MST的结果
  return parent
}

const minKey = (graph, key, visited) => {
  let min = INF
  let minIndex = 0
  for (let v = 0; v < graph.length; v++) {
    if (visited[v] === false && key[v] < min) {
      min = key[v]
      minIndex = v
    }
  }
  return minIndex
}

const res =  prim(graph)
console.log(res);
