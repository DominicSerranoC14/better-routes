const { connection, insertDuration } = require('../database/database');
const { calculateDistance } = require('../services/distance');
const { HOME_ADDRESS, WORK_ADDRESS } = require('../constants/distance');
const cron = require('node-cron');

const timeSchedule = '0,15,30,45 15-18 * * 1-5';

const action = async () => {
    try {
        // Get database reference
        const db = await connection();
        // Fetch duration details from Google API
        const details = await calculateDistance({ origins: WORK_ADDRESS, destinations: HOME_ADDRESS });
        // Insert new duration data into database
        await insertDuration(db, details);

        console.log(`${new Date().toLocaleTimeString()} Logging home distance details.`);
    } catch (error) {
        console.log(error);
    }
};

const startImmediately = false;

module.exports.distanceHome = cron.schedule(timeSchedule, action, startImmediately);