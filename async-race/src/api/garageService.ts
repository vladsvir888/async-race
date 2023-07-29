import { ENDPOINT_GARAGE } from '../data';
import { ICarInput, ICarOutput } from '../types';

class GarageService {
  public static async createCar(car: ICarInput): Promise<void> {
    await fetch(ENDPOINT_GARAGE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });
  }

  public static async deleteCar(id: number | string): Promise<void> {
    await fetch(`${ENDPOINT_GARAGE}/${id}`, {
      method: 'DELETE',
    });
  }

  public static async getCar(id: number | string): Promise<ICarOutput> {
    const response = await fetch(`${ENDPOINT_GARAGE}/${id}`, {
      method: 'GET',
    });
    const result = await response.json();

    return result;
  }

  public static async getCars(paramsString: string): Promise<{
    result: ICarOutput[],
    totalItems: number
  }> {
    const response = await fetch(`${ENDPOINT_GARAGE}?${paramsString}`);
    const result = await response.json();
    const totalItems = Number(response.headers.get('x-total-count'));

    return { result, totalItems };
  }

  public static async updateCar(id: number | string, car: ICarInput): Promise<void> {
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
