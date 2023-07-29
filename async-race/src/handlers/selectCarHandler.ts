import GarageService from '../api/garageService';
import { store } from '../data';
import showMessage from '../utils/showMessage';

function updateAttributes(name: string, color: string, id: number): void {
  const updateButton = <HTMLButtonElement>document.querySelector('.js-update-button');
  const updateButtonParent = <HTMLElement>updateButton.parentElement;
  const textInput = <HTMLInputElement>updateButtonParent.querySelector('input[type="text"]');
  const colorInput = <HTMLInputElement>updateButtonParent.querySelector('input[type="color"]');

  updateButton.disabled = false;
  textInput.disabled = false;
  colorInput.disabled = false;
  textInput.value = name;
  colorInput.value = color;
  store.idCar = id;
}

function selectCarHandler(): void {
  document.addEventListener('click', async (event) => {
    const target = <HTMLButtonElement>event.target;

    if (!target.classList.contains('js-select-btn')) return;

    const parent = target.parentElement;
    const parentId = parent?.dataset.id;

    if (!parentId) {
      showMessage("Id doesn't exist", true);

      return;
    }

    const { name, color, id } = await GarageService.getCar(parentId);

    updateAttributes(name, color, id);

    document.body.scrollIntoView({ behavior: 'smooth' });
  });
}

export default selectCarHandler;
