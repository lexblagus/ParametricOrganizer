const simple = require('./simple');
const flatLid = require('./flat-lid');
const simpleLid = require('./simple-lid');
const seamlessLid = require('./seamless-lid');
const largeSet = require('./large-set');
const miniRemoteControlBox = require('./mini-remote-control-box');
const chessSetBox = require('./chess-set-box');
const byModule = require('./by-module');
const digitalStorage = require('./digital-storage');
const shavingRazorDocks = require('./shaving-razor-docks');

module.exports = [
	...simple,
	...flatLid,
	...simpleLid,
	...seamlessLid,
	...largeSet,
	...miniRemoteControlBox,
	...chessSetBox,
	...byModule,
	...digitalStorage,
	...shavingRazorDocks,
];
