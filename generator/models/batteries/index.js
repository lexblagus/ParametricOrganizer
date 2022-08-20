const batteriesAAA = require('./batteries-AAA');
const batteriesAA = require('./batteries-AA');
const batteries9V = require('./batteries-9V');

module.exports = [
	...batteriesAAA,
	...batteriesAA,
	...batteries9V,
];
