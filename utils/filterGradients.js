const filterGradients = (haystack, arr) => {
  if (haystack.length === 0) return true;
  return arr.some((v) => haystack.includes(v));
};

export default filterGradients;
