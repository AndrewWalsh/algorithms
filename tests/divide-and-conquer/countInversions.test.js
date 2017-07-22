import test from 'ava';
import { countInversions } from '../../';

test('CountInversion does not mutate args', t => {
	t.plan(1);
	const testArray = [1,2,3];
  const result = countInversions(testArray);

  t.not(result, testArray, 'Array references are different.');
});

test('CountInversion returns 100 valid arrays each of length 100', t => {
	t.plan(100);

	for (let i = 0; i < 100; i++) {
		const testArray = [];
		for (let x = 0; x < 100; x++) {
			testArray.push(Math.ceil(Math.random() * x));
		}
		const sortedTestArray = testArray.sort((a,b) => a - b);
		const { arr: result } = countInversions(testArray);
		t.deepEqual(result, sortedTestArray, 'Correctly sorts array');
	}
});

test('CountInversion returns correct inversion count for [1,3,2]', t => {
	t.plan(1);

	const testArray = [1,3,2];
	const expected = 1;
	const { count: result } = countInversions(testArray);
	t.deepEqual(result, expected, 'Correctly counts inversions');
});

test('CountInversion returns correct inversion count for [1,3,4,5,6,1,2,35,9]', t => {
	t.plan(1);

	const testArray = [1,3,4,5,6,1,2,35,9];
	const expected = 10;
	const { count: result } = countInversions(testArray);
	t.deepEqual(result, expected, 'Correctly counts inversions');
});
