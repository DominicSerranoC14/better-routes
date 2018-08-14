module.exports.logError = error => {
    const { config, response } = error;

    console.error(new Date().toLocaleTimeString());

    if (!config || !response) {
        return console.error(error);
    }

    console.error(response.status, response.statusText);
    console.error('URL: ', config.url);

    if (config.params) console.error('Params: ', config.params);
};