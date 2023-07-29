function showMessage(message: string, autoHide: boolean = false, delay: number = 2000): void {
  const alert = document.querySelector('.alert');

  if (alert) alert.remove();

  document.body.insertAdjacentHTML('beforeend', `
    <div class="alert">${message}</div>
  `);

  if (autoHide) {
    setTimeout(() => {
      document.querySelector('.alert')?.remove();
    }, delay);
  }
}

export default showMessage;
