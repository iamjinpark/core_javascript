export function copy(text) {
  return navigator.clipboard.writeText(text);
}

copy().then;
