const axios = require('axios');
const { formatDistanceRows } = require('../helpers/distance');
const { logError } = require('../helpers/error');

module.exports.calculateDistance = async ({ origins, destinations }) => {
    const { API_KEY, DISTANCE_URL } = process.env;

    try {
        console.log(new Date().toLocaleTimeString(), ': Attempting to calculate distance...');

        const { data } = await axios.get(`${DISTANCE_URL}`, {
            params: {
                origins,
                destinations,
                departure_time: 'now',
                units: 'imperial',
                key: API_KEY
            }
        });

        console.log(new Date().toLocaleTimeString(), ': Distance has been calculated.');

        return formatDistanceRows(data);
    } catch (error) {
        logError(error);
    }
};