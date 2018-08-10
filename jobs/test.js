const { calculateDistance } = require('../services/distance');
const { appendResults } = require('../services/results');
const { HOME_ADDRESS, WORK_ADDRESS } = require('../constants/distance');
const cron = require('node-cron');

const timeSchedule = '0-59/2 * * * * *';

const startImmediately = false;

const action = async () => {
    const details = await calculateDistance({ origins: WORK_ADDRESS, destinations: HOME_ADDRESS });

    appendResults(details);

    console.log(`${new Date().toLocaleTimeString()} Logging home distance details.`);
};

module.exports.test = cron.schedule(timeSchedule, action);