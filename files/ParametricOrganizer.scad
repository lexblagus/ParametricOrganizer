/*
————————————————————————————————————————————————————————————————————————————————
CONFIG
————————————————————————————————————————————————————————————————————————————————
*/
$fn=360 / 10;

// Outter shell
width = 30;
length = 20;
height = 10;
floorHeight = 1;

// Modules encapsulate a hoc
// [equal-size] or [rows, cols]
moduleQtt = [ 3 , 2 ];

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
	0 // 360 / 8 / 2
];

// Optional, to make custom hocs per cell
// Will be merged with default hoc above.
moduleConfig = [];






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
						color(green, trnsp) polygon(dv); // triangle
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


module distribution(){
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

	for (l = [0 : ( moduleQtt[0] - 1 )]){
		for (m = [0 : ( moduleQtt[1] - 1 )]){
			translate([
				(  width / moduleQtt[0] ) * l,
				( length / moduleQtt[1] ) * m,
				floorHeight
			]){
				moduleHeightIncrease = hocConf[l][m][3];
				// ...

				modSize = [
					width / moduleQtt[0],
					length / moduleQtt[1],
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

				hocPosition = [
					(  ( width / moduleQtt[0] ) / 2  )  -  ( hocParams[0] / 2 )
				,
					(  ( length / moduleQtt[1] ) / 2  )  -  ( hocParams[1] / 2 )
				,
					(
						hocConf[l][m][2] > 0
					) ? (
						modSize[2]
					) : (
						(bodyHeight + moduleHeightIncrease ) - abs(hocConf[l][m][2])
					)
				];

				if ( hocConf[l][m][2] > 0 ){
					union(){
						moduleBody(
							modSize[0],
							modSize[1],
							modSize[2]
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
							modSize[0],
							modSize[1],
							modSize[2]
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
