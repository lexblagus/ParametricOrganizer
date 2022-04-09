const simpleBox = require('./simple-box');
const miniRemoteControlBox = require('./mini-remote-control-box');
const chessSetBox = require('./chess-set-box');

module.exports = [
	...simpleBox,
	...miniRemoteControlBox,
	...chessSetBox,
];
