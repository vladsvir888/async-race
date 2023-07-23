import './global.css';
import createCarHandler from './handlers/createCarHandler';
import deleteCarHandler from './handlers/deleteCarHandler';
import selectCarHandler from './handlers/selectCarHandler';
import updateCarHandler from './handlers/updateCarHandler';
import paginationButtonsHandler from './handlers/paginationButtonsHandler';
import toWinnersHandler from './handlers/toWinnersHandler';
import toGarageHandler from './handlers/toGarageHandler';
import renderGarage from './ui/renderGarage';
import renderWinners from './ui/renderWinners';
import renderToggleButtons from './ui/renderToggleButtons';
import randomGeneratorHandler from './handlers/randomGeneratorHandler';
import sortHandler from './handlers/sortHandler';

document.addEventListener('DOMContentLoaded', () => {
  renderToggleButtons();
  renderGarage();
  renderWinners();
  createCarHandler();
  deleteCarHandler();
  selectCarHandler();
  updateCarHandler();
  paginationButtonsHandler();
  toWinnersHandler();
  toGarageHandler();
  randomGeneratorHandler();
  sortHandler();
});
