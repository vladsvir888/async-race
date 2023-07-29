import { ENDPOINT_WINNERS } from '../data';
import { IWinnerInput, IWinnerOutput } from '../types';

class WinnersService {
  public static async getWinners(paramsString: string): Promise<{
    result: IWinnerOutput[],
    totalItems: number
  }> {
    const response = await fetch(`${ENDPOINT_WINNERS}?${paramsString}`);
    const result = await response.json();
    const totalItems = Number(response.headers.get('x-total-count'));

    return { result, totalItems };
  }

  public static async deleteWinner(id: number | string): Promise<void> {
    await fetch(`${ENDPOINT_WINNERS}/${id}`, {
      method: 'DELETE',
    });
  }

  public static async updateWinner(id: number | string, winner: IWinnerInput): Promise<void> {
    await fetch(`${ENDPOINT_WINNERS}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(winner),
    });
  }

  public static async getWinner(id: number | string): Promise<IWinnerOutput> {
    const response = await fetch(`${ENDPOINT_WINNERS}/${id}`, {
      method: 'GET',
    });
    const result = await response.json();

    return result;
  }

  public static async createWinner(winner: IWinnerOutput): Promise<void> {
    await fetch(ENDPOINT_WINNERS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(winner),
    });
  }
}

export default WinnersService;
