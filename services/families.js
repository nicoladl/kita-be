const db = require('./db')
const helper = require('../helper')

async function getMultiple(page = 1) {
    const rows = await db.query(
        `SELECT id, name 
        FROM families`
    );
    return helper.normalizeData(rows)
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