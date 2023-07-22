import garageService from '../api/garageService';
import winnersService from '../api/winnersService';
import renderGarage from '../ui/renderGarage';
import renderWinners from '../ui/renderWinners';

function deleteCarHandler() {
  document.addEventListener('click', async (event) => {
    const { target } = event;

    if (!target.classList.contains('js-remove-btn')) return;

    await garageService.deleteCar(target.parentElement.dataset.id);
    await winnersService.deleteWinner(target.parentElement.dataset.id);

    renderGarage();
    renderWinners();
  });
}

export default deleteCarHandler;
