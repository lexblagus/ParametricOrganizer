const miniSawDisks = require('./mini-saw-disks');
const nailsNx9 = require('./nails-Nx9');
const printerTips = require('./3d-printer-tips');
const dremelVersaTipsStandard = require('./dremel-versa-tips-standard');
const dremelVersaTipsExtended = require('./dremel-versa-tips-extended');
const smdSolderingStationTips = require('./smd-soldering-station-tips');
const dremelChucks = require('./dremel-chucks');
const drillSharper = require('./drill-sharper');
const routerAdapters = require('./router-adapters');
const oscilatingToolTips = require('./oscilating-tool-tips');
const sandingBandsSmall = require('./sanding-bands-small');
const sandingBandsLarge = require('./sanding-bands-large');

module.exports = [
	...miniSawDisks,
	...nailsNx9,
	...printerTips,
	...dremelVersaTipsStandard,
	...dremelVersaTipsExtended,
	...smdSolderingStationTips,
	...dremelChucks,
	...drillSharper,
	...routerAdapters,
	...oscilatingToolTips,
	...sandingBandsSmall,
	...sandingBandsLarge,
];
