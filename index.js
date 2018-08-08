const { calculateDistance } = require('./services/distance');
const { appendResults } = require('./services/results');
const { HOME_ADDRESS, WORK_ADDRESS } = require('./constants/distance');
const { distanceHome, distanceToWork } = require('./jobs/distanceHome');
require('dotenv').config();

// calculateDistance({
//     origins: HOME_ADDRESS, destinations: WORK_ADDRESS
// }).then(res => {
//     appendResults(res);
// });

// calculateDistance({
//     origins: WORK_ADDRESS, destinations: HOME_ADDRESS
// }).then(res => {
//     appendResults(res);
// });

// distanceToWork.start();
distanceHome.start();

// Throw any uncaught exceptions into the error log for debugging
process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
    process.exit();
});