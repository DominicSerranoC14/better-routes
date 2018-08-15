const { calculateDistance } = require('../services/distance');
const { HOME_ADDRESS, WORK_ADDRESS } = require('../constants/distance');
const { postDuration } = require('../services/firebase');
const { logError } = require('../helpers/error');
const cron = require('node-cron');

const timeSchedule = '0,15,30,45 15-18 * * 1-5';

const startImmediately = false;

const action = async () => {
    // Fetch duration details from Google API
    const details = await calculateDistance({ origins: WORK_ADDRESS, destinations: HOME_ADDRESS });

    postDuration(details);
};

module.exports.distanceHome = cron.schedule(timeSchedule, action, startImmediately);