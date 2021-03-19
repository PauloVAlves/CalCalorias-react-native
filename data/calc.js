let arr = [
  {
    id: 1,
    name: 'Arroz, integral, cozido',
    kcal: 123.53,
    quantity: 20,
  },
  {
    id: 2,
    name: 'Arroz, integral, cru',
    kcal: 359.68,
    quantity: 30,
  },
  {
    id: 3,
    name: 'Arroz, tipo 1, cozido',
    kcal: 128.26,
    quantity: 25,
  },
  {
    id: 4,
    name: 'Arroz, tipo 1, cru',
    kcal: 357.79,
    quantity: 23,
  },
];
let portion = 50;

const sum = (total, next) => {
  return total + next;
};

const calculateTotalGrams = (list, portion) => {
  let totalGrams = 0;
  list.map((food) => (totalGrams += food.quantity / portion));

  return totalGrams;
};
const calculateTotalPortion = () => {};

console.log(calculateTotalGrams(arr, portion));

/* let getCaloriesPortion = 0;
let setCaloriesPortion = 0;
let totalCalories = 0;
let totalCarboidratos = 0;
let totalProteins = 0;
let totalFats = 0;
let totalSaturated = 0;
let totalCholesterol = 0;
let totalFiber = 0;
let totalSodium = 0;
let totalRecipeCalories = 0;

// TODO: Refactor this monster
const calculate = () => {
  myList.forEach((food) => {
    getCaloriesPortion = food.quantity / 100;
    setCaloriesPortion = food.kcal * getCaloriesPortion;
    totalCalories += setCaloriesPortion;
    totalCarboidratos += food.carbohydrate;
    totalProteins += food.protein;
    totalFats += food.saturated + food.monounsaturated + food.polyunsaturated;
    totalSaturated += food.saturated;
    totalCholesterol += food.cholesterol;
    totalFiber += food.fiber;
    totalSodium += food.sodium;
    totalRecipeCalories += setCaloriesPortion;
  });

  let calculated_calories = totalCalories / div;
  let calculated_joules = calculated_calories * 4.184;
  let calculated_carbohydrate = totalCarboidratos / div;
  let calculated_protein = totalProteins / div;
  let calculated_fats = totalFats / div;
  let calculated_saturated = totalSaturated / div;
  let calculated_cholesterol = totalCholesterol / div;
  let calculated_fiber = totalFiber / div;
  let calculated_sodium = totalSodium / div;
  setFinalResult(calculated_calories);
  setRecipeTotalCalories(totalRecipeCalories);
  openModal();

  setCalculated({
    kcal: calculated_calories,
    kj: calculated_joules,
    protein: calculated_protein,
    cholesterol: calculated_cholesterol,
    carbohydrate: calculated_carbohydrate,
    fiber: calculated_fiber,
    sodium: calculated_sodium,
    total_fats: calculated_fats,
    saturated: calculated_saturated,
    trans: 0,
    portion: portion,
  });
};
 */
