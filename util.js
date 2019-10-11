const generateText = (name, qtd) => {
  // Returns output text
  return `Produto: ${name} - Quantidade: ${qtd}`;
};

exports.createElement = (type, text, className) => {
  // Creates a new HTML element and returns it
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

const validateInput = (text, notEmpty, isNumber) => {
  // Validate user input with two pre-defined rules
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && +text === NaN) {
    return false;
  }
  return true;
};

exports.checkAndGenerate = (name, qtd) => {
  if (!validateInput(name, true, false) || !validateInput(qtd, false, true)) {
    return false;
  }
  return generateText(name, qtd);
};

exports.generateText = generateText;
exports.validateInput = validateInput;
