export const idGen = (): number => {
  let id = Math.floor(Math.random() * 10000 * (Math.random() * 100000));
  return id;
};
