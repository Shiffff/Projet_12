const fetchData = (id, array) => {
  const foundItem = array.find((user) => user.id.toString() === id);
  if (foundItem) {
    return foundItem;
  } else {
    return null;
  }
};
const fetchStatsData = (id, array) => {
  const foundItem = array.find((user) => user.userId.toString() === id);
  if (foundItem) {
    return foundItem;
  } else {
    return null;
  }
};

export { fetchData, fetchStatsData };
