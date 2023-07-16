import getCar from '../api/getCar';

function selectCarHandler() {
  document.addEventListener('click', async (event) => {
    const { target } = event;

    if (!target.classList.contains('js-select-btn')) return;

    const { name, color, id } = await getCar(target.parentElement.dataset.id);

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
    document.body.scrollIntoView({ behavior: 'smooth' });
  });
}

export default selectCarHandler;
