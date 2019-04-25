require('dotenv').config();

const { calculateDistance } = require('../services/distance');
const { postDuration } = require('../services/firebase');
const { HOME_ADDRESS, WORK_ADDRESS } = require('../constants/distance');
const { logError } = require('../helpers/error');
const cron = require('node-cron');

const timeSchedule = '0-59/10 * * * * *';

const startImmediately = false;

const action = async () => {
    const details = await calculateDistance({ origins: WORK_ADDRESS, destinations: HOME_ADDRESS });
    // const details = { what: 'what' };
    await postDuration(details);
};

module.exports.test = cron.schedule(timeSchedule, action, startImmediately);