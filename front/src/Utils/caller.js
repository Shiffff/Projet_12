import mockData from "./mockData";
import { fetchData, fetchStatsData } from "./Utils";

class Caller {
  static async userStats(id) {
    if (process.env.REACT_APP_ONPROD === "true") {
      return fetch(`${process.env.REACT_APP_API_URL}user/${id}`)
        .then((response) => response.json())
        .catch((error) => console.error(error));
    } else {
      const item = fetchData(id, mockData.USER_MAIN_DATA);
      const data = { data: item };
      return data;
    }
  }
  static async userActivity(id) {
    if (process.env.REACT_APP_ONPROD === "true") {
      return fetch(`${process.env.REACT_APP_API_URL}user/${id}/activity`)
        .then((response) => response.json())
        .catch((error) => console.error(error));
    } else {
      const item = fetchStatsData(id, mockData.USER_ACTIVITY);
      const data = { data: item };
      return data;
    }
  }
  static async userAverage(id) {
    if (process.env.REACT_APP_ONPROD === "true") {
      return fetch(
        `${process.env.REACT_APP_API_URL}user/${id}/average-sessions`
      )
        .then((response) => response.json())
        .catch((error) => console.error(error));
    } else {
      const item = fetchStatsData(id, mockData.USER_AVERAGE_SESSIONS);
      const data = { data: item };
      return data;
    }
  }
  static async userPerformance(id) {
    if (process.env.REACT_APP_ONPROD === "true") {
      return fetch(`${process.env.REACT_APP_API_URL}user/${id}/performance`)
        .then((response) => response.json())
        .catch((error) => console.error(error));
    } else {
      const item = fetchStatsData(id, mockData.USER_PERFORMANCE);
      const data = { data: item };
      return data;
    }
  }
}

export default Caller;
