const { Console } = require('console');
const fs = require('fs');

const outputStream = fs.createWriteStream('./logs/stdout.log');
const errorOutput = fs.createWriteStream('./logs/stderr.log');

module.exports.logger = new Console(outputStream, errorOutput);
