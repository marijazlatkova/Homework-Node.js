const http = require('http');
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
//* 1. /home/vangel/hristov -> res.end("Vangel Hristov") -> first letter should be capital
//* 2. /home/books/a -> res.end("Atomic Habits") -> all books starting with "a"
//* 3. /home/books/1 -> res.end({ "title": "1984", id: 1, author: "George Orwell" })
//*    -> find the book with the given id

const handler = (async(req, res) => {
  try {
    if (req.url === '/home/marija/zlatkova' && req.method === 'GET') {
      const response = `<h2 style="color: mediumpurple">Marija Zlatkova</h2>`;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(response)
    } else if (req.url === '/home/books/a' && req.method === 'GET') {
      const books = await getAllBooks();
      const response = `<h2 style="color: deepskyblue">All Books starting with letter A:</h2><ol>${books
        .filter(book => book.title.startsWith('A'))
        .map(book => `<li>${book.title}</li>`)
        .join('')}</ol>`;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(response);
    } else if (req.url === '/home/books/1' && req.method === 'GET') {
      const id = 1;
      const bookById = await getBookById(id);
      const response = `<h2 style="color: salmon">Book By ID:</h2><ol><li>${JSON.stringify(bookById)}</li></ol>`;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(response);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const server = http.createServer(handler);

const port = 8080;

server.listen(port, ()  => {
  console.log(`Server is open on port ${port}`);
});