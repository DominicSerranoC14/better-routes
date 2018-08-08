const cron = require('node-cron');

const timeSchedule = '0,15,30,45 15-18 * * 1-5';

const action = async () => {
    console.log(`${new Date().toLocaleTimeString()} Logging home distance details.`);
};

const startImmediately = false;

module.exports.distanceHome = cron.schedule(timeSchedule, action, startImmediately);