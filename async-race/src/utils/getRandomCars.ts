import { ICarInput } from '../types';

function pickRandomEntry(entries: string[]): string {
  return entries[Math.floor(Math.random() * entries.length)];
}

function pickRandomColor(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getRandomCars(): ICarInput[] {
  const brands = ['Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley Motors', 'Bugatti', 'Cadillac', 'Chevrolet', 'Dodge', 'Daewoo', 'Ferrari', 'Fiat', 'Honda', 'Hyundai', 'Jaguar', 'Jeep', 'Kia', 'Lexus', 'Land Rover', 'Lotus', 'Mazda', 'Maybach', 'Maserati', 'Mitsubishi', 'Nissan', 'Pontiac', 'Saab', 'Subaru', 'Volkswagen', 'Renault', 'Rover', 'Škoda'];
  const models = ['Camry', 'Corolla', 'Civic', 'Mustang', 'Accord', 'Wrangler', 'Tacoma', 'Model A', 'Escalade', 'Malibu', 'RAV4', 'Tundra', 'Sonata', 'A4', 'Ranger', 'Optima', 'S6', 'Q5', 'RX', 'Supra', 'Jetta', 'GT', 'Sentra', 'Fusion', 'Vanagon', 'Escape', 'Altima', 'CX-5', 'Outback', 'Accord', 'Crosstrek', 'Rogue'];

  return [...new Array(100)].map(() => ({
    name: `${pickRandomEntry(brands)} ${pickRandomEntry(models)}`,
    color: pickRandomColor(),
  }));
}

export default getRandomCars;
