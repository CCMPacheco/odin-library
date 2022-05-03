class Library {
  constructor() {
    this.books = [
      {
        title: "Classroom of the Elite",
        author: "Shougo Kinugasa",
        pages: "230",
        readStatus: true,
      },
    ];
  }
}

const library = new Library();

class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }
}

function createCard(newBook) {
  const card = document.createElement("div");
  const cardTitle = document.createElement("p");
  const cardAuthor = document.createElement("p");
  const cardPages = document.createElement("p");
  const cardReadBtn = document.createElement("button");
  const cardRemoveBtn = document.createElement("button");

  card.classList.add("card");
  cardTitle.classList.add("title");
  cardAuthor.classList.add("author");
  cardPages.classList.add("pages");
  cardReadBtn.classList.add("btn");
  cardReadBtn.setAttribute("data-read-btn", "");
  cardRemoveBtn.classList.add("btn");
  cardRemoveBtn.classList.add("remove");
  cardRemoveBtn.setAttribute("data-remove-btn", "");

  cardReadBtn.onclick = read;
  cardRemoveBtn.onclick = removeBook;

  cardTitle.textContent = `${newBook.title}`;
  cardAuthor.textContent = `${newBook.author}`;
  cardPages.textContent = `${newBook.pages} pages`;
  cardRemoveBtn.textContent = `Remove`;

  if (newBook.readStatus) {
    cardReadBtn.textContent = `Read`;
    cardReadBtn.classList.add("read");
  } else {
    cardReadBtn.textContent = `Not read`;
    cardReadBtn.classList.add("not-read");
  }

  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  card.appendChild(cardReadBtn);
  card.appendChild(cardRemoveBtn);
  libraryGrid.appendChild(card);
}

function displayLibrary() {
  for (let book of library.books) {
    createCard(book);
  }
}

function addBookToLibrary() {
  const newBook = getBookFromInput();
  library.books.push(newBook);
  createCard(newBook);
  closeModal();
}

function getBookFromInput() {
  const titleValue = title.value;
  const authorValue = author.value;
  const pagesValue = pages.value;
  const statusChecked = readStatus.checked;
  return new Book(titleValue, authorValue, pagesValue, statusChecked);
}

function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  readStatus.checked = false;
}

function openModal() {
  clearForm();
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

const read = (e) => {
  if (e.target.classList.contains("read")) {
    e.target.classList.remove("read");
    e.target.classList.add("not-read");
    e.target.textContent = `Not read`;
    const itemIndex = e.target.parentElement.firstChild.textContent;
    const index = library.books.findIndex((book) => book.title === itemIndex);
    library.books[index].readStatus = false;
  } else if (e.target.classList.contains("not-read")) {
    e.target.classList.remove("not-read");
    e.target.classList.add("read");
    e.target.textContent = `Read`;
    const itemIndex = e.target.parentElement.firstChild.textContent;
    const index = library.books.findIndex((book) => book.title === itemIndex);
    library.books[index].readStatus = true;
  }
};

const removeBook = (e) => {
  const removeItem = e.target.parentElement.firstChild.textContent;
  library.books = library.books.filter((book) => book.title !== removeItem);
  e.target.parentElement.remove();
};

const openBtn = document.querySelector("[data-open-btn]");
const closeBtn = document.querySelector("[data-close-btn]");
const addBtn = document.querySelector("[data-add-btn]");
const clearBtn = document.querySelector("[data-clear-btn]");
const overlay = document.querySelector(".overlay");
const modal = document.getElementById("modal");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const readStatus = document.getElementById("status");
const libraryGrid = document.querySelector(".library-grid");

openBtn.addEventListener("click", () => {
  openModal();
});

closeBtn.addEventListener("click", () => {
  closeModal();
});

overlay.addEventListener("click", () => {
  closeModal();
});

addBtn.addEventListener("click", () => {
  addBookToLibrary();
});

clearBtn.addEventListener("click", () => {
  clearForm();
});

displayLibrary();
