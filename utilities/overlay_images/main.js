#!/usr/bin/env node

// Copyright 2019 Alexander L. Hayes

/**
 * Summary:
 *   trianglify_png.js is heavily based on one of the examples from the
 *   trianglify repository (examples/save-as-png.js):
 *   https://github.com/qrohlf/trianglify
 *
 * Colors:
 *   Options can be found in the 'colorbrewer.js'
 *   https://github.com/qrohlf/trianglify/blob/master/lib/colorbrewer.js
 *
 * Examples:
 *   > $ node save-as-png.js output.png
 *
 * Installation:
 *   Installing this requires 'cairo' as a dependency.
 *   > $ sudo apt-get install cairo
*/

var program = require('commander');
var fs = require('fs');
var Trianglify = require('trianglify');

program
  .version('0.1.0')
  .option('--width  [pixels]', 'Set the number of pixels for the width', '1400')
  .option('--height [pixels]', 'Set the number of pixels for the height', '900')
  .option('-e, --cell [pixels]', 'Cell size', '80')
  .option('-v, --variance [probability]', 'Variance between 0 and 1', '0.7')
  .option('-c, --colors [code]', 'Set the color code', 'Spectral')
  .option('-o, --output [filename]', 'Specify name of the output file', 'splash.png')
  .parse(process.argv);

// Explicate parameter types.
const HEIGHT = parseInt(program.height);
const WIDTH = parseInt(program.width);
const CELL = parseFloat(program.cell);
const VARIANCE = parseFloat(program.variance);
const COLOR = program.colors;
const OUTPUT = program.output;

function generate_png(width, height, cellsize, variance, colors, output_file) {

  // Generate a pattern and then grab the PNG data uri
  var pngURI = Trianglify({
    width: width,
    height: height,
    cell_size: cellsize,
    x_colors: colors,
    variance: variance,
  }).png();

  // Strip off the uri part of the data uri, leaving the data
  var data = pngURI.substr(pngURI.indexOf('base64') + 7);

  // Decode the base64 encoded blob into a buffer
  var buffer = new Buffer.from(data, 'base64');

  // Save the buffer to a file
  fs.writeFileSync(output_file, buffer);
}

generate_png(WIDTH, HEIGHT, CELL, VARIANCE, COLOR, OUTPUT);
