const MongoClient = require('mongodb').MongoClient
const url = 'mongodb+srv://tennerapp:tennerapp@cluster0.romtt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const config = require('../config')

module.exports = {
    getCollection
}

const dbURL = 'mongodb://localhost:27017';
const dbName = 'tenner_db'
var dbConn = null

async function getCollection(collectionName) {
    try {
        const db = await connect()
        const collection = await db.collection(collectionName)
        console.log(collection)
        return collection
    } catch (err) {
        logger.error('Failed to get Mongo collection', err)
        throw err
    }
}

async function connect() {
    if (dbConn) return dbConn
    try {
        const client = await MongoClient.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = client.db(dbName)
        dbConn = db
        return db
    } catch (err) {
        console.log('cannot connect to DB');
        logger.error('Cannot Connect to DB', err)
        throw err
    }
}




