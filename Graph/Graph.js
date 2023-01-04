/*
* @Author       : guth
* @Date         : 2022-12-31 22:22:28
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-04 11:24:06
 * @FilePath     : /study-javascript-data-structures/Graph/Graph.js
* @Description  : 图的邻接表实现
*/
const Dictionary = require("../Dictionary/Dictionary")
class Graph {
  constructor(isDirected = false) {
    // 图是否有向，默认无向
    this.isDirected = isDirected
    // 存储图中所有顶点的名字
    this.vertices = []
    // 存储邻接表， 顶点的名字作键，邻接顶点列表作值
    this.adjList = new Dictionary()
  }

  /**
   * 向图中添加一个顶点
   * @param {any} v 
   */
  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v)
      // 邻接顶点列表用数组存储
      this.adjList.set(v, [])
    }
  }

  /**
   * 添加顶点之间的边
   * @param {*} v 顶点
   * @param {*} w 顶点
   */
  addEdge(v, w) {
    // 验证点是否存在图中，不存在则加入顶点列表
    if (!this.adjList.get(v)) {
      this.addVertex(v)
    }
    // 验证点是否存在图中，不存在则加入顶点列表
    if (!this.adjList.get(w)) {
      this.addVertex(w)
    }
    // 添加一条自顶点v 到 顶点w 之间的边
    this.adjList.get(v).push(w)
    if (!this.isDirected) {
      // 如果是无向图，就添加另一个方向的边
      this.adjList.get(w).push(v)
    }
  }

  /**
   * 返回 顶点列表
   * @returns 
   */
  getVertices() {
    return this.vertices
  }
  /**
   * 返回 邻接表
   * @returns 
   */
  getAdjList() {
    return this.adjList
  }


  toString() {
    let str = ''
    for (let i = 0; i < this.vertices.length; i++) {
      const v = this.vertices[i]
      str += `${v} -> `
      const arr = this.adjList.get(v)
      arr.forEach(e => str += `${e} `)
      str += '\n'
    }
    return str
  }
}
module.exports = Graph