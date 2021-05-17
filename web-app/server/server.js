const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');

app.get('/axios', (req,res) => {
    res.send({ axios : 'Hello react'});
    console.log('test axios');
})

app.get('/', function(req,res) {
    // res.send('Hello World');
    console.log('axios');
});

// app.get('/api/products', (req, res) => {
//     db.query("SELECT * FROM mall_test", (err, data) => {
//         if(!err) res.send({ products : data });
//         else res.send(err);
//     })
// })

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})