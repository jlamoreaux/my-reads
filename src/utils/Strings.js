export const slugify = (str) => {
  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

export const splitWord = (str) => {
  return str
    .split(/(?=[A-Z])/)
    .join(' ')
    .toLowerCase();
}