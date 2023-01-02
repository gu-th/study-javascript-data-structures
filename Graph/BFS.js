const COLOR = {
  // 白色 该顶点还未被访问
  WHITE: 0,
  // 灰色 该顶点被访问过，但并未被探索过
  GREY: 1,
  // 黑色 该顶点被访问过且被完全探索过
  BLACK: 2
}

/**
 * 初始化每个节点的颜色
 * @param {*} vertices 
 * @returns color
 */
const initializeColor = vertices => {
  const color = {}
  vertices.forEach(v => color[v] = COLOR.WHITE)
  return color
}

/**
 * 
 * @param {Graph} graph 
 * @param {*} startVertex 
 * @param {*} callback 
 */
const breadthFirstSearch = (graph, startVertex, callback) => {
  // const vertices = graph.getVertices
}

// module.exports  = 