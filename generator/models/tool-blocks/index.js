const miniSawDisks = require('./mini-saw-disks');
const nailsNx9 = require('./nails-Nx9');
const printerTips = require('./3d-printer-tips');
const dremelVersaTips = require('./dremel-versa-tips');
const smdSolderingStationTips = require('./smd-soldering-station-tips');

module.exports = [
	...miniSawDisks,
	...nailsNx9,
	...printerTips,
	...dremelVersaTips,
	...smdSolderingStationTips,
];
