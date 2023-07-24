function showMessage(message) {
  const alert = document.querySelector('.alert');

  if (alert) alert.remove();

  document.body.insertAdjacentHTML('beforeend', `
    <div class="alert">${message}</div>
  `);
}

export default showMessage;
