export const cultureListFormatter = (cultures) => {
  return cultures.map((culture) => ({
    ...culture,
  }));
};
