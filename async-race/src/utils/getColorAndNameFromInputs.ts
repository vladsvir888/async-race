import { ICarInput } from '../types';

function getColorAndNameFromInputs(button: HTMLButtonElement): ICarInput | null {
  const parent = <HTMLElement>button.parentElement;
  const textInput = <HTMLInputElement>parent.querySelector('input[type="text"]');
  const colorInput = <HTMLInputElement>parent.querySelector('input[type="color"]');

  if (!textInput.value) return null;

  return {
    name: textInput.value,
    color: colorInput.value,
  };
}

export default getColorAndNameFromInputs;
