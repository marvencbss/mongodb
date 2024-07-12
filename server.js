const express = require('express');
const app = express();
const port = 3000;

letusuarios= [
    {id:1, nome:'Davi,',idade:40, cidade:'Canoas'},
    {id:2, nome:'Eduardo',idade:20, cidade:'Sao Leopoldo'},
    {id:3, nome:'Tomas',idade:20, cidade:'Sao Leopoldo'}
];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.get('/', (req, res) => {
    res.send('Hello world.');
});

app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
