import test from 'ava';
import dijkstra from '../../lib/graphs/dijkstra';

test('Test dfs with small graph', t => {
	const graph = [{ 1: 2 }, { 2: 3 }, { 0: 1 }];
	const result = dijkstra(graph, 2);
	const expected = {
		path: [0, 1],
		distance: 5,
	};

	t.deepEqual(result, expected);
});
