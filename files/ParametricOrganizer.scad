/*
————————————————————————————————————————————————————————————————————————————————
CONFIG
————————————————————————————————————————————————————————————————————————————————
*/
$fn=360 / 10;

Outer_shell_width = 40;
Outer_shell_length = 40;
Outer_shell_height = 8;

Min_floor_height = 2.5;

Modules = [3, 3]; // cols, rows

Hang_depth_height = -4; // negative = hole depth, positive = pin height. 
Hang_diameter = 6;
Hang_faces = 6;
Hang_rotation = 360 / 8 / 2;

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




/*
————————————————————————————————————————————————————————————————————————————————
BOOTSTRAP
————————————————————————————————————————————————————————————————————————————————
*/
start();
