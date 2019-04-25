const sqlite = require('sqlite');
const Promise = require('bluebird');

module.exports.connection = () =>
    sqlite.open('./database/database.sqlite', { Promise });

module.exports.insertDuration = (db, {
    origin_address, destination_address,
    distance, duration, duration_in_traffic,
    status, upperLevelStatus, timestamp
}) => {
    return db.run(`INSERT INTO duration (
        origin_address,
        destination_address,
        distance,
        duration,
        duration_in_traffic,
        status,
        upperLevelStatus,
        timestamp
    ) values (
        "${origin_address}", 
        "${destination_address}",
        "${distance}", 
        "${duration}", 
        "${duration_in_traffic}", 
        "${status}", 
        "${upperLevelStatus}",
        "${timestamp}"
    )`);
};
