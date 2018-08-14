const { calculateDistance } = require('../services/distance');
const { HOME_ADDRESS, WORK_ADDRESS } = require('../constants/distance');
const { postDuration } = require('../services/firebase');
const { logError } = require('../helpers/error');
const cron = require('node-cron');

const timeSchedule = '0,15,30,45 6-9 * * 1-5';

const startImmediately = false;

const action = async () => {
    // Fetch duration details from Google API
    const details = await calculateDistance({ origins: HOME_ADDRESS, destinations: WORK_ADDRESS });

    postDuration(details);
};

module.exports.distanceToWork = cron.schedule(timeSchedule, action, startImmediately);