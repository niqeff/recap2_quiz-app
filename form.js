console.clear();

const formElement = document.querySelector('[data-js = "newCard__form"]');
const newCardsListElement = document.querySelector(
  '[data-js = "newCards_list"]'
);

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  // Collect data from input
  const formData = new FormData(event.target);
  const inputData = Object.fromEntries(formData);

  // create new DOM-Elements to display input data
  // and process input data
  const newCardListItem = document.createElement("li");
  newCardListItem.classList.add("card-list__item");
  //   console.log(newCardListItem);
  newCardListItem.innerHTML = `
            <article class="card">
            <h2 class="card__question">
                ${inputData.newQuestion}
            </h2>
            <button
                class="card__button-answer"
                type="button"
                data-js="card__button-answer"
            >
                Show answer
            </button>
            <p class="card__answer" data-js="card__answer">
                ${inputData.newAnswer}
            </p>
            <ul class="card__tag-list">
                <li class="card__tag-list-item">#${inputData.newTag}</li>
            </ul>
            <div class="card__button-bookmark">
                <button
                class="bookmark"
                aria-label="bookmark"
                type="button"
                data-js="card__button-bookmark"
                >
                <svg
                    class="bookmark__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 24 24"
                >
                    <path
                    d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
                    />
                </svg>
                </button>
            </div>
            </article>
        `;

  // append new element to main
  console.log(newCardListItem);
  newCardsListElement.append(newCardListItem);

  //Add interactivity for new buttons
  const newCardsBookmarkButtonElement = newCardsListElement.querySelector(
    '[data-js="card__button-bookmark"]'
  );
  newCardsBookmarkButtonElement.addEventListener("click", () => {
    newCardsBookmarkButtonElement.classList.toggle("bookmark--active");
  });

  const newCardsAnswerButtonElement = newCardsListElement.querySelector(
    '[data-js="card__button-answer"]'
  );
  const newCarsAnswerElement = newCardsListElement.querySelector(
    '[data-js="card__answer"]'
  );

  newCardsAnswerButtonElement.addEventListener("click", () => {
    newCarsAnswerElement.classList.toggle("card__answer--active");
    console.log(newCardsAnswerButtonElement.innerText);
    newCardsAnswerButtonElement.innerText == "Show answer"
      ? (newCardsAnswerButtonElement.textContent = "Hide answer")
      : (newCardsAnswerButtonElement.textContent = "Show answer");
  });
});

formElement.addEventListener("input", (event) => {
  //   event.preventDefault();
  console.log(event.data);
  const formData = new FormData(event.target);
  const inputData = Object.fromEntries(formData);
  console.log(inputData);
});
