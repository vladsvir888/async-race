import { ENDPOINT_ENGINE } from '../data';
import { IEngineInfo } from '../types';

class EngineService {
  public static async switchCarEngine(id: string, status: string): Promise<IEngineInfo> {
    const paramsString = new URLSearchParams({
      id,
      status,
    }).toString();
    const response = await fetch(`${ENDPOINT_ENGINE}?${paramsString}`, {
      method: 'PATCH',
    });
    const result = await response.json();

    return result;
  }
}

export default EngineService;
