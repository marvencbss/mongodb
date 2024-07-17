const {MongoClient, ObjectId } = require("mongodb");

let singleton;

const MONGO_HOST = 'mongodb://mongo:12qwaszx@localhost:27017/?authSource=mongodb';

const MONGO_DATABASE = 'mongodb';

const COLLECTION = 'Cadastro';

async function connect() {
    if (singleton) return singleton;

    const client = new MongoClient(MONGO_HOST);
    await client.connect();

    singleton = client.db(MONGO_DATABASE);
    return singleton;
}

async function findAll() {
    const db = await connect();
    return db.collection(COLLECTION).find().toArray();
};

async function findByName(nome) {
    const query = { nome: nome };
    const db = await connect();
    return db.collection(COLLECTION).find(query).toArray();
    }

async function insertOne(query) {
    const db = await connect();
    return db.collection(COLLECTION).insertOne(query);
}

async function update(id, query) {
    const db = await connect();
    return db.collection(COLLECTION).updateOne({ _id: ObjectId.createFromHexString(id) },
    { $set: query });
}

module.exports = { findAll , findByName, insertOne, update}
