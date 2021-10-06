const negativeRound = require('./negative-round');
const positiveRound = require('./positive-round');

module.exports = [
	...negativeRound,
	...positiveRound,
];
