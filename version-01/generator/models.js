// —————————————————————————————————————————————————————————————————————————————
// Thingverse examples
// —————————————————————————————————————————————————————————————————————————————
const thingiverseActive = false;
const thingiverse = [
	{
		"active": thingiverseActive,
		"props": {
			"Outer_shell_prefix": "Thingiverse sample 1",
			"Outer_shell_width": [100],
			"Outer_shell_length": [50],
			"Outer_shell_height": [25],
			"Min_floor_height": [2.5],
			"Modules": [5, 10],
			"Hang_depth_height": [-20],
			"Hang_diameter": {
				"start": 7.5, 
				"step": 1, 
				"end": 7.5
			},
			"Hang_faces": [360/4],
			"Hang_rotation": [0],
		}
	},
	{
		"active": thingiverseActive,
		"props": {
			"Outer_shell_prefix": "Thingiverse sample 2",
			"Outer_shell_width": [200],
			"Outer_shell_length": [150],
			"Outer_shell_height": [15],
			"Min_floor_height": [2.5],
			"Modules": [7, 9],
			"Hang_depth_height": [10],
			"Hang_diameter": {
				"start": 7.5, 
				"step": 1, 
				"end": 7.5
			},
			"Hang_faces": [360/4],
			"Hang_rotation": [0],
		}
	},
	{
		"active": thingiverseActive,
		"props": {
			"Outer_shell_prefix": "Thingiverse sample 3",
			"Outer_shell_width": [150],
			"Outer_shell_length": [80],
			"Outer_shell_height": [20],
			"Min_floor_height": [2.5],
			"Modules": [3, 6],
			"Hang_depth_height": [-18],
			"Hang_diameter": {
				"start": 24, 
				"step": 1, 
				"end": 24
			},
			"Hang_faces": [8],
			"Hang_rotation": [360 / 8 / 2],
		}
	},
	{
		"active": thingiverseActive,
		"props": {
			"Outer_shell_prefix": "Thingiverse sample 5",
			"Outer_shell_width": [30, 60],
			"Outer_shell_length": [30, 60],
			"Outer_shell_height": [6, 12],
			"Min_floor_height": [2.5],
			"Modules": [3, 3],
			"Hang_depth_height": [6],
			"Hang_diameter": {
				"start": 1.5, 
				"step": 1.5, 
				"end": 4.5
			},
			"Hang_faces": [360 / 10],
			"Hang_rotation": [0],
		},
	},
];


// —————————————————————————————————————————————————————————————————————————————
// Samples 1x1 triangle, square and round
// —————————————————————————————————————————————————————————————————————————————
const sizeSamples1x1SmallActive = false;
const sizeSamples1x1Small_Modules = [1 , 1];
const sizeSamples1x1Small_HangFaces = [3, 4, 36]; // [6]; //
const sizeSamples1x1Small_HangRotation =  [30, 45, 0]; // [0]; //
const sizeSamples1x1Small = [
	{
		"active": sizeSamples1x1SmallActive,
		"props": {
			"Outer_shell_prefix": "Size sample 5mm",
			"Outer_shell_width": [5],
			"Outer_shell_length": [5],
			"Outer_shell_height": [10],
			"Min_floor_height": [1],
			"Modules": sizeSamples1x1Small_Modules,
			"Hang_depth_height": [-10, 10],
			"Hang_diameter": {
				"start": 0.1, 
				"step": 0.1, 
				"end": 5
			},
			"Hang_faces": sizeSamples1x1Small_HangFaces,
			"Hang_rotation": sizeSamples1x1Small_HangRotation,
		}
	},
	{
		"active": sizeSamples1x1SmallActive,
		"props": {
			"Outer_shell_prefix": "Size sample 10mm",
			"Outer_shell_width": [10],
			"Outer_shell_length": [10],
			"Outer_shell_height": [10],
			"Min_floor_height": [1],
			"Modules": sizeSamples1x1Small_Modules,
			"Hang_depth_height": [-10, 10],
			"Hang_diameter": {
				"start": 5, 
				"step": 0.1, 
				"end": 10
			},
			"Hang_faces": sizeSamples1x1Small_HangFaces,
			"Hang_rotation": sizeSamples1x1Small_HangRotation,
		}
	},
	{
		"active": sizeSamples1x1SmallActive,
		"props": {
			"Outer_shell_prefix": "Size sample 15mm",
			"Outer_shell_width": [15],
			"Outer_shell_length": [15],
			"Outer_shell_height": [15],
			"Min_floor_height": [1],
			"Modules": sizeSamples1x1Small_Modules,
			"Hang_depth_height": [-15, 15],
			"Hang_diameter": {
				"start": 10, 
				"step": 0.25, 
				"end": 15
			},
			"Hang_faces": sizeSamples1x1Small_HangFaces,
			"Hang_rotation": sizeSamples1x1Small_HangRotation,
		}
	},
	{
		"active": sizeSamples1x1SmallActive,
		"props": {
			"Outer_shell_prefix": "Size sample 20mm",
			"Outer_shell_width": [20],
			"Outer_shell_length": [20],
			"Outer_shell_height": [20],
			"Min_floor_height": [1],
			"Modules": sizeSamples1x1Small_Modules,
			"Hang_depth_height": [-20, 20],
			"Hang_diameter": {
				"start": 15, 
				"step": 0.5, 
				"end": 20
			},
			"Hang_faces": sizeSamples1x1Small_HangFaces,
			"Hang_rotation": sizeSamples1x1Small_HangRotation,
		},
	},
];


const sizeSamples1x1LargeActive = false;
const sizeSamples1x1Large = [
	{
		"active": sizeSamples1x1LargeActive,
		"props": {
			"Outer_shell_prefix": "Size sample large",
			"Outer_shell_width": [30],
			"Outer_shell_length": [30],
			"Outer_shell_height": [10],
			"Min_floor_height": [1],
			"Modules": sizeSamples1x1Small_Modules,
			"Hang_depth_height": [-10, 10],
			"Hang_diameter": {
				"start": 20, 
				"step": 1, 
				"end": 30
			},
			"Hang_faces": sizeSamples1x1Small_HangFaces,
			"Hang_rotation": sizeSamples1x1Small_HangRotation,
		}
	},
	{
		"active": sizeSamples1x1LargeActive,
		"props": {
			"Outer_shell_prefix": "Size sample large",
			"Outer_shell_width": [40],
			"Outer_shell_length": [40],
			"Outer_shell_height": [10],
			"Min_floor_height": [1],
			"Modules": sizeSamples1x1Small_Modules,
			"Hang_depth_height": [-10, 10],
			"Hang_diameter": {
				"start": 30, 
				"step": 1, 
				"end": 40
			},
			"Hang_faces": sizeSamples1x1Small_HangFaces,
			"Hang_rotation": sizeSamples1x1Small_HangRotation,
		}
	},
	{
		"active": sizeSamples1x1LargeActive,
		"props": {
			"Outer_shell_prefix": "Size sample large",
			"Outer_shell_width": [50],
			"Outer_shell_length": [50],
			"Outer_shell_height": [10],
			"Min_floor_height": [1],
			"Modules": sizeSamples1x1Small_Modules,
			"Hang_depth_height": [-10, 10],
			"Hang_diameter": {
				"start": 40, 
				"step": 1, 
				"end": 50
			},
			"Hang_faces": sizeSamples1x1Small_HangFaces,
			"Hang_rotation": sizeSamples1x1Small_HangRotation,
		}
	},
	{
		"active": sizeSamples1x1LargeActive,
		"props": {
			"Outer_shell_prefix": "Size sample large",
			"Outer_shell_width": [60],
			"Outer_shell_length": [60],
			"Outer_shell_height": [10],
			"Min_floor_height": [1],
			"Modules": sizeSamples1x1Small_Modules,
			"Hang_depth_height": [-10, 10],
			"Hang_diameter": {
				"start": 50, 
				"step": 1, 
				"end": 60
			},
			"Hang_faces": sizeSamples1x1Small_HangFaces,
			"Hang_rotation": sizeSamples1x1Small_HangRotation,
		}
	},
	{
		"active": sizeSamples1x1LargeActive,
		"props": {
			"Outer_shell_prefix": "Size sample large",
			"Outer_shell_width": [70],
			"Outer_shell_length": [70],
			"Outer_shell_height": [10],
			"Min_floor_height": [1],
			"Modules": sizeSamples1x1Small_Modules,
			"Hang_depth_height": [-10, 10],
			"Hang_diameter": {
				"start": 60, 
				"step": 1, 
				"end": 70
			},
			"Hang_faces": sizeSamples1x1Small_HangFaces,
			"Hang_rotation": sizeSamples1x1Small_HangRotation,
		}
	},
	{
		"active": sizeSamples1x1LargeActive,
		"props": {
			"Outer_shell_prefix": "Size sample large",
			"Outer_shell_width": [80],
			"Outer_shell_length": [80],
			"Outer_shell_height": [10],
			"Min_floor_height": [1],
			"Modules": sizeSamples1x1Small_Modules,
			"Hang_depth_height": [-10, 10],
			"Hang_diameter": {
				"start": 70, 
				"step": 1, 
				"end": 80
			},
			"Hang_faces": sizeSamples1x1Small_HangFaces,
			"Hang_rotation": sizeSamples1x1Small_HangRotation,
		}
	},
	{
		"active": sizeSamples1x1LargeActive,
		"props": {
			"Outer_shell_prefix": "Size sample large",
			"Outer_shell_width": [90],
			"Outer_shell_length": [90],
			"Outer_shell_height": [10],
			"Min_floor_height": [1],
			"Modules": sizeSamples1x1Small_Modules,
			"Hang_depth_height": [-10, 10],
			"Hang_diameter": {
				"start": 80, 
				"step": 1, 
				"end": 90
			},
			"Hang_faces": sizeSamples1x1Small_HangFaces,
			"Hang_rotation": sizeSamples1x1Small_HangRotation,
		}
	},
	{
		"active": sizeSamples1x1LargeActive,
		"props": {
			"Outer_shell_prefix": "Size sample large",
			"Outer_shell_width": [100],
			"Outer_shell_length": [100],
			"Outer_shell_height": [10],
			"Min_floor_height": [1],
			"Modules": sizeSamples1x1Small_Modules,
			"Hang_depth_height": [-10, 10],
			"Hang_diameter": {
				"start": 90, 
				"step": 1, 
				"end": 100
			},
			"Hang_faces": sizeSamples1x1Small_HangFaces,
			"Hang_rotation": sizeSamples1x1Small_HangRotation,
		},
	},
];


// —————————————————————————————————————————————————————————————————————————————
// Sample cases (for storage of samples above)
// —————————————————————————————————————————————————————————————————————————————
const sampleCasesActive = false;
const sampleCasesFloor = 1;
const sampleCasesModels = [
	{
		innerSize: 5,
		innerHeight: 10,
		extraSpace: 0.75,
		floor: sampleCasesFloor,
		walls: 1,
		modules: [5 , 10], // [1,1],
	},
	{
		innerSize: 10,
		innerHeight: 10,
		extraSpace: 1,
		floor: sampleCasesFloor,
		walls: 1,
		modules: [5 , 10], // [1,1],
	},
	/*
	{
		innerSize: 15,
		innerHeight: 15,
		extraSpace: 0.5,
		floor: sampleCasesFloor,
		walls: 1,
		modules: [2 , 3], // [1,1],
	},
	{
		innerSize: 20,
		innerHeight: 20,
		extraSpace: 0.5,
		floor: sampleCasesFloor,
		walls: 1,
		modules: [2 , 3], // [1,1],
	},
	*/
];

const sampleCases = sampleCasesModels.map(modelSettings => ({
	"active": sampleCasesActive,
	"props": {
		"Outer_shell_prefix": `Samples case`,
		"Outer_shell_width": [
			( modelSettings.innerSize + modelSettings.extraSpace + ( modelSettings.walls * 2) ) * modelSettings.modules[1]
		],
		"Outer_shell_length": [
			( modelSettings.innerSize + modelSettings.extraSpace + ( modelSettings.walls * 2) ) * modelSettings.modules[0]
		],
		"Outer_shell_height": [
			// ( modelSettings.innerHeight / 2 ) + modelSettings.floor
			( ( modelSettings.innerHeight / 3 ) * 2 ) + modelSettings.floor
		],
		"Min_floor_height": [
			modelSettings.floor
		],
		"Modules": modelSettings.modules,
		"Hang_depth_height": [
			// 0 - ( modelSettings.innerHeight / 2 )
			0 - ( ( modelSettings.innerHeight / 3 ) * 2 )
		],
		"Hang_diameter": {
			"start": modelSettings.innerSize + modelSettings.extraSpace, 
			"step": 1, 
			"end": modelSettings.innerSize + modelSettings.extraSpace
		},
		"Hang_faces": [  4  ],
		"Hang_rotation": [  0  ],
	}
}));


// —————————————————————————————————————————————————————————————————————————————
// MicroSD Card organizer
// —————————————————————————————————————————————————————————————————————————————
const msdcActive = false;
const msdcDimensions = 11.5;
const msdcFloor = 1;
const msdcWall = 1;
const msdcHeight = ( msdcDimensions / 3 ) * 2;
const msdcModules = [3, 3];

const microSDcardOrganizer = sampleCasesModels.map(modelSettings => ({
	"active": msdcActive,
	"props": {
		"Outer_shell_prefix": `MicroSD Card organizer`,
		"Outer_shell_length": [  ( msdcDimensions + (msdcWall * 2) ) * msdcModules[0]  ],
		"Outer_shell_width": [  ( msdcDimensions + (msdcWall * 2) ) * msdcModules[1]  ],
		"Outer_shell_height": [  msdcHeight + msdcFloor  ],
		"Min_floor_height": [  msdcFloor  ],
		"Modules": msdcModules,
		"Hang_depth_height": [  0 - msdcHeight  ],
		"Hang_diameter": {
			"start": msdcDimensions, 
			"step": msdcDimensions, 
			"end": msdcDimensions
		},
		"Hang_faces": [  4  ],
		"Hang_rotation": [  0  ],
	}
}));




// —————————————————————————————————————————————————————————————————————————————
// SD Card adapter organizer
// —————————————————————————————————————————————————————————————————————————————
const sdcAdapterActive = false;
const sdcAdapterDimensions = 24 + 0.5;
const sdcAdapterFloor = 1;
const sdcAdapterWall = 1;
const sdcAdapterHeight = ( 24 / 3 ) * 2;
const sdcAdapterModules = [2, 2];

const sdcAdapterOrganizer = sampleCasesModels.map(modelSettings => ({
	"active": sdcAdapterActive,
	"props": {
		"Outer_shell_prefix": `SD card adapter organizer`,
		"Outer_shell_length": [  ( sdcAdapterDimensions + (sdcAdapterWall * 2) ) * sdcAdapterModules[0]  ],
		"Outer_shell_width": [  ( sdcAdapterDimensions + (sdcAdapterWall * 2) ) * sdcAdapterModules[1]  ],
		"Outer_shell_height": [  sdcAdapterHeight + sdcAdapterFloor  ],
		"Min_floor_height": [  sdcAdapterFloor  ],
		"Modules": sdcAdapterModules,
		"Hang_depth_height": [  0 - sdcAdapterHeight  ],
		"Hang_diameter": {
			"start": sdcAdapterDimensions, 
			"step": sdcAdapterDimensions, 
			"end": sdcAdapterDimensions
		},
		"Hang_faces": [  4  ],
		"Hang_rotation": [  0  ],
	}
}));




// —————————————————————————————————————————————————————————————————————————————
// USB devices organizer
// —————————————————————————————————————————————————————————————————————————————
const usbDevicesOrgActive = false;
const usbDevicesOrgSpace = 0;
const usbDevicesOrgActualDimension = 25; // 12.25 // actual USB tip width;
const usbDevicesOrgDimensions = usbDevicesOrgActualDimension + usbDevicesOrgSpace;
const usbDevicesOrgFloor = 1;
const usbDevicesOrgWall = 1;
const usbDevicesOrgHeight = usbDevicesOrgActualDimension;
const usbDevicesOrgModules = [1, 3]; // [5, 5];

const usbDevicesOrganizer = sampleCasesModels.map(modelSettings => ({
	"active": usbDevicesOrgActive,
	"props": {
		"Outer_shell_prefix": `USB devices organizer 02 `,
		"Outer_shell_length": [
			( usbDevicesOrgDimensions + ( usbDevicesOrgWall * 2 ) ) * usbDevicesOrgModules[0],
			( usbDevicesOrgDimensions + ( usbDevicesOrgWall * 2 ) ) * usbDevicesOrgModules[0],
			( usbDevicesOrgDimensions + ( usbDevicesOrgWall * 2 ) ) * usbDevicesOrgModules[0],
		],
		"Outer_shell_width": [
			( usbDevicesOrgDimensions + (usbDevicesOrgWall * 2) ) * usbDevicesOrgModules[1],
			( usbDevicesOrgDimensions + (usbDevicesOrgWall * 2) ) * usbDevicesOrgModules[1],
			( usbDevicesOrgDimensions + (usbDevicesOrgWall * 2) ) * usbDevicesOrgModules[1],
		],
		"Outer_shell_height": [
			( usbDevicesOrgHeight + usbDevicesOrgFloor ) * 0.5,
			( usbDevicesOrgHeight + usbDevicesOrgFloor ) * 1,
			( usbDevicesOrgHeight + usbDevicesOrgFloor ) * 2,
		],
		"Min_floor_height": [
			usbDevicesOrgFloor
		],
		"Modules": usbDevicesOrgModules,
		"Hang_depth_height": [
			0 - (usbDevicesOrgHeight * 0.5),
			0 - (usbDevicesOrgHeight * 1),
			0 - (usbDevicesOrgHeight * 2),
		],
		"Hang_diameter": {
			"start": usbDevicesOrgDimensions, 
			"step": usbDevicesOrgDimensions, 
			"end": usbDevicesOrgDimensions
		},
		"Hang_faces": [  4  ],
		"Hang_rotation": [  0  ],
	}
}));




// —————————————————————————————————————————————————————————————————————————————
// Soldering spool holder
// —————————————————————————————————————————————————————————————————————————————
solderingSpoolHolderActive = false;
solderingSpoolHolderWalls = 10;
solderingSpoolHolderSize = 75;
solderingSpoolHolderWidth = 70;
solderingSpoolHolderPinDiameter = 17;
solderingSpoolHolderPinFittingGap = 0.11;
solderingSpoolHolderHangFaces = 360 / 4;

const solderingSpoolHolder = [
	// Positive
	{
		"active": solderingSpoolHolderActive,
		"props": {
			"Outer_shell_prefix": "Soldering spool holder",
			"Outer_shell_width": [solderingSpoolHolderSize],
			"Outer_shell_length": [solderingSpoolHolderSize],
			"Outer_shell_height": [solderingSpoolHolderWalls],
			"Min_floor_height": [(solderingSpoolHolderWalls / 2)],
			"Modules": [1, 1],
			"Hang_depth_height": [solderingSpoolHolderWidth + (solderingSpoolHolderWalls / 2)],
			"Hang_diameter": {
				"start": solderingSpoolHolderPinDiameter - solderingSpoolHolderPinFittingGap,
				"step": 1, 
				"end": solderingSpoolHolderPinDiameter - solderingSpoolHolderPinFittingGap,
			},
			"Hang_faces": [solderingSpoolHolderHangFaces],
			"Hang_rotation": [0],
		}
	},
	// Negative
	{
		"active": solderingSpoolHolderActive,
		"props": {
			"Outer_shell_prefix": "Soldering spool holder",
			"Outer_shell_width": [solderingSpoolHolderSize],
			"Outer_shell_length": [solderingSpoolHolderSize],
			"Outer_shell_height": [solderingSpoolHolderWalls],
			"Min_floor_height": [(solderingSpoolHolderWalls / 2)],
			"Modules": [1, 1],
			"Hang_depth_height": [0 - (solderingSpoolHolderWalls / 2)],
			"Hang_diameter": {
				"start": solderingSpoolHolderPinDiameter + solderingSpoolHolderPinFittingGap,
				"step": 1, 
				"end": solderingSpoolHolderPinDiameter + solderingSpoolHolderPinFittingGap,
			},
			"Hang_faces": [solderingSpoolHolderHangFaces],
			"Hang_rotation": [0],
		}
	},
];





// —————————————————————————————————————————————————————————————————————————————
// Lab wall: holders
// —————————————————————————————————————————————————————————————————————————————
const labWallHoldersOuterShellPrefix = "Holders";
const labWallHoldersActive = false;

const labWallHoldersSizes = [50, 100];
const labWallHoldersOuterShellHeightPositive = 2.5;
const labWallHoldersOuterShellHeightNegative = 12.5;
const labWallHoldersChanfer = 5;
const labWallHoldersFittingGap = 0.30 / 2;

const labWallHoldersMinFloorHeight = 1;
const labWallHoldersHangDepthHeight = 10;
const labWallHoldersModules = [1,1]; // fixed

const labWallHoldersNegative = labWallHoldersSizes.map(size => (
	{
		"active": labWallHoldersActive,
		"props": {
			"Outer_shell_prefix": labWallHoldersOuterShellPrefix,
			"Outer_shell_width": [size],
			"Outer_shell_length": [size],
			"Outer_shell_height": [labWallHoldersOuterShellHeightNegative],
			"Min_floor_height": [labWallHoldersMinFloorHeight],
			"Modules": labWallHoldersModules,
			"Hang_depth_height": [0 - labWallHoldersHangDepthHeight],
			"Hang_diameter": {
				"start": size - labWallHoldersChanfer + labWallHoldersFittingGap,
				"step": 1, 
				"end": size - labWallHoldersChanfer + labWallHoldersFittingGap,
			},
			"Hang_faces": [4],
			"Hang_rotation": [0],
		}
	}
));
const labWallHoldersPositive = labWallHoldersSizes.map(size => (
	{
		"active": labWallHoldersActive,
		"props": {
			"Outer_shell_prefix": labWallHoldersOuterShellPrefix,
			"Outer_shell_width": [size],
			"Outer_shell_length": [size],
			"Outer_shell_height": [labWallHoldersOuterShellHeightPositive],
			"Min_floor_height": [labWallHoldersMinFloorHeight],
			"Modules": labWallHoldersModules,
			"Hang_depth_height": [labWallHoldersHangDepthHeight - labWallHoldersMinFloorHeight],
			"Hang_diameter": {
				"start": size - labWallHoldersChanfer - labWallHoldersFittingGap,
				"step": 1, 
				"end": size - labWallHoldersChanfer - labWallHoldersFittingGap,
			},
			"Hang_faces": [4],
			"Hang_rotation": [0],
		}
	}
));
const labWallHolders = [...labWallHoldersNegative, ...labWallHoldersPositive];





// —————————————————————————————————————————————————————————————————————————————
// Lab wall: hexagonal bits
// —————————————————————————————————————————————————————————————————————————————
const labWallHexBitsOuterShellPrefix = "Hex bits";
const labWallHexBitsActive = false;
const labWallHexBitsSize = [50, 50]; // [10, 10]; // 
const labWallHexBitsModules = [5, 5]; // [1, 1]; // 
const labWallHexBitsHangDiameter = 7.5; // taken from samples was 7.3
const labWallHexBitsMinFloorHeight = 1;
const labWallHexBitsHangFaces = 36;
const labWallHexBitsHangRotation =  0;
const labWallHexBitsHeights = [
	[15, 12], // Outer_shell_height, Hang_depth_height
	[20, 18],
	[25, 23]
];

const labWallHexBits = labWallHexBitsHeights.map(size => ({
	"active": labWallHexBitsActive,
	"props": {
		"Outer_shell_prefix": labWallHexBitsOuterShellPrefix,
		"Outer_shell_width": [ labWallHexBitsSize[0] ],
		"Outer_shell_length": [ labWallHexBitsSize[1] ],
		"Outer_shell_height": [ [size[0]] ],
		"Min_floor_height": [labWallHexBitsMinFloorHeight],
		"Modules": labWallHexBitsModules,
		"Hang_depth_height": [0 - size[1]],
		"Hang_diameter": {
			"start": labWallHexBitsHangDiameter,
			"step": 1, 
			"end": labWallHexBitsHangDiameter,
		},
		"Hang_faces": [labWallHexBitsHangFaces],
		"Hang_rotation": [labWallHexBitsHangRotation],
	}
}));





// —————————————————————————————————————————————————————————————————————————————
// Lab wall: Fresas
// —————————————————————————————————————————————————————————————————————————————
const labWallFresasOuterShellPrefix = "Fresas";
const labWallFresasActive = false;
const labWallFresasSize = [50, 150]; // [10, 10]; // [100, 100]; // 
const labWallFresasModules = [15, 5]; // [1, 1]; // [7, 7]; // 
// labWallFresasHangDiameter: measurement was 6.05, sample mismatch, printed 6.25 was almost too small
const labWallFresasHangDiameter = 6.30;
const labWallFresasMinFloorHeight = 1;
const labWallFresasHangFaces = 36;
const labWallFresasHangRotation =  0;
const labWallFresasHeights = [
	[25, 23]
];

const labWallFresas = labWallFresasHeights.map(size => ({
	"active": labWallFresasActive,
	"props": {
		"Outer_shell_prefix": labWallFresasOuterShellPrefix,
		"Outer_shell_width": [ labWallFresasSize[0] ],
		"Outer_shell_length": [ labWallFresasSize[1] ],
		"Outer_shell_height": [ [size[0]] ],
		"Min_floor_height": [labWallFresasMinFloorHeight],
		"Modules": labWallFresasModules,
		"Hang_depth_height": [0 - size[1]],
		"Hang_diameter": {
			"start": labWallFresasHangDiameter,
			"step": 1, 
			"end": labWallFresasHangDiameter,
		},
		"Hang_faces": [labWallFresasHangFaces],
		"Hang_rotation": [labWallFresasHangRotation],
	}
}));





// —————————————————————————————————————————————————————————————————————————————
// Lab wall: Rebolos de pedra
// —————————————————————————————————————————————————————————————————————————————
const labWallRebolosPedraOuterShellPrefix = "Rebolos de pedra";
const labWallRebolosPedraActive = true;
const labWallRebolosPedraSize = [50, 100]; // [10, 10]; // 
const labWallRebolosPedraModules = [9, 5]; // [1, 1]; // 
// not printed 6.4;
// measurement was 6 - 6.4
// tested on sample
// 6.8 is from grosas
const labWallRebolosPedraHangDiameter = 6.8; 
const labWallRebolosPedraMinFloorHeight = 1;
const labWallRebolosPedraHangFaces = 36;
const labWallRebolosPedraHangRotation =  0;
const labWallRebolosPedraHeights = [
	[25, 23]
];

const labWallRebolosPedra = labWallRebolosPedraHeights.map(size => ({
	"active": labWallRebolosPedraActive,
	"props": {
		"Outer_shell_prefix": labWallRebolosPedraOuterShellPrefix,
		"Outer_shell_width": [ labWallRebolosPedraSize[0] ],
		"Outer_shell_length": [ labWallRebolosPedraSize[1] ],
		"Outer_shell_height": [ [size[0]] ],
		"Min_floor_height": [labWallRebolosPedraMinFloorHeight],
		"Modules": labWallRebolosPedraModules,
		"Hang_depth_height": [0 - size[1]],
		"Hang_diameter": {
			"start": labWallRebolosPedraHangDiameter,
			"step": 1, 
			"end": labWallRebolosPedraHangDiameter,
		},
		"Hang_faces": [labWallRebolosPedraHangFaces],
		"Hang_rotation": [labWallRebolosPedraHangRotation],
	}
}));





// —————————————————————————————————————————————————————————————————————————————
// Lab wall: Grosas
// —————————————————————————————————————————————————————————————————————————————
const labWallGrosasOuterShellPrefix = "Grosas";
const labWallGrosasActive = false;
const labWallGrosasSize = [50, 50]; // [10, 10]; // 
const labWallGrosasModules = [3, 3]; // [1, 1]; // 
const labWallGrosasHangDiameter = 6.8; // measurement was 6.3 - 6.45, tested on sample
const labWallGrosasMinFloorHeight = 1;
const labWallGrosasHangFaces = 36;
const labWallGrosasHangRotation =  0;
const labWallGrosasHeights = [
	[25, 23]
];

const labWallGrosas = labWallGrosasHeights.map(size => ({
	"active": labWallGrosasActive,
	"props": {
		"Outer_shell_prefix": labWallGrosasOuterShellPrefix,
		"Outer_shell_width": [ labWallGrosasSize[0] ],
		"Outer_shell_length": [ labWallGrosasSize[1] ],
		"Outer_shell_height": [ [size[0]] ],
		"Min_floor_height": [labWallGrosasMinFloorHeight],
		"Modules": labWallGrosasModules,
		"Hang_depth_height": [0 - size[1]],
		"Hang_diameter": {
			"start": labWallGrosasHangDiameter,
			"step": 1, 
			"end": labWallGrosasHangDiameter,
		},
		"Hang_faces": [labWallGrosasHangFaces],
		"Hang_rotation": [labWallGrosasHangRotation],
	}
}));





// —————————————————————————————————————————————————————————————————————————————
// Lab wall: Hole drill
// —————————————————————————————————————————————————————————————————————————————
const labWallHoleStepDrillOuterShellPrefix = "HoleStepDrill";
const labWallHoleStepDrillActive = false;
const labWallHoleStepDrillSize = [20, 20]; // [50, 50]; // 
const labWallHoleStepDrillModules = [1, 1]; // [3, 3]; // 
const labWallHoleStepDrillHangDiameter = 10 + 0.25; // measurement was 9.96, tested on sample. Samples above shows 0.2 - 0.4 as offset
const labWallHoleStepDrillMinFloorHeight = 1;
const labWallHoleStepDrillHangFaces = 36;
const labWallHoleStepDrillHangRotation =  0;
const labWallHoleStepDrillHeights = [
	[20, 18]
];

const labWallHoleStepDrill = labWallHoleStepDrillHeights.map(size => ({
	"active": labWallHoleStepDrillActive,
	"props": {
		"Outer_shell_prefix": labWallHoleStepDrillOuterShellPrefix,
		"Outer_shell_width": [ labWallHoleStepDrillSize[0] ],
		"Outer_shell_length": [ labWallHoleStepDrillSize[1] ],
		"Outer_shell_height": [ [size[0]] ],
		"Min_floor_height": [labWallHoleStepDrillMinFloorHeight],
		"Modules": labWallHoleStepDrillModules,
		"Hang_depth_height": [0 - size[1]],
		"Hang_diameter": {
			"start": labWallHoleStepDrillHangDiameter,
			"step": 1, 
			"end": labWallHoleStepDrillHangDiameter,
		},
		"Hang_faces": [labWallHoleStepDrillHangFaces],
		"Hang_rotation": [labWallHoleStepDrillHangRotation],
	}
}));




// —————————————————————————————————————————————————————————————————————————————
// Lab wall: precision micro drills
// —————————————————————————————————————————————————————————————————————————————
const labWallPrecisionMicroDrillsOuterShellPrefix = "PrecisionMicroDrills";
const labWallPrecisionMicroDrillsActive = false;
const labWallPrecisionMicroDrillsSize = [50, 50]; // [20, 20]; // 
const labWallPrecisionMicroDrillsModules = [5, 5]; // [1, 1]; // 
// Actual measurement = 3.15 (old 9.96)
// Samples above shows 0.2 - 0.4 as offset.
// Sample = 3.7
const labWallPrecisionMicroDrillsHangDiameter = 3.7;
const labWallPrecisionMicroDrillsMinFloorHeight = 1;
const labWallPrecisionMicroDrillsHangFaces = 36;
const labWallPrecisionMicroDrillsHangRotation =  0;
const labWallPrecisionMicroDrillsHeights = [
	[15, 14]
];

const labWallPrecisionMicroDrills = labWallPrecisionMicroDrillsHeights.map(size => ({
	"active": labWallPrecisionMicroDrillsActive,
	"props": {
		"Outer_shell_prefix": labWallPrecisionMicroDrillsOuterShellPrefix,
		"Outer_shell_width": [ labWallPrecisionMicroDrillsSize[0] ],
		"Outer_shell_length": [ labWallPrecisionMicroDrillsSize[1] ],
		"Outer_shell_height": [ [size[0]] ],
		"Min_floor_height": [labWallPrecisionMicroDrillsMinFloorHeight],
		"Modules": labWallPrecisionMicroDrillsModules,
		"Hang_depth_height": [0 - size[1]],
		"Hang_diameter": {
			"start": labWallPrecisionMicroDrillsHangDiameter,
			"step": 1, 
			"end": labWallPrecisionMicroDrillsHangDiameter,
		},
		"Hang_faces": [labWallPrecisionMicroDrillsHangFaces],
		"Hang_rotation": [labWallPrecisionMicroDrillsHangRotation],
	}
}));




// =============================================================================
module.exports = [
	...thingiverse,
	...sizeSamples1x1Small,
	...sizeSamples1x1Large,
	...sampleCases,
	...microSDcardOrganizer,
	...sdcAdapterOrganizer,
	...usbDevicesOrganizer,
	...solderingSpoolHolder,
	...labWallHolders,
	...labWallHexBits,
	...labWallFresas,
	...labWallRebolosPedra,
	...labWallGrosas,
	...labWallHoleStepDrill,
	...labWallPrecisionMicroDrills,
];
