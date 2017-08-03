import test from 'ava';
import {
	dfs,
	transposeGraph
} from '../../lib/graphs/stronglyConnectedComponents';
import { scc } from '../../';

test('Test dfs with small graph', t => {
	const graph = [[1], [2], [3, 4], [0], [5], [6], [4]];
	const result = dfs(graph);
	const expected = [3, 6, 5, 4, 2, 1, 0];

	t.deepEqual(result, expected);
});

test('Test transposeGraph with small graph', t => {
	const graph = [[1], [2], [3, 4], [0], [5], [6], [4]];
	const result = transposeGraph(graph);
	const expected = [[3], [0], [1], [2], [2, 6], [4], [5]];

	t.deepEqual(result, expected);
});

test('Test scc with small graph', t => {
	const graph = [[1], [2], [3, 4], [0], [5], [6], [4]];
	const result = scc(graph);
	const expected = [[1, 2, 3, 0], [5, 6, 4]];

	t.deepEqual(result, expected);
});
