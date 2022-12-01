const db = require('./db')
const helper = require('../helper')
const config = require('../config')

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage)
    const rows = await db.query(
        `SELECT id, name 
        FROM families LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows)
    const meta = {page}

    return {
        data,
        meta
    }
}

async function create(family) {
    const result = await db.query(
        `INSERT INTO families(name)
            VALUES ('${family.name}')`
    )

    if (result.affectedRows) {
        const [createdEntity] = await db.query(
            `SELECT id, name, created_at, updated_at
            FROM families
            WHERE id = ${result.insertId}`
        )
        return createdEntity
    }

    return 'Error in creating family'
}

module.exports = {
    getMultiple,
    create
}