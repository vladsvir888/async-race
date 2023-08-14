import { ICarInput } from '../types';
import { carBrands, carModels } from '../constants';

function pickRandomEntry(entries: string[]): string {
  return entries[Math.floor(Math.random() * entries.length)];
}

function pickRandomColor(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getRandomCars(): ICarInput[] {
  return [...new Array(100)].map(() => ({
    name: `${pickRandomEntry(carBrands)} ${pickRandomEntry(carModels)}`,
    color: pickRandomColor(),
  }));
}

export default getRandomCars;
