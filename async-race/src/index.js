import './global.css';
import createCarHandler from './handlers/createCarHandler';
import deleteCarHandler from './handlers/deleteCarHandler';
import renderControlPanel from './ui/renderControlPanel';
import renderPagination from './ui/renderPagination';
import renderGarage from './ui/renderGarage';
import paginationButtonsHandler from './handlers/paginationButtonsHandler';
import selectCarHandler from './handlers/selectCarHandler';

document.addEventListener('DOMContentLoaded', () => {
  renderControlPanel();
  renderPagination();
  renderGarage();
  createCarHandler();
  deleteCarHandler();
  paginationButtonsHandler();
  selectCarHandler();
});
