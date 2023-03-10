export const idGen = (): number => {
  let id = Math.floor(Math.random() * 1000 * (Math.random() * 100000));
  return id;
};
