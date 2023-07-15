import createCar from '../api/createCar';

function createCarHandler() {
  const createButton = document.querySelector('.js-create-button');

  createButton?.addEventListener('click', () => {
    const textInput = createButton.parentElement.querySelector('input[type="text"]');
    const colorInput = createButton.parentElement.querySelector('input[type="color"]');
    const car = {
      name: textInput.value || 'Unnamed Car',
      color: colorInput.value,
    };

    createCar(car);
  });
}

export default createCarHandler;
