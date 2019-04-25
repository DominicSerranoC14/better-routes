const { HOME_ADDRESS, WORK_ADDRESS } = process.env;

const formatAddressString = addressString => addressString.replace(/ /g, "+");

module.exports = {
    HOME_ADDRESS: formatAddressString(HOME_ADDRESS),
    WORK_ADDRESS: formatAddressString(WORK_ADDRESS)
};