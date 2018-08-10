const { appendFile } = require('fs');
const { getTodayFormatted } = require('../helpers/date');

module.exports.appendResults = data => {
    const fileName = `./results/${getTodayFormatted()}.json`;

    appendFile(fileName, JSON.stringify(data, null, 4) + ',\n', (error) => {
        if (error) {
            return console.error(error);
        }

        console.log(`Successfully added to file ${fileName}`);
    });
};