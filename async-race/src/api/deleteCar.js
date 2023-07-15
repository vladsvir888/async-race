import { ENDPOINT_GARAGE } from '../constants';
import renderGarage from '../ui/renderGarage';

async function deleteCar(id) {
  await fetch(`${ENDPOINT_GARAGE}/${id}`, {
    method: 'DELETE',
  });

  renderGarage();
}

export default deleteCar;
