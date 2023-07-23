import { ENDPOINT_WINNERS } from '../data';

class WinnersService {
  static async getWinners(paramsString) {
    const response = await fetch(`${ENDPOINT_WINNERS}?${paramsString}`);
    const result = await response.json();
    const totalItems = Number(response.headers.get('x-total-count'));

    return { result, totalItems };
  }

  static async deleteWinner(id) {
    await fetch(`${ENDPOINT_WINNERS}/${id}`, {
      method: 'DELETE',
    });
  }

  static async updateWinner(id, car) {
    await fetch(`${ENDPOINT_WINNERS}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });
  }

  static async getWinner(id) {
    const response = await fetch(`${ENDPOINT_WINNERS}/${id}`, {
      method: 'GET',
    });
    const result = await response.json();

    return result;
  }
}

export default WinnersService;
