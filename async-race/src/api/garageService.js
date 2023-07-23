import { ENDPOINT_GARAGE } from '../data';

class GarageService {
  static async createCar(car) {
    await fetch(ENDPOINT_GARAGE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });
  }

  static async deleteCar(id) {
    await fetch(`${ENDPOINT_GARAGE}/${id}`, {
      method: 'DELETE',
    });
  }

  static async getCar(id) {
    const response = await fetch(`${ENDPOINT_GARAGE}/${id}`, {
      method: 'GET',
    });
    const result = await response.json();

    return result;
  }

  static async getCars(paramsString) {
    const response = await fetch(`${ENDPOINT_GARAGE}?${paramsString}`);
    const result = await response.json();
    const totalItems = Number(response.headers.get('x-total-count'));

    return { result, totalItems };
  }

  static async updateCar(id, car) {
    await fetch(`${ENDPOINT_GARAGE}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });
  }
}

export default GarageService;
