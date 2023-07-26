import GarageService from '../api/garageService';

function updateAttributes(name, color, id) {
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
}

function selectCarHandler() {
  document.addEventListener('click', async (event) => {
    const { target } = event;

    if (!target.classList.contains('js-select-btn')) return;

    const { name, color, id } = await GarageService.getCar(target.parentElement.dataset.id);

    updateAttributes(name, color, id);

    document.body.scrollIntoView({ behavior: 'smooth' });
  });
}

export default selectCarHandler;
