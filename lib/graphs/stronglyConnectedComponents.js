// Takes an adjacency list, returns order of recursive calls
function  dfs(graph, source = 0, visited = {}) {
  const stack = [];

  (function getOrder(node) {
    visited[node] = true;
    for (let i = 0; i < graph[node].length; i++) {
      const adjacentNode = graph[node][i];
      if (!visited[adjacentNode]) {
        getOrder(adjacentNode);
      }
    }
    stack.push(node);
  })(source);

  return stack;
}

// Reverse edges
function transposeGraph(graph) {
  const transposed = graph.map(() => []);
  graph.forEach((node, nodeIndex) => {
    node.forEach(adjacentNode => {
      transposed[adjacentNode].push(nodeIndex);
    });
  });
  return transposed;
}

// Find strongly connected components
function getScc(stack, transposedGraph) {
  const stronglyConnectedComponents = [];
  const visited = {};

  while (stack.length) {
    const source = stack.pop();
    if (visited[source]) {
      continue;
    } else {
      const findScc = dfs(transposedGraph, source, visited);
      stronglyConnectedComponents.push(findScc);
      findScc.forEach(node => visited[node] = true);
    }
  }

  return stronglyConnectedComponents;
}

const scc = graph => getScc(dfs(graph), transposeGraph(graph));

module.exports.dfs = dfs;
module.exports.transposeGraph = transposeGraph;
module.exports.scc = scc;
