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