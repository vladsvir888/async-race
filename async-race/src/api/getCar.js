import { ENDPOINT_GARAGE } from '../data';

async function getCar(id) {
  const response = await fetch(`${ENDPOINT_GARAGE}/${id}`, {
    method: 'GET',
  });
  const result = await response.json();

  return result;
}

export default getCar;
