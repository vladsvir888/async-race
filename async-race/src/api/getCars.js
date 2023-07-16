import { ENDPOINT_GARAGE } from '../data';

async function getCars(paramsString) {
  const response = await fetch(`${ENDPOINT_GARAGE}?${paramsString}`);
  const result = await response.json();
  const totalItems = Number(response.headers.get('x-total-count'));

  return { result, totalItems };
}

export default getCars;
