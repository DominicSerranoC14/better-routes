require('dotenv').config();

const { distanceHome } = require('./jobs/distanceHome');
const { distanceToWork } = require('./jobs/distanceToWork');

distanceToWork.start();
distanceHome.start();

// Throw any uncaught exceptions into the error log for debugging
process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
    process.exit();
});