const negativeRound = require('./negative-round');
const positiveRound = require('./positive-round');
const block1xN01 = require('./block-1xN-01');
const block1xN02 = require('./block-1xN-02');

module.exports = [
	...negativeRound,
	...positiveRound,
	...block1xN01,
	...block1xN02,
];
