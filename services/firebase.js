const axios = require('axios');

module.exports.postDuration = async data => {
    try {
        await axios.post(`${process.env.FIREBASE_URL}/duration.json`, data);
        console.log(`${new Date().toLocaleTimeString()}: Duration has been posted.`);
    } catch (error) {
        console.error(new Date().toLocaleTimeString());
        console.error(error);
    }
};