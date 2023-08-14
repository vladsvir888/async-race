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
  idCar: 1,
};
const KEY_LS = 'type_view_async_race_vs';
const carModels = ['Camry', 'Corolla', 'Civic', 'Mustang', 'Accord', 'Wrangler', 'Tacoma', 'Model A', 'Escalade', 'Malibu', 'RAV4', 'Tundra', 'Sonata', 'A4', 'Ranger', 'Optima', 'S6', 'Q5', 'RX', 'Supra', 'Jetta', 'GT', 'Sentra', 'Fusion', 'Vanagon', 'Escape', 'Altima', 'CX-5', 'Outback', 'Accord', 'Crosstrek', 'Rogue'];
const carBrands = ['Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley Motors', 'Bugatti', 'Cadillac', 'Chevrolet', 'Dodge', 'Daewoo', 'Ferrari', 'Fiat', 'Honda', 'Hyundai', 'Jaguar', 'Jeep', 'Kia', 'Lexus', 'Land Rover', 'Lotus', 'Mazda', 'Maybach', 'Maserati', 'Mitsubishi', 'Nissan', 'Pontiac', 'Saab', 'Subaru', 'Volkswagen', 'Renault', 'Rover', 'Škoda'];

export {
  ENDPOINT_GARAGE,
  ENDPOINT_WINNERS,
  store,
  KEY_LS,
  ENDPOINT_ENGINE,
  carModels,
  carBrands,
};
