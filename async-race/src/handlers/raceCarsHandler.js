import EngineService from '../api/engineService';
import WinnersService from '../api/winnersService';
import renderWinners from '../ui/renderWinners';
import showMessage from '../utils/showMessage';

function removeAlert() {
  setTimeout(() => {
    const alert = document.querySelector('.alert');

    if (alert) {
      alert.remove();
    }
  }, 5000);
}

async function setWinner(id, time) {
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

function raceCarsHandler() {
  document.addEventListener('click', async (event) => {
    const { target } = event;

    if (!target.classList.contains('js-race-cars-button')) return;

    const items = [...document.querySelectorAll('.garage__item')];
    const promise = items.map((item) => EngineService.switchCarEngine(item.dataset.id, 'started'));
    const result = await Promise.all(promise);
    let isSuccess = false;

    result.forEach(async (item, index) => {
      const currentElement = items[index];
      const { id } = currentElement.dataset;
      const time = Math.round(item.distance / item.velocity);
      const car = currentElement.querySelector('.garage__car');
      const carWidth = car.getBoundingClientRect().width;
      const parentWidth = currentElement.getBoundingClientRect().width;
      const startButton = currentElement.querySelector('.js-start-button');
      const title = currentElement.querySelector('.garage__title');
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
        await EngineService.switchCarEngine(items[index].dataset.id, 'drive');

        if (isSuccess) return;

        const animationTime = Number((animation.currentTime / 1000).toFixed(2));

        showMessage(`Winner - ${titleText}, time - ${animationTime}sec.`);

        setWinner(id, animationTime);

        isSuccess = true;
      } catch (error) {
        animation.pause();
      } finally {
        startButton.disabled = false;
      }

      removeAlert();
    });
  });
}

export default raceCarsHandler;
