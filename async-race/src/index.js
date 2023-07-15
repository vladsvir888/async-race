import './global.css';
import createCarHandler from './handlers/createCarHandler';
import deleteCarHandler from './handlers/deleteCarHandler';
import renderControlPanel from './ui/renderControlPanel';
import renderGarage from './ui/renderGarage';

document.addEventListener('DOMContentLoaded', () => {
  renderControlPanel();
  renderGarage();
  createCarHandler();
  deleteCarHandler();
});
