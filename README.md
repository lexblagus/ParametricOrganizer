

# Parametric Organizer

https://www.thingiverse.com/thing:____

https://github.com/lexblagus/____

## Summary

Parametric holder organizer for any collection you can name: tools (bits, tips, discs), makeup (lipstick, eyeshadows), paiting (brushes, tints) etc.


## Parameters

- `Outer_shell_width`: main object width
- `Outer_shell_length`: main object length 
- `Outer_shell_height`: main object height
- `Min_floor_height`: minimum floor height (for negative objects)
- `Modules`: quantity of elements per columns then per rows
- `Hang_depth_height`: hanger (hole or pin) height. negative = hole depth, positive = pin height. 
- `Hang_diameter`: hanger diameter. Diagonal length for 4 faces objects
- `Hang_faces`: 3 to render triangles, 4 to render squares, or use more than 36 for rouded 
- `Hang_rotation`: rotate the hanger, usefull for 3 to 8 faces


## Generator

At the folder `batch-generator` you can find the script to generate several files at once (Mac users only by now):

- Edit `const templates` at `batch-generator/generate-all-parameter-combinations.js` as you wish
- Run `cd batch-generator` then `./run-all-parameter-combinations.sh` to generate files. This may take a long time depending on how much combinations you created.

## Examples

I did not print ayone yet (hello world!)

![Examples 1 and 2](./images/OpenSCAD 3x3 negative 6-faces.png)
![Examples 1 and 2](./images/OpenSCAD 3x3 positive 6-faces.png)
![Examples 1 and 2](./images/OpenSCAD 3x6 negative 8-faces.png)
![Examples 1 and 2](./images/OpenSCAD 5x10 negative 90-faces.png)

![Examples 1 and 2](./images/Cura samples 1-2.png)
![Examples 3 and 4](./images/Cura samples 3-4.png)
![Examples 5](./images/Cura samples 5.png)



