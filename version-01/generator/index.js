const { execSync } = require('child_process');
const templateModels = require('./models');


const execOpenSCAD = '/Applications/OpenSCAD.app/Contents/MacOS/OpenSCAD';
const inputFilename = '../files/ParametricOrganizer.scad';
const dirOutput = `./exports`;
const dryRun = false;


const stripedNumber = n => n.toString().replace(/(\d+)(\.)(\d{2})(\d*)/, '$1$2$3');


try{
	!dryRun && execSync(`rm -rf ${dirOutput}`);
	!dryRun && execSync(`mkdir ${dirOutput}`);
} catch (e){}


console.log('='.repeat(80));
console.log("Begin iterate variations", dryRun ? ' in dryrun mode' : '' );
// console.log(JSON.stringify(templateModels, null, '\t'));




templateModels.map(templateModel => {
	if( templateModel.active === true ){
		templateModel.props['Outer_shell_width'].map((Outer_shell_width, Outer_shell_width_index) => {
			templateModel.props['Min_floor_height'].map(Min_floor_height => {
				templateModel.props["Hang_depth_height"].map(Hang_depth_height => {

					for(Hang_diameter = templateModel.props["Hang_diameter"]["start"];
						Hang_diameter <=  templateModel.props["Hang_diameter"]["end"];
						Hang_diameter += templateModel.props["Hang_diameter"]["step"]
					){
						templateModel.props["Hang_faces"].map((Hang_faces, Hang_faces_index) => {
							console.log('-'.repeat(80));
							console.log(`templateModel.props = ${JSON.stringify( templateModel.props )}`);
							
							const outputFilename = 
								`${dirOutput}/` + 
								`${templateModel.props['Outer_shell_prefix']}` + 
								` dimensions-` + 
								`${stripedNumber(Outer_shell_width)}w` + 
								`${stripedNumber(templateModel.props['Outer_shell_length'][Outer_shell_width_index])}l` + 
								`${stripedNumber(templateModel.props['Outer_shell_height'][Outer_shell_width_index])}h` + 
								`${stripedNumber(Min_floor_height)}f` + 
								` ${Hang_depth_height > 0 ? 'positive' : 'negative'}` + 
								` ${templateModel.props['Modules'].toString().replace(',', 'x')}-modules` + 
								` ${stripedNumber(Hang_diameter)}mm-hang-diam` + 
								` ${Hang_faces}-faces` + 
								`.stl`;
							console.log(`outputFilename = ${JSON.stringify(outputFilename)}`);

							let execThis = '';
							execThis += `"${execOpenSCAD}" `;
							execThis += `-o "${outputFilename}" `;

							execThis += `-D Outer_shell_width="${Outer_shell_width}" `;
							execThis += `-D Outer_shell_length="${templateModel.props['Outer_shell_length'][Outer_shell_width_index]}" `;
							execThis += `-D Outer_shell_height="${templateModel.props['Outer_shell_height'][Outer_shell_width_index]}" `;
							execThis += `-D Min_floor_height="${Min_floor_height}" `;
							execThis += `-D Modules="${JSON.stringify(templateModel.props['Modules'])}" `;
							execThis += `-D Hang_depth_height="${Hang_depth_height}" `;
							execThis += `-D Hang_diameter="${stripedNumber(Hang_diameter)}" `;
							execThis += `-D Hang_faces="${Hang_faces}" `;
							execThis += `-D Hang_rotation="${templateModel.props['Hang_rotation'][Hang_faces_index]}" `;
							// Object.keys(templateModel['props']).map( prop => {
							// 	execThis += `-D ${prop}="${templateModel['props'][prop]}" `;
							// });
							execThis += `"${inputFilename}" `;
							
							console.log(`execThis = ${execThis}`);
							!dryRun && execSync(execThis);
						});
					}
				});
			});
		});
	}
});


console.log('='.repeat(80));
console.log('Done.');
