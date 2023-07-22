function getColorAndNameFromInputs(button) {
  const textInput = button.parentElement.querySelector('input[type="text"]');
  const colorInput = button.parentElement.querySelector('input[type="color"]');

  if (!textInput.value) return null;

  return {
    name: textInput.value,
    color: colorInput.value,
  };
}

export default getColorAndNameFromInputs;
