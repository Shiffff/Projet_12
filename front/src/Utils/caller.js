const caller = () => {
  return fetch(process.env.REACT_APP_API_URL)
    .then((response) => response.json())
    .catch((error) => console.error(error));
};

export default caller;
