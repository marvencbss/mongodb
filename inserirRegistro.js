const { MongoClient } = require('mongodb');


const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

const dbName = 'mongodb';

async function main() {
  await client.connect();
  console.log('Conectado com sucesso ao servidor MongoDB');

  const db = client.db(dbName);
  const collection = db.collection('Cadastro');

  const insertResult = await collection.insertOne({ nome: 'Davi', idade: 30, cidade: 'Porto Alegre' });
  console.log('Documento inserido:', insertResult.insertedId);
  
  const findResult = await collection.find({}).toArray();
  console.log('Documentos encontrados:', findResult);

  await client.close();
}

main().catch(console.error);
