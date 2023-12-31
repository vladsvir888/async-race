import GarageService from '../api/garageService';
import WinnersService from '../api/winnersService';
import renderGarage from '../ui/renderGarage';
import renderWinners from '../ui/renderWinners';

function deleteCarHandler(): void {
  document.addEventListener('click', async (event) => {
    const target = <HTMLButtonElement>event.target;

    if (!target.classList.contains('js-remove-btn')) return;

    const parent = <HTMLElement>target.parentElement;
    const parentId = parent.dataset.id;

    if (!parentId) {
      return;
    }

    await GarageService.deleteCar(parentId);
    await WinnersService.deleteWinner(parentId);

    renderGarage();
    renderWinners();
  });
}

export default deleteCarHandler;
