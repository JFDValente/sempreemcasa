function generateArrayList(count, formatter) {
  return Array(count).fill(null).map(formatter);
}

export {
  generateArrayList,
};
