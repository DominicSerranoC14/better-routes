const { calculateDistance } = require('../services/distance');
const { HOME_ADDRESS, WORK_ADDRESS } = require('../constants/distance');
const { appendResults } = require('../services/results');
const cron = require('node-cron');

const timeSchedule = '0,15,30,45 6-9 * * 1-5';

const startImmediately = false;

const action = async () => {
    try {
        // Fetch duration details from Google API
        const details = await calculateDistance({ origins: HOME_ADDRESS, destinations: WORK_ADDRESS });

        appendResults(details);

        console.log(`${new Date().toLocaleTimeString()}: Logging home to work distance details.`);
    } catch (error) {
        console.error(error);
    }
};

module.exports.distanceToWork = cron.schedule(timeSchedule, action, startImmediately);