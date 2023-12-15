// import express
const express = require('express');
// import router
const router = require('./routes/api.js');

// membuat object express
const app = express();

// Menggunakan middleware
app.use(express.json());
app.use(express.urlencoded());
// Menggunakan routing (router)
app.use(router);

/**
 * Membuat Routing
 * Method get menerima 2 params
 * Param 1 adalah endpoint
 * Param 2 callback
 * Callback menerima object req dan res
 */

// Endpoint root
app.get('/', (req, res) => {
  res.send('Hello Fatih');
});

// mendefinisikan port
app.listen(3000);

app.get('/students', (req, res) => {
  res.send('Menampilkan semua students');
});

app.post('/students', (req, res) => {
  res.send('Menambah data students');
});

app.put('/students/:id', (req, res) => {
  const {id} = req.params;
  res.send(`Mengubah data students : ${id}`);
});

app.delete('/students/:id', (req, res) => {
  const {id} = req.params;
  res.send(`Menghapus data students : ${id}`);
});
