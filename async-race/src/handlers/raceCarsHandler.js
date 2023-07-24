import EngineService from '../api/engineService';
import showMessage from '../utils/showMessage';

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

        showMessage(`Winner - ${titleText}`);

        isSuccess = true;
      } catch (error) {
        animation.pause();
      } finally {
        startButton.disabled = false;
      }

      setTimeout(() => {
        const alert = document.querySelector('.alert');

        if (alert) {
          alert.remove();
        }
      }, 2000);
    });
  });
}

export default raceCarsHandler;
