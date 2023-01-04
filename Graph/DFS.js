/*
 * @Author       : guth
 * @Date         : 2023-01-04 14:02:09
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-04 16:14:50
 * @FilePath     : /study-javascript-data-structures/Graph/DFS.js
 * @Description  : 深度优先搜索实现
 */

const { COLOR } = require('../utils/constant')
const { initializeColor } = require('../utils/utils')

const depthFirthSearch = (graph, callback) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  // 所有顶点标记为白色
  const color = initializeColor(vertices)

  vertices.forEach((v) => {
    if (color[v] === COLOR.WHITE) {
      depthFirthSearchVisit(v, color, adjList, callback)
    }
  })
}

const depthFirthSearchVisit = (u, color, adjList, callback) => {
  color[u] = COLOR.GREY
  if (callback) callback()
  const neighbors = adjList.get(u)
  neighbors.forEach((n) => {
    if (color[v] === COLOR.WHITE) {
      depthFirthSearchVisit(n, color, adjList, callback)
    }
  })
  color[u] = COLOR.BLACK
}

/**
 * 遍历图的所有节点，构建森林（有根树的一个集合） 及 一组源顶点（根）
 * 输出两个数组：发现时间和完成探索时间
 * @param {Graph} graph
 */
const DFS = (graph) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  // 所有顶点标记为白色
  const color = initializeColor(vertices)
  // 发现时间
  const d = {}
  // 完成时间
  const f = {}
  // 前溯节点
  const p = {}
  const time = { count: 0 }

  vertices.forEach((v) => {
    f[v] = 0
    d[v] = 0
    p[v] = null
  })

  vertices.forEach((v) => {
    if (color[v] === COLOR.WHITE) {
      DFSVisit(v, color, d, f, p, time, adjList)
    }
  })
  return {
    discovery: d,
    finished: f,
    predecessors: p,
  }
}

const DFSVisit = (u, color, d, f, p, time, adjList) => {
  color[u] = COLOR.GREY
  d[u] = ++time.count
  const neighbors = adjList.get(u)
  neighbors.forEach((n) => {
    if (color[n] === COLOR.WHITE) {
      p[n] = u
      DFSVisit(v, color, d, f, p, time, adjList)
    }
  })
  color[u] = COLOR.BLACK
  f[u] = ++time.count
}


module.exports = {
  depthFirthSearch,
  DFS
}