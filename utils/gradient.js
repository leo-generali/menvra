const createGradient = (colorArry, deg) => {
  const initialValue = '';

  const reducer = (innerCss, { color, percent }) =>
    `${innerCss} #${color} ${percent}%,`;
  const inner = colorArry.reduce(reducer, initialValue);

  const combined = `linear-gradient(${deg}deg, ${inner.slice(0, -1)})`;
  return combined;
};

export { createGradient };
