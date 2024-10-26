const message = document.getElementById('message');
const keyDisplay = document.querySelector('.key-display');
const keyNameElement = document.querySelector('.key-name');
const keyCodeElement = document.querySelector('.key-code');

document.addEventListener('keydown', function (event) {
  message.style.display = 'none';
  keyDisplay.style.display = 'block';

  const keyName = event.key;
  
  const keyCode = event.keyCode;
  keyNameElement.innerHTML = `You Pressed: <span class="pressKey">${keyName}</span>`;
  keyCodeElement.innerHTML = `<span class="pressKey">${keyCode}</span>`;
});
