export const idGen = (): number => {
  let id = Math.floor(Math.random() * 10000 * (Math.random() * 1000));
  return id;
};
