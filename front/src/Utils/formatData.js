class Formater {
  static barChartFormat(data) {
    if (data) {
      data.forEach((item, index) => {
        item.day = new Date(item.day);
        item.name = (index + 1).toString();
      });
      data.sort((a, b) => a.day - b.day);

      const kilogramValues = data.map((item) => item.kilogram);
      const caloriesValues = data.map((item) => item.calories);

      const maxKilogram = Math.max(...kilogramValues);
      const minKilogram = Math.min(...kilogramValues);
      const maxCalories = Math.max(...caloriesValues);
      const minCalories = Math.min(...caloriesValues);

      data.forEach((item) => {
        item.maxKilogram = maxKilogram;
        item.minKilogram = minKilogram;
        item.maxCalories = maxCalories;
        item.minCalories = minCalories;
      });

      return data;
    }
  }
  static lineChartFormat(data) {
    if (data) {
      const week = ["L", "M", "M", "J", "V", "S", "D"];

      data.forEach((item, index) => {
        item.day = week[index];
      });
      return data;
    }
  }

  static radarchartFormat(data) {
    if (data) {
      data.data.forEach((item, index) => {
        item.kind = data.kind[index + 1];
      });
      const newData = data.data;
      newData.forEach((item, index) => {
        switch (item.kind) {
          case "cardio":
            item.kind = "Cardio";
            break;
          case "energy":
            item.kind = "Énergie";
            break;
          case "endurance":
            item.kind = "Endurance";
            break;
          case "strength":
            item.kind = "Force";
            break;
          case "speed":
            item.kind = "Vitesse";
            break;
          case "intensity":
            item.kind = "Intensité";
            break;
          default:
            break;
        }
      });
      newData.reverse();
      return newData;
    }
  }

  static scoreChartFormat(data) {
    if (data) {
      if (data.todayScore) {
        data.score = data.todayScore;
      }
      const newObj = [{ score: data.score * 100, pie: data.score * 360 + 90 }];
      return newObj;
    }
  }
}

export default Formater;
