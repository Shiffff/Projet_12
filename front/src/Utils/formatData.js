class Formater {
  static barChartFormat(data) {
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

export default Formater;
