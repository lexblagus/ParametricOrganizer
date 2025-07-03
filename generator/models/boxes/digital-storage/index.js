const mSDCards = require('./msd-cards');
const sDCards = require('./sd-cards');
const uSBDrivesTall = require('./usb-drives-tall');
const uSBDrivesShort = require('./usb-drives-short');
const internalSSDs = require('./internal-ssds');
const diskDrivesSmall = require('./disk-drives-small');
const diskDrivesDesktop = require('./disk-drives-desktop');

module.exports = [
	...mSDCards,
	...sDCards,
	...uSBDrivesTall,
	...uSBDrivesShort,
	...internalSSDs,
	...diskDrivesSmall,
	...diskDrivesDesktop,
];
