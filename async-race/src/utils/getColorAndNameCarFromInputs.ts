import { ICarInput } from '../types';

function getColorAndNameCarFromInputs(button: HTMLButtonElement): ICarInput | null {
  const buttonParent = <HTMLElement>button.parentElement;
  const textInput = <HTMLInputElement>buttonParent.querySelector('input[type="text"]');
  const colorInput = <HTMLInputElement>buttonParent.querySelector('input[type="color"]');

  if (!textInput.value) return null;

  return {
    name: textInput.value,
    color: colorInput.value,
  };
}

export default getColorAndNameCarFromInputs;
