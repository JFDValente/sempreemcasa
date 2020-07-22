export const widths = {
  slim: 375,
  narrow: 768,
  base: 1024,
  fluid: '100%',
};

const get = (size = 'base') => {
  if (size === 'fluid') return widths.fluid;
  return `${widths[size] || widths.base}px`;
};

export default {
  get,
};
