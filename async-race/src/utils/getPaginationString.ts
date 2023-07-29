function getPaginationString(prev: boolean, next: boolean, page: number): string {
  return `
    <div class="pagination">
      <button class="button button--primary js-prev-button" ${prev === true ? 'disabled' : ''}>Previous page</button>
      <div class="pagination__num">Page ${page}</div>
      <button class="button button--primary js-next-button" ${next === true ? 'disabled' : ''}>Next page</button>
    </div>
  `;
}

export default getPaginationString;
