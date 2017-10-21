function dijkstra(graph, target, source = 0) {
	const visited = [];
	const distance = [];
	const previous = [];

	graph.forEach((v, i) => {
		visited.push(i);
		distance.push(Infinity);
		previous.push(undefined);
	});

	distance[source] = 0;

	while (visited.length) {
		const minDistVertex = visited.reduce((minV, curV) => distance[curV] < distance[minV] ? curV : minV);
		visited.splice(visited.indexOf(minDistVertex), 1);

		const currentNode = graph[minDistVertex];
		Object.keys(currentNode).forEach(edgeLabel => {
			const edgeWeight = currentNode[edgeLabel];
			const path = distance[minDistVertex] + edgeWeight;
			if (path < distance[edgeLabel]) {
				distance[edgeLabel] = path;
				previous[edgeLabel] = minDistVertex;
			}
		});
	}

	return {
		path: previous.filter(x => x !== undefined),
		distance: distance.pop(),
	};
}

module.exports = dijkstra;
