const allBooks = [
    {
      title: "Holes",
      author: "Louis Sachar",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1618269830i/38709.jpg",
      alreadyRead: true
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
      alreadyRead: false
    }
  ];

  const section = document.querySelector(".listBooks");

  for (let i = 0; i < allBooks.length; i++) {
  const book = allBooks[i];

  const bookDiv = document.createElement("div");

  const bookInfo = document.createElement("p");
  bookInfo.textContent = `${book.title} written by ${book.author}`;

    if (book.alreadyRead) {
        bookInfo.style.color = "red";
      }

  const bookImage = document.createElement("img");
  bookImage.src = book.image;
  bookImage.style.width = "100px";

  bookDiv.appendChild(bookInfo);
  bookDiv.appendChild(bookImage);

  section.appendChild(bookDiv);
}