const simpleBox = require('./simple-box');
const MSDCards = require('./msd-cards');
const SDCards = require('./sd-cards');
const USBDrivesTall = require('./usb-drives-tall');
const USBDrivesShort = require('./usb-drives-short');
const miniRemoteControlBox = require('./mini-remote-control-box');
const chessSetBox = require('./chess-set-box');

module.exports = [
	...simpleBox,
	...MSDCards,
	...SDCards,
	...USBDrivesTall,
	...USBDrivesShort,
	...miniRemoteControlBox,
	...chessSetBox,
];
