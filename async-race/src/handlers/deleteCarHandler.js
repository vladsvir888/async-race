import GarageService from '../api/garageService';
import WinnersService from '../api/winnersService';
import renderGarage from '../ui/renderGarage';
import renderWinners from '../ui/renderWinners';

function deleteCarHandler() {
  document.addEventListener('click', async (event) => {
    const { target } = event;

    if (!target.classList.contains('js-remove-btn')) return;

    await GarageService.deleteCar(target.parentElement.dataset.id);
    await WinnersService.deleteWinner(target.parentElement.dataset.id);

    renderGarage();
    renderWinners();
  });
}

export default deleteCarHandler;
