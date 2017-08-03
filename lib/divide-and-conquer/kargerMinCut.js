/**
* @function kargerMinCut
* @param {object} adjacencyList - an adjacency list where keys are vertex labels and properties are an array of strings.
*   { [vertexLabel]: edges }
*   @type {string} - vertexKey - the label of this vertex
*   @type {array} - edges - these are other vertex key strings
* @return {number} - The min cut for this undirected graph
*/

function kargerMinCut(adjacencyList) {
  debugger;
  // Clone adjacencyList. This clones both the object itself & array refs.
  const vertices = {};
  Object.keys(adjacencyList).forEach(key => {
    vertices[key] = [...adjacencyList[key]];
  });
  const verticesKeys = Object.keys(vertices);
  if (verticesKeys.length <= 2) {
    debugger;
    const firstVEdges = vertices[verticesKeys[0]].length;
    return firstVEdges;
  }
  // Select a random vertex.
  const v1 = verticesKeys[Math.floor(Math.random() * verticesKeys.length)];
  // Select a random vertex sharing an edge with v1
  const v2 = vertices[v1][Math.floor(Math.random() * vertices[v1].length)];
  // Merge everything from the second vertex into the first, including all edges.

  vertices[v2].forEach(connectedEdge => {
    if (connectedEdge !== v1) {
      // Avoid self loops, but add v2's edges to v1
      vertices[v1].push(connectedEdge);
    }

    // Remove items from connected edges
    vertices[connectedEdge].forEach((item, i) => {
      if (item === v2) {
        // Swap v2 with v1
        vertices[connectedEdge].splice(i, 1, v1);
      }
    });

    // Remove refs to v2 from v1
    vertices[v1].forEach((item, i) => {
      if (item === v2 || item === v1) {
        // Delete self edges
        vertices[v1].splice(i, 1);
      }
    });
  });

  delete vertices[v2];

  return kargerMinCut(vertices);
}

function runMultipleTimes(adjacencyList, timesToRun = 100) {
  // As Karger's algo has a random chance of failure, run n times & return min result
  const results = [];
  for (let i = 0; i < timesToRun; i++) {
    results.push(kargerMinCut(adjacencyList));
  }
  const minValue = Math.min(...results);
  return minValue;
}

module.exports = runMultipleTimes;
