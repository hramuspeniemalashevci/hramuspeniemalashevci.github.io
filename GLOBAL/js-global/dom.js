export function elementCreate(elemType, attrObj, text) {
  const elem = document.createElement(elemType);

  for (const attr in attrObj) {
    elem.setAttribute(attr, attrObj[attr]);
  }

  elem.textContent = text;
  return elem;
}
