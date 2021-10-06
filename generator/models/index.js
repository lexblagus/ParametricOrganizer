const newModel = require('./new');
const development = require('./development');
const sizeSamples = require('./size-samples');
const drawerOrganizers = require('./drawer-organizers');
const bitsTipsDrillsTools = require('./bits-tips-drills-tools');
const toolBlocks = require('./tool-blocks');
const boxes = require('./boxes');
const ringHanger = require('./ring-hanger');
const spoolHolder = require('./spool-holder');

module.exports = [
	...newModel,
	...development,
	...sizeSamples,
	...boxes,
	...bitsTipsDrillsTools,
	...toolBlocks,
	...drawerOrganizers,
	...ringHanger,
	...spoolHolder,
];
