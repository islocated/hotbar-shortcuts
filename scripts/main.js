document.addEventListener('keyup', evt => {
  if (evt.key === '[') {
    ui.hotbar.cyclePage(-1);
  } 
  else if (evt.key === ']') {
    ui.hotbar.cyclePage(1);
  }
});
