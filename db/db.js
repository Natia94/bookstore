var mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "Natia",
    password: "Natia617625",
    database: "Bookstore"
});


//genre
// CREATE TABLE genre (
//     genreID int NOT NULL AUTO_INCREMENT,
//     genreName varchar(255),
//     PRIMARY KEY (genreID)
// );

//books
// CREATE TABLE books (
//     bookID int NOT NULL AUTO_INCREMENT,
//     bookName varchar(255),
//     bookDesc varchar(255),
//     price int,
//     author_ID int,
//     genre_ID int,
//     PRIMARY KEY (bookID),
//     FOREIGN KEY (author_ID) REFERENCES authors(authorID),
//     FOREIGN KEY (genre_ID) REFERENCES genre(genreID)
// );


//connect to db
db.connect((err) => {
    if (err) throw err;
    console.log(" DB is Connected!");

    // var sqlAuthors = "INSERT INTO authors (name) VALUES ?";
    // var authorValues = [
    //     ['Mark Twain'],
    //     ['Fyodor Dostoevsky'],
    //     ['Ernest Hemingway'],
    //     ['Edgar Allan Poe']
    // ];
    // db.query(sqlAuthors, [authorValues], function (err, result) {
    //     if (err) throw err;
    //     //console.log(result.affectedRows);
    // });

    // var sqlGenres = "INSERT INTO genre (genreName) VALUES ?";
    // var genreValues = [
    //     ['Science'],
    //     ['Fiction']
    // ];

    // db.query(sqlGenres, [genreValues],  function(err, result) {
    //     if (err) throw err;
    //     //console.log(result);
        
    // });

    // var sqlBooks = "INSERT INTO books (bookName, bookDesc, price, author_ID, genre_ID) VALUES ?";
    // var bookValues = [

    //     ['The Mysterious Stranger','lalala', '10', '1', '1'],
    //     ['The Advanture of Tom sawyer','lalala', '15', '1', '2'],

    //     ['The Idiot', 'lalala','17', '2','1'],
    //     ['Crime and punishment', 'lalala','25', '2', '2'],
    //     ['Demons', 'lalala', '21', '2', '1'],
        

    //     ['The Old Man and the Sea', 'lalala','17', '3', '1'],
    //     ['To have and have not', 'lalala', '25', '3', '2'],
    //     ['A farewel To Arms', 'lalala', '21', '3', '1'],

    //     ['The Tell-Tale', 'lalala','17', '4', '1'],
    //     ['The Black Cat','lalala', '25', '4', '2'],
    //     ['The Raven', 'lalala', '21', '4', '1'],


    //     // ['Edgar Allan Poe']
    // ];
    // db.query(sqlBooks, [bookValues], function (err, result) {
    //     if (err) throw err;
    //     //console.log(result.affectedRows);
    // });
});

module.exports = db;

