const { connection } = require('./database');
const Promise = require('bluebird');

// Migrate database
const migrate = async () => {
    const db = await connection();
    db.migrate({ force: 'last' });
};

migrate();