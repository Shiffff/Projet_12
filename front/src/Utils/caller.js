class Caller {
  static async userStats(id) {
    return fetch(`${process.env.REACT_APP_API_URL}user/${id}`)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }
  static async userActivity(id) {
    return fetch(`${process.env.REACT_APP_API_URL}user/${id}/activity`)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }
  static async userAverage(id) {
    return fetch(`${process.env.REACT_APP_API_URL}user/${id}/average-sessions`)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }
  static async userPerformance(id) {
    return fetch(`${process.env.REACT_APP_API_URL}user/${id}/performance`)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }
}

export default Caller;
