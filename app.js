const { checkAndGenerate, createElement } = require('./util');

const initApp = () => {
  // Initializes the app, registers the button click listener
  const newItemButton = document.querySelector('#btnAddItem');
  newItemButton.addEventListener('click', addItem);
};

const addItem = () => {
  // Fetches the user input, creates a new HTML element based on it
  // and appends the element to the DOM
  const newItemNameInput = document.querySelector('input#name');
  const newItemQtdInput = document.querySelector('input#qtd');

  const outputText = checkAndGenerate(
    newItemNameInput.value,
    newItemQtdInput.value
  );

  if (!outputText) {
    return;
  }

  const itemList = document.querySelector('.items-list');

  const element = createElement('li', outputText, 'item-list');
  itemList.appendChild(element);
};

// Start the app!
initApp();
