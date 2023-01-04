/*
 * @Author       : guth
 * @Date         : 2023-01-03 15:14:31
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-04 14:05:50
 * @FilePath     : /study-javascript-data-structures/Graph/BFS.js
 * @Description  : 广度优先搜索实现
 */
const Queue = require('../Queue/Queue')
const { COLOR } = require('../utils/constant')
const { initializeColor } = require('../utils/utils')

/**
 *
 * @param {Graph} graph
 * @param {*} startVertex
 * @param {*} callback
 */
const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  // 所有顶点标记为白色
  const color = initializeColor(vertices)
  // 创建队列
  const queue = new Queue()
  // 向队列中放入初始节点
  queue.enqueue(startVertex)
  while (!queue.isEmpty()) {
    // 取出一个顶点
    const u = queue.dequeue()
    // 将取出的顶点标记为灰色
    color[u] = COLOR.GREY
    // 取出邻接顶点
    const neighbors = adjList.get(u)
    // 未被访问过的邻接顶点标记为灰色并放入队列
    neighbors.forEach((n) => {
      if (color[n] === COLOR.WHITE) {
        color[n] = COLOR.GREY
        queue.enqueue(n)
      }
    })
    // 这个顶点访问过，也探索完了，标记为黑色
    color[u] = COLOR.BLACK
    // 回调
    if (callback) callback(u)
  }
}

const BFS = (graph, startVertex) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor(vertices)
  const queue = new Queue()
  // 标记从 v 到 u 的顶点距离
  const distances = {}
  // 前溯点, 即某一节点的上一个节点，用来推导出从 v 到其他每个顶点 u 的最短路径
  const predecessors = {}
  // 初始化
  vertices.forEach((v) => {
    distances[v] = 0
    predecessors[v] = null
  })

  queue.enqueue(startVertex)
  while (!queue.isEmpty()) {
    const u = queue.dequeue()
    color[u] = COLOR.GREY
    const neighbors = adjList.get(u)
    neighbors.forEach((n) => {
      if (color[n] === COLOR.WHITE) {
        color[n] = COLOR.GREY
        // u 是 n 的 上一个节点，所以 n 的距离 + 1
        distances[n] = distances[u] + 1
        // 记录 n 的上一个节点 是 u
        predecessors[n] = u
        queue.enqueue(n)
      }
    })
    color[u] = COLOR.BLACK
  }
  return {
    distances,
    predecessors,
  }
}

module.exports = {
  breadthFirstSearch,
  BFS,
}
