const normalizeData = rows => {
    if (!rows) {
        return {
            byId: {},
            allIds: []
        }
    }

    return rows.reduce((acc, row) => ({
        ...acc,
        byId: {
            ...acc.byId,
            [row.id]: row
        },
        allIds: [...acc.allIds, row.id]
    }), {
        byId: {},
        allIds: []
    })
}

module.exports = { normalizeData }