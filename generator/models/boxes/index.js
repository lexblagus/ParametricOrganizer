const simpleBox = require('./simple-box');
const SDCards = require('./sd-cards');
const miniRemoteControlBox = require('./mini-remote-control-box');
const chessSetBox = require('./chess-set-box');

module.exports = [
	...simpleBox,
	...SDCards,
	...miniRemoteControlBox,
	...chessSetBox,
];
