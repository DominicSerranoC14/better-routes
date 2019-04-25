const path = require('path'); 
require('dotenv').config({ path: path.join(__dirname, '.env') });

const { distanceHome } = require('./jobs/distanceHome');
const { distanceToWork } = require('./jobs/distanceToWork');

distanceToWork.start();
distanceHome.start();

// Throw any uncaught exceptions into the error log for debugging
process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
    process.exit();
});
