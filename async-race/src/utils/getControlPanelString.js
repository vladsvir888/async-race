function getControlPanelString() {
  return `
    <div class="control-panel">
      <div class="control-panel__item">
        <input type="text" placeholder="Create a car">
        <input type="color">
        <button class="button button--secondary js-create-button">Create</button>
      </div>
      <div class="control-panel__item">
        <input type="text" placeholder="Update a car" disabled>
        <input type="color" disabled>
        <button class="button button--secondary js-update-button" disabled>Update</button>
      </div>
      <div class="control-panel__item">
        <button class="button button--secondary js-random-generate-button">Generate cars</button>
        <button class="button button--secondary js-race-cars-button">Race</button>
        <button class="button button--secondary js-reset-cars-button">Reset</button>
      </div>
    </div>
  `;
}

export default getControlPanelString;
