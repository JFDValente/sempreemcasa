const breakpoints = {
  sm: 375,
  md: 768,
  lg: 1024,
};

const unit = 'px';

function up(key) {
  const value = typeof key === 'number' ? key : breakpoints[key];
  return `@media (min-width: ${value}${unit})`;
}

export default {
  up,
};
