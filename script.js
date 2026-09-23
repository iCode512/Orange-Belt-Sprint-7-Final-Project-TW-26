const bookButtons = document.querySelectorAll(".book-btn");
const descriptionPages = document.querySelectorAll(".description-page");
const bookList = document.querySelector(".book-list");
const backButtons = document.querySelectorAll(".back-button");

function showDescription(bookName) {
    bookList.classList.add("hidden");
    descriptionPages.forEach((page)=> {
        const isMatch = page.dataset.bookPage === bookName;
        page.classList.toggle("hidden", !isMatch);
    });
}

function showBookList() {
    bookList.classList.remove("hidden");

    descriptionPages.forEach((page) => {
        page.classList.add("hidden");
    });
}

bookButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const bookName = button.dataset.book;
        showDescription(bookName);
    });
});

backButtons.forEach((button) => {
    button.addEventListener("click", ()  => {
        showBookList();
    });
});