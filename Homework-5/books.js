const http = require("http");
const fetch = require('isomorphic-fetch');

const { read, write } = require("./data");

const getAllBooks = async () => {
  return await read();
};

const addNewBook = async (newBook) => {
  let books = await read();
  books.push(newBook);
  await write(books);
};

const getBookById = async (id) => {
  let books = await read();
  return books.find(book => book.id === id);
};

const removeBookById = async (id) => {
  let books = await read();
  books = books.filter(book => book.id !== id);
  await write(books);
};

const updateBookById = async (id, updateBook) => {
  let books = await read();
  books = books.map(book => book.id === id ? { ...book, ...updateBook } : book);
  await write(books);
};

module.exports = {
  getAllBooks,
  addNewBook,
  getBookById,
  removeBookById,
  updateBookById,
};

//! Homework
//* 1. Home - display data for cars, books, cities
//* 2. Cars - route with query to display singleCar
//* 3. Fetch and display users from https://jsonplaceholder.typicode.com/users
//* 4. Optional - HTML

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === '/') {
      const allBooks = await getAllBooks();
      const htmpResponse = `<h2>All Books:</h2><ol>${allBooks.map(book =>`<li>${book.title}</li>`).join('')}</ol>`;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(htmpResponse);
    } else if (req.url === '/books') {
      const singleBook = await getAllBooks();
      const htmpResponse = `<h2>Single Book:</h2><ol><li>${singleBook[0].title}</li></ol>`;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(htmpResponse);
    } else if (req.url === '/users') {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users, null, 2));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
