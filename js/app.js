function showKeycode(e) {
  const keycodeDisplay = document.querySelector('.keycode-display');
  const keyDisplay = document.querySelector('.key-display');

  keycodeDisplay.innerHTML = `<b>${e.keyCode}</b>`;

  if (e.keyCode == '32') {
    keyDisplay.innerHTML = `<i>spacebar</i>`;
  } else {
    keyDisplay.innerHTML = `<i>${e.key}</i>`;
  }
}
window.addEventListener('keydown', showKeycode);
