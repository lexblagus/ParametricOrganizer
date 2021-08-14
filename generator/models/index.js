const newEg = require('./new');
const development = require('./development');
const drawerOrganizers = require('./drawer-organizers');
const ringHanger = require('./ring-hanger');

module.exports = [
	...newEg,
	...development,
	...drawerOrganizers,
	...ringHanger,
];
