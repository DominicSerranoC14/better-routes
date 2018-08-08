module.exports.formatDistanceRows = (data) => {
    const { rows, origin_addresses, destination_addresses, status: upperLevelStatus } = data;

    const { elements } = rows.length ? rows[0] : {};
    const { distance, duration, duration_in_traffic, status } = elements && elements.length ? elements[0] : {};

    return {
        origin_addresses, destination_addresses,
        distance, duration, duration_in_traffic, status, upperLevelStatus
    };
};