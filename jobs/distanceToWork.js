const cron = require('node-cron');

const timeSchedule = '0,30,59 6-9 * * 1-5';

const action = async () => {
    console.log(`${new Date().toLocaleTimeString()} Logging work distance details.`);
};

const startImmediately = false;

module.exports.distanceToWork = cron.schedule(timeSchedule, action, startImmediately);