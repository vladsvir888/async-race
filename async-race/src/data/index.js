const API = 'http://127.0.0.1:3000';
const ENDPOINT_GARAGE = `${API}/garage`;
const ENDPOINT_WINNERS = `${API}/winners`;
const ENDPOINT_ENGINE = `${API}/engine`;
const store = {
  LIMIT_GARAGE: 7,
  LIMIT_WINNERS: 10,
  currentPageGarage: 1,
  currentPageWinners: 1,
  sort: 'id',
  order: 'ASC',
  prevButtonDisabledGarage: true,
  nextButtonDisabledGarage: true,
  prevButtonDisabledWinners: true,
  nextButtonDisabledWinners: true,
  carAnimations: [],
};
const KEY_LS = 'type_view_async_race_vs';

export {
  ENDPOINT_GARAGE,
  ENDPOINT_WINNERS,
  store,
  KEY_LS,
  ENDPOINT_ENGINE,
};
