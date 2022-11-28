const preloader = document.querySelector(".preloader");
const error = document.querySelector(".error");
const reviews = document.querySelector(".all-review-list");
const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");
let reviewList;
let pageNumber = 0;

const createReview = (review) => {
    const {
        name,
        email,
        body} = review
    return `<div class="reviews-list__item"><p class = "reviews-list__item-name">${name}(${email})</p><p>${body}</p></div>`;
};

const loadCurrentPage = () => {
    reviews.innerHTML = "";
    let startElementNumber = pageNumber * 5;
    let endElementNumber = Math.min(startElementNumber + 5, reviewList.length - 1)

    let reviewPageList = reviewList.slice(startElementNumber, endElementNumber);
    reviewPageList.forEach(value => reviews.insertAdjacentHTML("afterbegin", createReview(value)));

    previousButton.style.display = startElementNumber === 0 ? "none" : "block";
    nextButton.style.display = endElementNumber === reviewList.length - 1 ? "none" : "block";
}

previousButton.addEventListener("click", () => {
    pageNumber--;
    loadCurrentPage()
})

nextButton.addEventListener("click", () => {
    pageNumber++;
    loadCurrentPage()
})

window.addEventListener("load", async () => {
    preloader.style.display = "block";
    reviews.style.display = "none";
    error.style.display = "none";

    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((data) => {
            reviews.style.display = "block";
            let min = Math.floor(Math.random() * 100);
            reviewList = data.slice(min, min + 50);
            loadCurrentPage()
            preloader.style.display = "none";
            error.style.display = "none";
        })
    .catch(() => {
        error.style.display = "block";
        preloader.style.display = "none";
        reviews.style.display = "none";
    });
});