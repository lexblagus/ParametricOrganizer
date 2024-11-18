const simple = require('./simple');
const flatLid = require('./flat-lid');
const simpleLid = require('./simple-lid');
const seamlessLid = require('./seamless-lid');
const largeSet = require('./large-set');
const MSDCards = require('./msd-cards');
const SDCards = require('./sd-cards');
const USBDrivesTall = require('./usb-drives-tall');
const USBDrivesShort = require('./usb-drives-short');
const InternalSSDs = require('./internal-ssds');
const miniRemoteControlBox = require('./mini-remote-control-box');
const chessSetBox = require('./chess-set-box');
const byModule = require('./by-module');

module.exports = [
	...simple,
	...flatLid,
	...simpleLid,
	...seamlessLid,
	...largeSet,
	...MSDCards,
	...SDCards,
	...USBDrivesTall,
	...USBDrivesShort,
	...InternalSSDs,
	...miniRemoteControlBox,
	...chessSetBox,
	...byModule,
];
