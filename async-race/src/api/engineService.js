import { ENDPOINT_ENGINE } from '../data';

class EngineService {
  static async switchCarEngine(id, status) {
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
