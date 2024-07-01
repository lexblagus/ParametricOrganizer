const development = require('./development');
const sizeSamples = require('./size-samples');
const drawerOrganizers = require('./drawer-organizers');
const bitsTipsDrillsTools = require('./bits-tips-drills-tools');
const tipsToolsChucks = require('./tips-tools-chucks');
const boxes = require('./boxes');
const ringHanger = require('./ring-hanger');
const spoolHolder = require('./spool-holder');
const batteries = require('./batteries');

module.exports = [
	...development,
	...sizeSamples,
	...boxes,
	...bitsTipsDrillsTools,
	...tipsToolsChucks,
	...drawerOrganizers,
	...ringHanger,
	...spoolHolder,
	...batteries,
];
