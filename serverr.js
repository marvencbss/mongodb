const express = require('express');
const db = require('./db');
const app = express();

app.use(express.json());

const port = 3000;

app.get('/usuarios', async (req, res,next) => {
    try {
        const docs = awaitdb.findAll();
        res.send(docs);
    } catch(err) {
        next(err);
    }
});

app.get('/buscarnome/:nome', async (req, res, next) => {
    const nome = req.params.nome;
    try {
        const docs = await db.findByName(nome);
        res.send(docs);
    } catch (err) {
        next(err);
    }
});

app.patch('editar/:id', async (req, res, next) => {
    const { nome, idade,cidade } = req.body;
    const query = { nome: nome ,idade: idade, cidade: cidade };

    try {
        const docs = await db.insertOne(query);
        res.send(docs);
    } catch(err) {
        next(err);
    }
});

app.post('/cadastrar', async (req, res, next) => {
    const { nome, idade, cidade } = req.body;
    const query= { nome:nome, idade:idade, cidade:cidade };

    try {
        const docs = await db.insertOne(query);
        res.send(docs);
    } catch(err) {
        next(err);
    }
});

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1/${port}/`);
});
