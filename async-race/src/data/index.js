const API = 'http://127.0.0.1:3000';
const ENDPOINT_GARAGE = `${API}/garage`;
const store = {
  LIMIT: 7,
  currentPage: 1,
  prevButtonDisabled: true,
  nextButtonDisabled: true,
};

export { ENDPOINT_GARAGE, store };
