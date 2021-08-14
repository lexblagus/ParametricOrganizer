/*
————————————————————————————————————————————————————————————————————————————————
CONFIG
————————————————————————————————————————————————————————————————————————————————
*/
$fn=360 / 10;

msdcDimensions = 11.5;
msdcFloor = 1;
msdcWall = 1;
msdcHeight = ( msdcDimensions / 3 ) * 2;

Outer_shell_width = msdcDimensions + (msdcWall * 2);
Outer_shell_length = msdcDimensions + (msdcWall * 2);
Outer_shell_height = msdcHeight + msdcFloor;

Min_floor_height = msdcFloor;

Modules = [1, 1]; // cols, rows

Hang_depth_height = 0 - msdcHeight; // negative = hole depth, positive = pin height. 
Hang_diameter = msdcDimensions;
Hang_faces = 4;
Hang_rotation = 0; // 360 / 4 / 2;

Rendering_transp = 0.9;




/*
————————————————————————————————————————————————————————————————————————————————
MODULES
————————————————————————————————————————————————————————————————————————————————
*/
module start(){
	echo("Script start");
	
	color("red", Rendering_transp)  cube([ // floor
		Outer_shell_width,
		Outer_shell_length,
		Min_floor_height
	]);

	unit_dimensions = [
		Outer_shell_width / Modules[1],
		Outer_shell_length / Modules[0],
		Outer_shell_height - Min_floor_height
	];


	translate([0, 0, Min_floor_height]){ // move up for bottom safe area
		for (
			unit_row_index = [1 : Modules[0]]
		){
			for (
				unit_column_index = [1 : Modules[1]]
			){
				translate([
					(unit_column_index - 1) * unit_dimensions[0],
					(unit_row_index - 1) * unit_dimensions[1],
					0
				]){
					unit(unit_dimensions);
				}
			}
		}
	}

	echo("Script end");
}


module unit(unit_dimensions) {
	if( Hang_depth_height > 0 ){
		union(){
			unit_shell(unit_dimensions);
			hanger(Hang_depth_height, Hang_diameter, unit_dimensions);
		};
	}else{
		difference(){
			unit_shell(unit_dimensions);
			hanger(Hang_depth_height, Hang_diameter, unit_dimensions);
		};
	}
}


module unit_shell(unit_dimensions) {
	color("orange", Rendering_transp) cube(unit_dimensions); // module unit
}


module hanger(Hang_depth_height, diameter, unit_dimensions) {
	translate([
		unit_dimensions[0] / 2,
		unit_dimensions[1] / 2,
		unit_dimensions[2] + (
			Hang_depth_height > 0 ? 0 : Hang_depth_height
		)
	]){
		rotate([
			0 , 0 , Hang_rotation
		]){
			if( Hang_faces == 4 ) {
				translate([
					( diameter / 2 ) * -1,
					( diameter / 2 ) * -1,
					0
				]){
					color("blue", Rendering_transp) cube( // hangers
						size = [
							diameter,
							diameter,
							abs(Hang_depth_height)
						],
						center = false
					);
				};
			} else {
				color("yellow", Rendering_transp) cylinder( // hangers
					h = abs(Hang_depth_height), 
					r1 = diameter / 2, 
					r2 = diameter / 2, 
					center = false,
					$fn = Hang_faces
				);
			}
		}
	}
}




/*
————————————————————————————————————————————————————————————————————————————————
BOOTSTRAP
————————————————————————————————————————————————————————————————————————————————
*/
start();
