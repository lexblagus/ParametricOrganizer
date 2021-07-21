const { execSync } = require('child_process');


const execOpenSCAD = '/Applications/OpenSCAD.app/Contents/MacOS/OpenSCAD';
const inputFilename = '../ParametricOrganizer.scad';
const dirOutput = `./exports`;
const dryRun = false;

defaultModules = [1 , 1];
defaultHangFaces = [3, 4, 36]; // [6]; //
defaultHangRotation =  [30, 45, 0]; // [0]; //
defaultRendTransp = 0.9;

const templates = [
	/*
	{
		"Outer_shell_prefix": "Size sample 10mm",
		"Outer_shell_width": [10],
		"Outer_shell_length": [10],
		"Outer_shell_height": [10],
		"Min_floor_height": [1],
		"Modules": defaultModules,
		"Hang_depth_height": [-10, 10],
		"Hang_diameter": {
			"start": 0.1, 
			"step": 0.1, 
			"end": 10
		},
		"Hang_faces": defaultHangFaces,
		"Hang_rotation": defaultHangRotation,
	},
	{
		"Outer_shell_prefix": "Size sample 15mm",
		"Outer_shell_width": [15],
		"Outer_shell_length": [15],
		"Outer_shell_height": [15],
		"Min_floor_height": [1],
		"Modules": defaultModules,
		"Hang_depth_height": [-15, 15],
		"Hang_diameter": {
			"start": 10, 
			"step": 0.25, 
			"end": 15
		},
		"Hang_faces": defaultHangFaces,
		"Hang_rotation": defaultHangRotation,
	},
	{
		"Outer_shell_prefix": "Size sample 20mm",
		"Outer_shell_width": [20],
		"Outer_shell_length": [20],
		"Outer_shell_height": [20],
		"Min_floor_height": [1],
		"Modules": defaultModules,
		"Hang_depth_height": [-20, 20],
		"Hang_diameter": {
			"start": 15, 
			"step": 0.5, 
			"end": 20
		},
		"Hang_faces": defaultHangFaces,
		"Hang_rotation": defaultHangRotation,
	},
	{
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
	},
	{
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
	},
	{
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
	},
	*/
	{
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
];


try{
	!dryRun && execSync(`rm -rf ${dirOutput}`);
	!dryRun && execSync(`mkdir ${dirOutput}`);
} catch (e){}


console.log('='.repeat(80));
console.log("Begin iterate variations", dryRun ? ' in dryrun mode' : '' );

templates.map(template => {
	template['Outer_shell_width'].map((Outer_shell_width, Outer_shell_width_index) => {
		// template['Outer_shell_length'].map(Outer_shell_length => {
			// template['Outer_shell_height'].map(Outer_shell_height => {
				template['Min_floor_height'].map(Min_floor_height => {
					template["Hang_depth_height"].map(Hang_depth_height => {
						// console.log("Loop 1: Hang_depth_height", Hang_depth_height);

						for(Hang_diameter = template["Hang_diameter"]["start"];
							Hang_diameter <=  template["Hang_diameter"]["end"];
							Hang_diameter += template["Hang_diameter"]["step"]
						){
							const Hang_diameter_precise = Hang_diameter.toPrecision(2);
							// console.log("Loop 2: Hang_diameter", Hang_diameter_precise);
						
							template["Hang_faces"].map((Hang_faces, Hang_faces_index) => {
								console.log('-'.repeat(80));

								// console.log("Loop 3: Hang_faces", Hang_faces, template["Hang_rotation"][Hang_faces_index]);
								
								const outputFilename = 
									`${dirOutput}/` + 
									`${template['Outer_shell_prefix']}` + 
									` dimensions-` + 
									`${Outer_shell_width}w` + 
									`${template['Outer_shell_length'][Outer_shell_width_index]}l` + 
									`${template['Outer_shell_height'][Outer_shell_width_index]}h` + 
									`${Min_floor_height}f` + 
									` ${Hang_depth_height > 0 ? 'positive' : 'negative'}` + 
									` ${template['Modules'].toString().replace(',', 'x')}-modules` + 
									` ${Hang_diameter_precise}mm-hang-diam` + 
									` ${Hang_faces}-faces` + 
									`.stl`;
								console.log(`outputFilename = ${JSON.stringify(outputFilename)}`);

								let execThis = '';
								execThis += `${execOpenSCAD} `;
								execThis += `-o "${outputFilename}" `;
								execThis += `-D Outer_shell_width="${Outer_shell_width}" `;
								execThis += `-D Outer_shell_length="${template['Outer_shell_length'][Outer_shell_width_index]}" `;
								execThis += `-D Outer_shell_height="${template['Outer_shell_height'][Outer_shell_width_index]}" `;
								execThis += `-D Min_floor_height="${Min_floor_height}" `;
								execThis += `-D Modules="${JSON.stringify(template['Modules'])}" `;
								execThis += `-D Hang_depth_height="${Hang_depth_height}" `;
								execThis += `-D Hang_diameter="${Hang_diameter_precise}" `;
								execThis += `-D Hang_faces="${Hang_faces}" `;
								execThis += `-D Hang_rotation="${template['Hang_rotation'][Hang_faces_index]}" `;

								execThis += `"${inputFilename}" `;
								
								console.log(`execThis = ${execThis}`);
								!dryRun && execSync(execThis);
							});
						}
					});
				});
			// });
		// });
	});
});

console.log('='.repeat(80));
console.log('Done.');
