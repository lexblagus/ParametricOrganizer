const fs = require("fs");
const { execSync } = require('child_process');
const templateModels = require('./models');


const execOpenSCAD = '/Applications/OpenSCAD.app/Contents/MacOS/OpenSCAD';
const inputFilename = '../files/ParametricOrganizer.scad';
const outputJson = 'ParametricOrganizer.json'; // or '../files/ParametricOrganizer.json'
const dirOutput = `../../exports`;
const dryRun = false; // dafeult: false
const activeOnly = true; // default: true
const clearDir = true; // default: true
let json = {
	parameterSets: {},
	fileFormatVersion: 1
}


if( !dryRun && clearDir ){
	// try to create
	const mkdir = `mkdir "${dirOutput}"`;
	console.log(`$ ${mkdir}`);
	try{ execSync(mkdir); } catch (e){}
	// erase exiting contents
	const rm = `rm -rf ${dirOutput}/*`
	console.log(`$ ${rm}`);
	try{ execSync(rm); } catch (e){}
}


console.log('='.repeat(80));
console.log("Begin iterate variations", dryRun ? 'in dryrun mode' : '' );
// console.log(JSON.stringify(templateModels, null, '\t'));


templateModels.map(templateModel => {
	if ( templateModel && (templateModel.active === true || activeOnly !== true) ) {
		console.log('-'.repeat(80));
		json.parameterSets[templateModel.name] = templateModel.params;

		const outputFilename = 
			`${dirOutput}/` + 
			`${templateModel.path ? templateModel.path + '/' : ''}` + 
			`${templateModel.name}` + 
			`.stl`;
		console.log(`outputFilename = ${JSON.stringify(outputFilename)}`);

		if( !dryRun && templateModel.path ){
			try{ execSync(`mkdir -p "${dirOutput}/${templateModel.path}"`); } catch (e){}
		}

		let execThis = '';
		execThis += `"${execOpenSCAD}" `;
		execThis += `-o "${outputFilename}" `;
		Object.keys(templateModel.params).map( prop => {
			console.log(`    ${prop}="${JSON.stringify(templateModel.params[prop])}"`);
			execThis += `-D ${prop}="${JSON.stringify(templateModel.params[prop])}" `;
		});
		execThis += `"${inputFilename}" `;
		
		console.log(`$ ${execThis}`);
		if( !dryRun ){
			execSync(execThis);
		}
	}
});


if( !dryRun ){
	console.log('='.repeat(80));
	fs.writeFile(
		`${dirOutput}/${outputJson}`,
		JSON.stringify(json, null, ' '.repeat(4)),
		err => {
			if (err) {
				console.log(`Error writing ${outputJson}`, err);
			} else {
				console.log(`Successfully wrote ${outputJson}`);
			}
		}
	);
}


console.log('='.repeat(80));
console.log('Done.');
