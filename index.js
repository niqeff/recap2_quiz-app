console.clear;

const cardButtonBookmarkFirstCard = document.querySelector(
  '[data-js="card__button-bookmark--card1"]'
);

const cardButtonAnswerFirstCard = document.querySelector(
  '[data-js="card__button-answer--card1"]'
);
const cardOutputAnswerFirstCard = document.querySelector(
  '[data-js="card__answer--card1"]'
);

cardButtonBookmarkFirstCard.addEventListener("click", () => {
  cardButtonBookmarkFirstCard.classList.toggle("bookmark--active");
});

cardButtonAnswerFirstCard.addEventListener("click", () => {
  cardOutputAnswerFirstCard.classList.toggle("card__answer--active");
  cardOutputAnswerFirstCard.innerText == "Show answer"
    ? (cardOutputAnswerFirstCard.textContent = "Hide answer")
    : (cardOutputAnswerFirstCard.textContent = "Show answer");
});
