function showError(message) {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="alert">Some error has occurred: ${message}</div>
  `);
}

export default showError;
