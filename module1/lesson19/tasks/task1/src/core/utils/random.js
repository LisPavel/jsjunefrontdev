export const getRandomNumberInRange = (rangeStart, rangeEnd, includeEnd = false) => {
  return Math.floor(
    Math.random() * (rangeEnd - rangeStart + (includeEnd ? 1 : 0)) + rangeStart
  );
};

export const getRandomColor = () => {
  const [r, g, b] = Array.from({ length: 3 }, () =>
    getRandomNumberInRange(0, 255, true)
  );
  return `rgb(${r},${g},${b})`;
};