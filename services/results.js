const { appendFile } = require('fs');

module.exports.appendResults = data => {
    const fileName = `./results/${new Date().toLocaleDateString()}.json`;

    appendFile(fileName, JSON.stringify(data, null, 4) + ',\n', (error) => {
        if (error) {
            return console.error(error);
        }

        console.log(`Successfully added to file ${fileName}`);
    });
};