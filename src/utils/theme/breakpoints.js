const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
};

const unit = 'px';

function up(key) {
  const value = typeof key === 'number' ? key : breakpoints[key];
  return `@media (min-width: ${value}${unit})`;
}

export default {
  up,
};
