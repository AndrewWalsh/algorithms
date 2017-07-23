import test from 'ava';
import { quickSort } from '../../';

test('QuickSort does not mutate args', t => {
	t.plan(1);
	const testArray = [1,2,3];
  const result = quickSort(testArray);

  t.not(result, testArray, 'Array references are different.');
});

test('QuickSort returns 100 valid arrays, each of length 100', t => {
	t.plan(100);

	for (let i = 0; i < 100; i++) {
		const testArray = [];
		for (let x = 0; x < 100; x++) {
			testArray.push(Math.ceil(Math.random() * x));
		}
		const sortedTestArray = testArray.sort((a,b) => a - b);
		const result = quickSort(testArray);
		t.deepEqual(result, sortedTestArray, 'Correctly sorts array');
	}
});
