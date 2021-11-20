class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      v => v !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      v => v !== v1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start) {
    const result = [];
    let visited = {};

    // context of this would change in helper function
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      })
    }(start)); // IIFE 

    return result;
  }

  depthFirstIterative(start) {
    // init start at the stack and mark it as visited
    const stack = [start];
    const result = [];
    const visited = {};

    let currentVertex;
    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      // accessing neighbor
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          // mark and push visited
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      })
    }
    return result;
  }

  breadthFirst(start) {
    // init start at the stack and mark it as visited
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    let currentVertex;
    while (queue.length) {
      // remove the first vertex in the queue
      currentVertex = queue.shift();
      // and push it into result
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    return result;
  }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F




