const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT id, name 
        FROM families LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

async function create(family) {
    const result = await db.query(
        `INSERT INTO families(name)
            VALUES ('${family.name}')`
    );

    let message = 'Error in creating family';

    if (result.affectedRows) {
        message = 'Family created successfully';
    }

    return {message};
}

module.exports = {
    getMultiple,
    create
}