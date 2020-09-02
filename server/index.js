const express = require("express");
const app = express();
const mysql = require('mysql');

app.use(express.json());

const db = require('../db/db')
//console.log(db)


app.get('/allBooks', (req, res, next) => {
  var sql = "SELECT books.bookName, books.price, authors.name FROM authors JOIN books ON authors.authorID = books.bookId";
  db.query (sql, (err, result) => {
    if (err) throw err;
    //console.log(result);
    res.send('data fetched!')
  })
})

app.get('/:genre', (req, res, next) => {
  console.log('hitted!!!!!!')
  var sql = `SELECT books.bookID, books.price, books.bookDesc, books.bookName, genre.genreName FROM books LEFT JOIN genre ON genre_ID = genre.genreID WHERE genreName = '${req.params.genre}'`;
  db.query (sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('data fetched!')
  })
})

app.use("*", (err, req, res, next) => {
  if (err) {
    console.log(err.stack);
    res.status(500).send("The route you are requesting does not exist!");
  }
});

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}
  goto: http://localhost:8080`);
});
  

