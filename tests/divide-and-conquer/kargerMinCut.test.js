import test from 'ava';
import { kargerMinCut } from '../../';
import path from 'path';
import fs from 'fs';
import readLine from 'readline';

const getData = new Promise((resolve, reject) => {
	const vertices = {};
	/*
		Input is a TSV file detailing an undirected graph, where the first column is the vertex label.
		Succeeding columns are adjacent (connected) vertices.
	*/
	const rl = readLine.createInterface({
		input: fs.createReadStream(path.resolve(__dirname + '/resources/kargerMinCut_data.txt'))
	});

	rl.on('line', (input) => {
		let inputToArr = input.split('\t');

		// Ignore input with no data or an isolated vertex.
		if (inputToArr.length <= 1) return;

		// Remove blank lines
		inputToArr = inputToArr.filter(x => x !== '');

		vertices[inputToArr[0]] = inputToArr.slice(1);
	});

	rl.on('close', (input) => {
		resolve(vertices);
	});
});

test('KargerMinCut does not mutate args', async t => {
	t.plan(1);

	const data = await getData;
	const result = kargerMinCut(data);

	// The true answer is 17. There's a random chance of this failing, but it's low.
	t.is(17, result);
});
