export const ToggleBodyClass = (className) => {
  document.body.classList.toggle(className);
};

export const AdjustFontSize = (operation) => {
  const txt = document.documentElement;

  const style = window
    .getComputedStyle(txt, null)
    .getPropertyValue('font-size');

  const currentSize = parseFloat(style);
  console.log(currentSize);

  if (operation === 'add') {
    txt.style.fontSize = currentSize + 1 + 'px';
  } else {
    txt.style.fontSize = currentSize - 1 + 'px';
  }
};

export const ResetFontSize = () => {
  document.documentElement.style.fontSize = '10px';
};
