import deleteCar from '../api/deleteCar';

function deleteCarHandler() {
  document.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.classList.contains('js-remove-btn')) return;

    deleteCar(target.parentElement.dataset.id);
  });
}

export default deleteCarHandler;
