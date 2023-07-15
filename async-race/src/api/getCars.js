import { ENDPOINT_GARAGE } from '../constants';

async function getCars() {
  const response = await fetch(ENDPOINT_GARAGE);
  const result = await response.json();

  return result;
}

export default getCars;
