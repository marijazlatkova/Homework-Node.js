const { getAllBooks, addNewBook, getBookById, removeBookById, updateBookById } = require("./books");

(async () => {
  try {
    const allBooks = await getAllBooks();
    console.log("All Books:", allBooks);

    const newBook = {
      title: "Adventures of Tom Sawyer",
      author: "Mark Twain",
      id: 6
    };
    await addNewBook(newBook);
    console.log("New Book Added");

    const bookId = 2;
    const bookById = await getBookById(bookId);
    console.log("Book by ID:", bookById);

    const removeBookId = 4;
    await removeBookById(removeBookId);
    console.log("Book Removed");

    const updateBookId = 3;
    const updatedBook = {
      author: "Gabriel García Márquez",
    };
    await updateBookById(updateBookId, updatedBook);
    console.log("Book Updated");
  } catch (err) {
    console.error("An error occurred:", err);
  } finally {
    console.log("Execution Completed.");
  }
})();