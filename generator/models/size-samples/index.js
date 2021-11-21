const negativeRound = require('./negative-round');
const positiveRound = require('./positive-round');
const block = require('./block');

module.exports = [
	...negativeRound,
	...positiveRound,
	...block,
];
