let myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {}

function openModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

const addBtn = document.querySelector("[data-add-btn]");
const closeBtn = document.querySelector("[data-close-btn]");
const readBtn = document.querySelector("[data-read-btn]");
const removeBtn = document.querySelector("[data-remove-btn]");
const overlay = document.querySelector(".overlay");
const modal = document.getElementById("modal");

addBtn.addEventListener("click", () => {
  openModal();
});

closeBtn.addEventListener("click", () => {
  closeModal();
});

overlay.addEventListener("click", () => {
  closeModal();
});
