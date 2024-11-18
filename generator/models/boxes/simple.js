const active = false;
const path = 'boxes/simple';

const models = [
	{
		active,
		path,
		name: 'Microwave lamp mold',
		wall: 2,
		width: 120,
		length: 20,
		height: 20,
		divisions: [1, 1],
	},
	{
		active,
		path,
		name: 'Bin 0 3x1 individual',
		wall: 1.5,
		width: 85,
		length: 50,
		height: 25,
		divisions: [3, 1],
	},
	{
		active,
		path,
		name: 'Bin 0 4x1 individual',
		wall: 1.5,
		width: 85 / 4,
		length: 50,
		height: 25,
		divisions: [1, 1],
	},
	{
		active,
		path,
		name: 'Simple box',
		wall: 2,
		width: 75 + (4) /* (wall * 2) */,
		length: 120,
		height: 50,
		divisions: [1, 1],
	},
	{
		active,
		path,
		name: `Lojinha`,
		wall: 2,
		width: 150, // printing: // + (wall * 2),
		length: 350 / 2,
		height: 75, // 50,
		divisions: [1, 1],
	},
	{
		active,
		path,
		name: `Incense`,
		wall: 2,
		width: 84,
		length: 84,
		height: 200,
		divisions: [1, 1],
	},
];

module.exports = models.map(model => ({
	active: model.active,
	path: model.path,
	name: model.name,
	params: {
		width: model.width,
		length: model.length,
		height: model.height,
		floorHeight: model.wall,
		moduleQtt: model.divisions,
		hoc: [
			(model.width / model.divisions[0]) - model.wall,
			(model.length / model.divisions[1]) - model.wall,
			0 - (model.height - (model.wall)),
			0, // increase
			4, // faces
			0, // rotation
		],
	},
}));
