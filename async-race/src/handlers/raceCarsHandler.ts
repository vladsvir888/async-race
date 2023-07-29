import EngineService from '../api/engineService';
import WinnersService from '../api/winnersService';
import { IEngineInfo } from '../types';
import renderWinners from '../ui/renderWinners';
import showMessage from '../utils/showMessage';

async function setWinner(id: string, time: number): Promise<void> {
  const result = await WinnersService.getWinner(id);

  if (!Object.keys(result).length) {
    const winner = {
      id,
      time,
      wins: 1,
    };

    await WinnersService.createWinner(winner);
  } else {
    const winner = {
      wins: result.wins + 1,
      time: time < result.time ? time : result.time,
    };

    await WinnersService.updateWinner(id, winner);
  }

  renderWinners();
}

function startRace(items: HTMLElement[], result: IEngineInfo[]): void {
  let isSuccess = false;

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

      if (isSuccess) return;

      const animationTime = Number((<number>animation.currentTime / 1000).toFixed(2));

      showMessage(`Winner - ${titleText}, time - ${animationTime}sec.`, true, 5000);

      setWinner(id, animationTime);

      isSuccess = true;
    } catch (error) {
      animation.pause();
    } finally {
      startButton.disabled = false;
    }
  });
}

function raceCarsHandler(): void {
  document.addEventListener('click', async (event) => {
    const target = <HTMLButtonElement>event.target;

    if (!target.classList.contains('js-race-cars-button')) return;

    const items = <HTMLElement[]>[...document.querySelectorAll('.garage__item')];
    const promise = items.map((item) => EngineService.switchCarEngine(<string>item.dataset.id, 'started'));
    const result = await Promise.all(promise);

    startRace(items, result);
  });
}

export default raceCarsHandler;
