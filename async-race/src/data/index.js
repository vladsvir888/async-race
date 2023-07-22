const API = 'http://127.0.0.1:3000';
const ENDPOINT_GARAGE = `${API}/garage`;
const ENDPOINT_WINNERS = `${API}/winners`;
const store = {
  LIMIT_GARAGE: 7,
  LIMIT_WINNERS: 10,
  currentPageGarage: 1,
  currentPageWinners: 1,
  prevButtonDisabledGarage: true,
  nextButtonDisabledGarage: true,
  prevButtonDisabledWinners: true,
  nextButtonDisabledWinners: true,
};
const KEY_LS = 'type_view_async_race_vs';

export {
  ENDPOINT_GARAGE,
  ENDPOINT_WINNERS,
  store,
  KEY_LS,
};
