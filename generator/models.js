

/*
————————————————————————————————————————————————————————————————————————————————
Thingverse examples
————————————————————————————————————————————————————————————————————————————————
*/
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


/*
————————————————————————————————————————————————————————————————————————————————
Samples 1x1 triangle, square and round
————————————————————————————————————————————————————————————————————————————————
*/
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


/*
————————————————————————————————————————————————————————————————————————————————
Sample cases (for storage of samples above)
————————————————————————————————————————————————————————————————————————————————
*/
const sampleCasesActive = true;
const sampleCasesGap = 0.25;
const sampleCasesModels = [
	{
		innerSize: 5.25,
		innerHeight: 10,
		gap: sampleCasesGap,
		floor: 2.5,
		walls: 1,
		modules: [5 , 10],
	},
	{
		innerSize: 10,
		innerHeight: 10,
		gap: sampleCasesGap,
		floor: 2.5,
		walls: 1,
		modules: [5 , 10],
	},
	{
		innerSize: 15,
		innerHeight: 15,
		gap: sampleCasesGap,
		floor: 2.5,
		walls: 1,
		modules: [2 , 3],
	},
	{
		innerSize: 20,
		innerHeight: 20,
		gap: sampleCasesGap,
		floor: 2.5,
		walls: 1,
		modules: [2 , 3],
	},
];

const sampleCases = sampleCasesModels.map(modelSettings => ({
	"active": sampleCasesActive,
	"props": {
		"Outer_shell_prefix": `Samples case`,
		"Outer_shell_width": [
			( modelSettings.innerSize + modelSettings.gap + ( modelSettings.walls * 2) ) * modelSettings.modules[1]
		],
		"Outer_shell_length": [
			( modelSettings.innerSize + modelSettings.gap + ( modelSettings.walls * 2) ) * modelSettings.modules[0]
		],
		"Outer_shell_height": [
			( modelSettings.innerHeight / 2 ) + modelSettings.floor
		],
		"Min_floor_height": [
			modelSettings.floor
		],
		"Modules": modelSettings.modules,
		"Hang_depth_height": [
			0 - ( modelSettings.innerHeight / 2 )
		],
		"Hang_diameter": {
			"start": modelSettings.innerSize + modelSettings.gap, 
			"step": 1, 
			"end": modelSettings.innerSize + modelSettings.gap
		},
		"Hang_faces": [  4  ],
		"Hang_rotation": [  0  ],
	}
}));


module.exports = [
	...thingiverse,
	...sizeSamples1x1Small,
	...sizeSamples1x1Large,
	...sampleCases,
];
