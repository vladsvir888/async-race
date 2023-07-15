import { ENDPOINT_GARAGE } from '../constants';
import renderGarage from '../ui/renderGarage';

async function createCar(car) {
  await fetch(ENDPOINT_GARAGE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  });

  renderGarage();
}

export default createCar;
