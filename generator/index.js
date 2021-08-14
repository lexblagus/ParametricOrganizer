const fs = require("fs");
const { execSync } = require('child_process');
const templateModels = require('./models');


const execOpenSCAD = '/Applications/OpenSCAD.app/Contents/MacOS/OpenSCAD';
const inputFilename = '../files/ParametricOrganizer.scad';
const outputJson = '../files/ParametricOrganizer.json';
const dirOutput = `./exports`;
const dryRun = false;
let json = {
	parameterSets: {},
	fileFormatVersion: 1
}


const stripedNumber = n => n.toString().replace(/(\d+)(\.)(\d{2})(\d*)/, '$1$2$3');


try{
	// !dryRun && execSync(`rm -rf ${dirOutput}`);
	// !dryRun && execSync(`mkdir ${dirOutput}`);
} catch (e){}


console.log('='.repeat(80));
console.log("Begin iterate variations", dryRun ? ' in dryrun mode' : '' );
// console.log(JSON.stringify(templateModels, null, '\t'));




templateModels.map(templateModel => {
	if ( templateModel && templateModel.active === true ) {
		console.log('-'.repeat(80));
		json.parameterSets[templateModel.name] = templateModel.params;

		const outputFilename = 
			`${dirOutput}/` + 
			`${templateModel.name}` + 
			`.stl`;
		console.log(`outputFilename = ${JSON.stringify(outputFilename)}`);

		let execThis = '';
		execThis += `"${execOpenSCAD}" `;
		execThis += `-o "${outputFilename}" `;
		Object.keys(templateModel.params).map( prop => {
			execThis += `-D ${prop}="${JSON.stringify(templateModel.params[prop])}" `;
		});
		execThis += `"${inputFilename}" `;
		
		console.log(`execThis = ${execThis}`);
		!dryRun && execSync(execThis);
	}
});


console.log('='.repeat(80));
console.log(`json = ${JSON.stringify( json , null , '\t' )}`);
fs.writeFile(
	outputJson,
	JSON.stringify(json, null, ' '.repeat(4)),
	err => {
		if (err) {
			console.log('Error writing file', err);
		} else {
			console.log('Successfully wrote file');
		}
	}
);


console.log('='.repeat(80));
console.log('Done.');
