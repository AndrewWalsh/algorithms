// Divide & Conquer
const mergeSort = require('./lib/divide-and-conquer/mergeSort');
const countInversions = require('./lib/divide-and-conquer/countInversions');
const quickSort = require('./lib/divide-and-conquer/quickSort');
const kargerMinCut = require('./lib/divide-and-conquer/kargerMinCut');
// Graphs
const { scc } = require('./lib/graphs/stronglyConnectedComponents');
const dijkstra = require('./lib/graphs/dijkstra');

module.exports = {
  mergeSort,
  countInversions,
  quickSort,
  kargerMinCut,

  scc,
  dijkstra,
};
