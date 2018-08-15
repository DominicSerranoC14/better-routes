const axios = require('axios');
const { logError } = require('../helpers/error');

module.exports.postDuration = async data => {
    try {
        console.log(new Date().toLocaleTimeString(), ': Attempting to post duration...');

        await axios.post(`${process.env.FIREBASE_URL}/duration.json`, data);

        console.log(`${new Date().toLocaleTimeString()}: Duration has been posted.`);
    } catch (error) {
        logError(error);
    }
};