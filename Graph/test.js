const Stack = require('../Stack/Stack')
const { breadthFirstSearch, BFS } = require('./BFS')
const Graph = require('./Graph')

function test() {
  const graph = new Graph()
  const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
  vertices.forEach((v) => graph.addVertex(v))
  graph.addEdge('A', 'B')
  graph.addEdge('A', 'C')
  graph.addEdge('A', 'D')
  graph.addEdge('C', 'D')
  graph.addEdge('C', 'G')
  graph.addEdge('D', 'G')
  graph.addEdge('D', 'H')
  graph.addEdge('B', 'E')
  graph.addEdge('B', 'F')
  graph.addEdge('E', 'I')

  console.log(graph.toString())

  breadthFirstSearch(graph, 'A', (vertex) => {
    console.log(vertex)
  })

  const { distances, predecessors } = BFS(graph, 'A')
  console.log(distances, predecessors)

  // 利用前溯节点 构建路径
  const fromVertex = vertices[0]
  vertices.forEach((v) => {
    const path = new Stack()
    for (let i = v; i !== fromVertex; i = predecessors[i]) {
      path.push(i)
    }
    path.push(fromVertex)
    let str = path.pop()
    while (!path.isEmpty()) {
      str += ' - ' + path.pop()
    }
    console.log(str);
  })

}

test()
