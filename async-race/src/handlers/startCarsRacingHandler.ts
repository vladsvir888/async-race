import EngineService from '../api/engineService';
import WinnersService from '../api/winnersService';
import { IEngineInfo } from '../types';
import renderWinners from '../ui/renderWinners';
import showMessage from '../utils/showMessage';

async function setWinner(id: string, time: number): Promise<void> {
  const winner = await WinnersService.getWinner(id);

  if (!Object.keys(winner).length) {
    await WinnersService.createWinner({
      id,
      time,
      wins: 1,
    });
  } else {
    await WinnersService.updateWinner(id, {
      wins: winner.wins + 1,
      time: time < winner.time ? time : winner.time,
    });
  }

  renderWinners();
}

function startRace(items: HTMLElement[], result: IEngineInfo[]): void {
  let isRaceFinished = false;

  result.forEach(async (item, index) => {
    const currentElement = items[index];
    const id = <string>currentElement.dataset.id;
    const time = Math.round(item.distance / item.velocity);
    const car = <HTMLElement>currentElement.querySelector('.garage__car');
    const carWidth = car.getBoundingClientRect().width;
    const parentWidth = currentElement.getBoundingClientRect().width;
    const startButton = <HTMLButtonElement>currentElement.querySelector('.js-start-button');
    const title = <HTMLHeadingElement>currentElement.querySelector('.garage__title');
    const titleText = title.textContent;
    const animation = car.animate(
      [
        { transform: 'translateX(0px)' },
        { transform: `translateX(calc(${parentWidth}px - ${carWidth}px))` },
      ],
      {
        duration: time,
        fill: 'forwards',
      },
    );

    startButton.disabled = true;

    try {
      await EngineService.switchCarEngine(id, 'drive');

      if (isRaceFinished) return;

      const animationTime = Number((<number>animation.currentTime / 1000).toFixed(2));

      showMessage(`Winner - ${titleText}, time - ${animationTime}sec.`, true, 5000);

      setWinner(id, animationTime);

      isRaceFinished = true;
    } catch (error) {
      animation.pause();
    } finally {
      startButton.disabled = false;
    }
  });
}

function startCarsRacingHandler(): void {
  document.addEventListener('click', async (event) => {
    const target = <HTMLButtonElement>event.target;

    if (!target.classList.contains('js-race-cars-button')) return;

    const cars = <HTMLElement[]>[...document.querySelectorAll('.garage__item')];
    const engineCharacteristics = await Promise.all(cars.map((car) => EngineService.switchCarEngine(<string>car.dataset.id, 'started')));

    startRace(cars, engineCharacteristics);
  });
}

export default startCarsRacingHandler;
