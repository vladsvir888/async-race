function renderPagination() {
  const pagination = document.querySelector('.pagination');

  if (pagination) return;

  document.body.insertAdjacentHTML('beforeend', `
    <div class="pagination">
      <button class="button button--primary">Previous page</button>
      <button class="button button--primary">Next page</button>
    </div>
  `);
}

export default renderPagination;
