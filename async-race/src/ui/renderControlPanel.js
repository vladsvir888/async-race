function renderControlPanel() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="control-panel">
      <div class="control-panel__item">
        <button class="button button--primary">To garage</button>
        <button class="button button--primary">To winners</button>
      </div>
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
        <button class="button button--primary">Race</button>
        <button class="button button--primary">Reset</button>
        <button class="button button--secondary">Generate cars</button>
      </div>
    </div>
  `);
}

export default renderControlPanel;
