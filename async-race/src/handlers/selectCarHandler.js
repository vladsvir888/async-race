import garageService from '../api/garageService';
import winnersService from '../api/winnersService';

function updateAttributes(name, color, id, wins, time) {
  const updateButton = document.querySelector('.js-update-button');
  const updateButtonParent = updateButton.parentElement;
  const textInput = updateButtonParent.querySelector('input[type="text"]');
  const colorInput = updateButtonParent.querySelector('input[type="color"]');

  updateButton.disabled = false;
  textInput.disabled = false;
  colorInput.disabled = false;
  textInput.value = name;
  colorInput.value = color;
  updateButton.dataset.id = id;
  updateButton.dataset.wins = wins;
  updateButton.dataset.time = time;
}

function selectCarHandler() {
  document.addEventListener('click', async (event) => {
    const { target } = event;

    if (!target.classList.contains('js-select-btn')) return;

    const { name, color, id } = await garageService.getCar(target.parentElement.dataset.id);
    const { wins, time } = await winnersService.getWinner(target.parentElement.dataset.id);

    updateAttributes(name, color, id, wins, time);

    document.body.scrollIntoView({ behavior: 'smooth' });
  });
}

export default selectCarHandler;
