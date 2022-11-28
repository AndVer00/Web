const form = document.querySelector(".reviews__form");
const input = document.querySelector(".reviews__form-input");
const list = document.querySelector(".reviews__container");

const key = "reviews-key";

function getReviews() {
    const list = JSON.parse(localStorage.getItem(key));
    return list ? list : [];
}

function addReview(item) {
    let reviews = getReviews();
    reviews.unshift(item);
    localStorage.setItem(key, JSON.stringify(reviews));
}

function insertReviewIntoPage(review) {
    list.insertAdjacentHTML("afterbegin",
        `<div class="reviews__container-item">
        <p>
            ${review}
        </p>
        </div>`);
}

window.addEventListener("load", () => {
    let reviews = getReviews();
    reviews.forEach((review) => {
        insertReviewIntoPage(review);
    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let review = input.value;
    if (!review) return;
    insertReviewIntoPage(review);
    addReview(review);
    input.value = "";
});