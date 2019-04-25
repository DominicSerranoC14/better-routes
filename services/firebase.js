const axios = require('axios');
const { logError } = require('../helpers/error');
const { HOME_ADDRESS } = require('../constants/distance');

module.exports.postDuration = async data => {
    try {
        console.log(new Date().toLocaleTimeString(), ': Attempting to post duration...');

        await axios.post(`${process.env.FIREBASE_URL}/${HOME_ADDRESS}.json`, data);

        console.log(`${new Date().toLocaleTimeString()}: Duration has been posted.`);
    } catch (error) {
        logError(error);
    }
};