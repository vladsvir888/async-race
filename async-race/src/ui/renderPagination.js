import { store } from '../data';

function renderPagination(prev = store.prevButtonDisabled, next = store.nextButtonDisabled) {
  const pagination = document.querySelector('.pagination');

  if (!pagination) {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="pagination">
        <button class="button button--primary js-prev-button">Previous page</button>
        <button class="button button--primary js-next-button">Next page</button>
      </div>
    `);

    return;
  }

  const prevButton = document.querySelector('.js-prev-button');
  const nextButton = document.querySelector('.js-next-button');

  prevButton.disabled = prev;
  nextButton.disabled = next;
}

export default renderPagination;
