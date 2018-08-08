module.exports.formatDistanceRows = (data) => {
    const { rows, origin_addresses, destination_addresses, status: upperLevelStatus } = data;

    const { elements } = rows.length ? rows[0] : {};
    const { distance, duration, duration_in_traffic, status } = elements && elements.length ? elements[0] : {};

    return {
        origin_address: origin_addresses.join(''),
        destination_address: destination_addresses.join(''),
        distance: distance.text,
        duration: duration.text,
        duration_in_traffic: duration_in_traffic.text,
        status,
        upperLevelStatus,
        timestamp: new Date().toLocaleString()
    };
};