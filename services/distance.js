const axios = require('axios');
const { formatDistanceRows } = require('../helpers/distance');

module.exports.calculateDistance = async ({ origins, destinations }) => {
    const { API_KEY, DISTANCE_URL } = process.env;

    try {
        const { data } = await axios.get(`${DISTANCE_URL}`, {
            params: {
                origins,
                destinations,
                departure_time: 'now',
                units: 'imperial',
                key: API_KEY
            }
        });

        return formatDistanceRows(data);
    } catch (error) {
        const { config, response } = error;

        if (!config || !response) {
            return console.error(error);
        }

        console.error(response.status, response.statusText);
        console.error(config.url);
        console.error(config.params);
    }
};