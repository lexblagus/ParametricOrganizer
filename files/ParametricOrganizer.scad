/*
————————————————————————————————————————————————————————————————————————————————
CONFIG
————————————————————————————————————————————————————————————————————————————————
*/
$fn=360 / 10;

// Outter shell
width = 20;
length = 30;
height = 10;
floorHeight = 1;

// Modules encapsulate a hoc
// [equal-size] or [rows, cols]
moduleQtt = [ 2 , 3 ];

// "Hoc" stands for "hole or chanfer"
// This is the default configuration.
hoc = [
	// Width
	10 - 1,
	
	// Length
	10 - 1,

	// Height: positive value
	// Depth: negative value
	-9,

	// Module height increase
	0,

	// Faces
	// 3 = Triangle,
	// 4 = Square/rectangle,
	// 5 = Pentagon
	// 6 = Hexagon
	// 7 = ...
	// > ~18 = circle
	4,

	// Rotation
	// 0 auto-calculates based on faces
	0
];

// Optional, to make custom hocs per cell
// Will be merged with default hoc above.
moduleConfig = [
	/*
	[
		[
			10 - 1, // increased shape diameter
			10 - 1, // increased shape diameter
			1, // it grows up from the top
			-2, // module is lowered
			5, // pentagon
			45 // rotated
		]
	,
		[
			10 - 1,
			10 - 1,
			-6, // negative make it a hole
			2, // module grows out
			3, // triangle
			0
		]
	]
	*/
];

distributed = false; // equalize distribution (center offset adjustment per module) or center hoc on each module




/*
————————————————————————————————————————————————————————————————————————————————
Functions & modules
————————————————————————————————————————————————————————————————————————————————
*/
// transparency
trnsp = 1; // 0.75;

// Sum itens in array
function add(v, i = 0, r = 0) = i < len(v) ? add(v, i + 1, r + v[i]) : r;


module elemHoc(x, y, z, a, b) {
	if ( a == 4 ) {
		translate([
			x / 2,
			y / 2,
			0,
		]){
			rotate([
				0,
				0,
				0 - b
			]){
				translate([
					0 - ( x / 2),
					0 - ( y / 2),
					0,
				]){
					color("yellow", trnsp)  cube([ // square hoc
						x,
						y,
						z
					]);
				}
			}
		}
	} else if ( a == 3 ) {
		translate([
			x / 2,
			y / 2,
			0,
		]){
			rotate([
				0,
				0,
				0 - b
			]){
				translate([
					0 - ( x / 2),
					0 - ( y / 2),
					0,
				]){
					linear_extrude(
						height = z
					) {
						dv = [
							[0, 0],
							[x, 0],
							[x / 2, y]
						];
						color("green", trnsp) polygon(dv); // triangle
					}
				}
			}
		}
	} else if ( a >= 5 ) {
		translate([
			x / 2,
			y / 2,
			0
		]){
			resize(newsize=[x, y, z]){
				rotate([
					0,
					0,
					(( 360 / a ) / 2) + b
				]){
					color("green", trnsp) cylinder( // polygon/cylindrical hocs
						h = z,
						d1 = 1,
						d2 = 1,
						center = false,
						$fn = a
					);
				}
			}
		}
	} else {
		echo("<!> Error rendering faces. Increase hoc faces bigger than 2");
	}
}


module moduleBody(x, y, z) {
	color("orange", trnsp)  cube([ // upper body
		x,
		y,
		z
	]);
}


module start(){
	echo("Script start");
	
	union(){
	}
	color("red", trnsp)  cube([ // floor
		width,
		length,
		floorHeight
	]);

	bodyHeight = height - floorHeight;
	hocsWidth = 0;
	hocsLength = 0;

	hocConf = [
		for (i = [0 : moduleQtt[0] - 1]) [
			for (j = [0 : moduleQtt[1] - 1]) [
				for (k = [0 : len(hoc) - 1])
					moduleConfig[i][j][k] == undef ? hoc[k] : moduleConfig[i][j][k]
			]
		]
	];

	moduleWidth = width / moduleQtt[0];
	moduleLength = length / moduleQtt[1];

	for (l = [0 : ( moduleQtt[0] - 1 )]){
		for (m = [0 : ( moduleQtt[1] - 1 )]){
			translate([
				(  moduleWidth ) * l,
				( moduleLength ) * m,
				floorHeight
			]){
				moduleHeightIncrease = hocConf[l][m][3];

				moduleSize = [
					moduleWidth,
					moduleLength,
					bodyHeight + moduleHeightIncrease
				];
				
				hocParams = [
					hocConf[l][m][0], // width
					hocConf[l][m][1], // length
					abs( // height
						hocConf[l][m][2]
					),
					hocConf[l][m][4], // faces
					hocConf[l][m][5] // rotation
				];

				centeredPosition = [
					(  ( moduleSize[0] ) / 2  )  -  ( hocParams[0] / 2 )
				,
					(  ( moduleSize[1] ) / 2  )  -  ( hocParams[1] / 2 )
				];
				wallSize = [
					( ( (width  / moduleQtt[0]) - hocParams[0] ) / 2 )
				,
					( ( (length  / moduleQtt[1]) - hocParams[1] ) / 2 )
				];
				ratio = [
					moduleQtt[0] == 1 ? 0 : (  1 - l * (2 / (moduleQtt[0] % 2 == 0 ? moduleQtt[0] : moduleQtt[0] - 1))  ) / 2
				,
					moduleQtt[1] == 1 ? 0 : (  1 - m * (2 / (moduleQtt[1] % 2 == 0 ? moduleQtt[1] : moduleQtt[1] - 1))  ) / 2
				];
				centeringAdjustment = [
					distributed ? wallSize[0] * ratio[0] : 0
				,
					distributed ? wallSize[1] * ratio[1] : 0
				];

				hocPosition = [
					centeredPosition[0] + centeringAdjustment[0]
				,
					centeredPosition[1] + centeringAdjustment[1]
				,
					(
						hocConf[l][m][2] > 0
					) ? (
						moduleSize[2]
					) : (
						(bodyHeight + moduleHeightIncrease ) - abs(hocConf[l][m][2])
					)
				];

				if ( hocConf[l][m][2] > 0 ){
					union(){
						moduleBody(
							moduleSize[0],
							moduleSize[1],
							moduleSize[2]
						);
						translate([
							hocPosition[0],
							hocPosition[1],
							hocPosition[2]
						]){
							elemHoc(
								hocParams[0],
								hocParams[1],
								hocParams[2],
								hocParams[3],
								hocParams[4]
							);
						}
					};
				} else {
					difference(){
						moduleBody(
							moduleSize[0],
							moduleSize[1],
							moduleSize[2]
						);
						translate([
							hocPosition[0],
							hocPosition[1],
							hocPosition[2]
						]){
							elemHoc(
								hocParams[0],
								hocParams[1],
								hocParams[2],
								hocParams[3],
								hocParams[4]
							);
						}
					};
				}
			}
		}
	}
	echo("Script end");
}




/*
————————————————————————————————————————————————————————————————————————————————
BOOTSTRAP
————————————————————————————————————————————————————————————————————————————————
*/
start();
