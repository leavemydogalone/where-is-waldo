const createMapArray = () => {
  const board = [];
  for (let i = 0; i < 100; i += 1) {
    board.push({ id: i });
  }
  return board;
};

export default createMapArray;
