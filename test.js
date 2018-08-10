const { test } = require('./jobs/test');
require('dotenv').config();

test.start();

// Throw any uncaught exceptions into the error log for debugging
process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
    process.exit();
});