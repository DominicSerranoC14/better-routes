const { calculateDistance } = require('../services/distance');
const { HOME_ADDRESS, WORK_ADDRESS } = require('../constants/distance');
const { appendResults } = require('../services/results');
const cron = require('node-cron');

const timeSchedule = '0,15,30,45 15-18 * * 1-5';

const startImmediately = false;

const action = async () => {
    // Fetch duration details from Google API
    // const details = await calculateDistance({ origins: WORK_ADDRESS, destinations: HOME_ADDRESS });

    const details = {
        "origin_address": "1310 Clinton St, Nashville, TN 37203, USA",
        "destination_address": "402 Southwood Park Pl, Nashville, TN 37217, USA",
        "distance": "7.2 mi",
        "duration": "13 mins",
        "duration_in_traffic": "11 mins",
        "status": "OK",
        "upperLevelStatus": "OK",
        "timestamp": "8/9/2018, 9:06:33 PM"
    };

    appendResults(details);

    console.log(`${new Date().toLocaleTimeString()} Logging work to home distance details.`);
};

module.exports.distanceHome = cron.schedule(timeSchedule, action, startImmediately);