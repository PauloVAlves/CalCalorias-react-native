import React, {useState} from 'react';
import {useContext} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {DataContext} from '../data/DataContext';
import ModalResult from './ModalResult';

const Calculate = () => {
  const {recipe, setCalculated} = useContext(DataContext);
  const [portion, setPortion] = useState(0);
  const [finalResult, setFinalResult] = useState(0);
  const [recipeTotalCalories, setRecipeTotalCalories] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const base = 100;

  const openModal = () => {
    setModalVisible(true);
  };

  const modalEvent = () => {
    setModalVisible(!modalVisible);
  };

  const calculateTotalGrams = (recipe, portion) => {
    let totalGrams = 0;
    recipe.map((food) => (totalGrams += food.quantity / portion));
    return totalGrams;
  };

  const totalGrams = calculateTotalGrams(recipe, portion);

  const calculateCarbohydrate = (recipe, totalGrams) => {
    let totalCarbohydrate = 0;
    recipe.map((food) => (totalCarbohydrate += food.carbohydrate / totalGrams));
    return totalCarbohydrate;
  };

  const calculateProtein = (recipe, totalGrams) => {
    let totalProtein = 0;
    recipe.map((food) => (totalProtein += food.protein / totalGrams));
    return totalProtein;
  };

  const calculateSaturatedFat = (recipe, totalGrams) => {
    let totalSaturated = 0;
    recipe.map((food) => (totalSaturated += food.saturated / totalGrams));
    return totalSaturated;
  };

  const calculateTotalFats = (recipe, totalGrams) => {
    let totalFats = 0;
    recipe.map(
      (food) =>
        (totalFats +=
          (food.saturated + food.monounsaturated + food.polyunsaturated) /
          totalGrams),
    );
    return totalFats;
  };

  const calculateCholesterol = (recipe, totalGrams) => {
    let totalCholesterol = 0;
    recipe.map((food) => (totalCholesterol += food.cholesterol / totalGrams));
    return totalCholesterol;
  };

  const calculateFiber = (recipe, totalGrams) => {
    let totalFiber = 0;
    recipe.map((food) => (totalFiber += food.fiber / totalGrams));
    return totalFiber;
  };

  const calculateSodium = (recipe, totalGrams) => {
    let totalSodium = 0;
    recipe.map((food) => (totalSodium += food.sodium / totalGrams));
    return totalSodium;
  };

  const caloriesPortion = (recipe) => {
    let quantityPortion = 0;
    let caloriesPortion = 0;
    recipe.map(
      (food) => (
        (quantityPortion = food.quantity / base),
        (caloriesPortion = food.kcal * quantityPortion)
      ),
    );
    setRecipeTotalCalories(caloriesPortion);
    return caloriesPortion;
  };

  const calculateCalories = (caloriesPortion, recipe, totalGrams) => {
    let totalCalories = 0;
    recipe.map((food) => (totalCalories += caloriesPortion / totalGrams));
    setFinalResult(totalCalories);
    return totalCalories;
  };

  const calculateJoules = (calories) => {
    return calories * 4.184;
  };

  const calculate = () => {
    if (recipe.length < 1) {
      Alert.alert('Adicione alimentos à receita');
    } else if (!portion) {
      Alert.alert('Informe a porção');
    } else {
      const calories_portion = caloriesPortion(recipe);
      const carbohydrate = calculateCarbohydrate(recipe, totalGrams);
      const protein = calculateProtein(recipe, totalGrams);
      const saturated = calculateSaturatedFat(recipe, totalGrams);
      const total_fats = calculateTotalFats(recipe, totalGrams);
      const cholesterol = calculateCholesterol(recipe, totalGrams);
      const fiber = calculateFiber(recipe, totalGrams);
      const sodium = calculateSodium(recipe, totalGrams);
      const calories = calculateCalories(calories_portion, recipe, totalGrams);
      const joules = calculateJoules(calories);

      openModal();

      setCalculated({
        kcal: calories,
        kj: joules,
        protein: protein,
        cholesterol: cholesterol,
        carbohydrate: carbohydrate,
        fiber: fiber,
        sodium: sodium,
        total_fats: total_fats,
        saturated: saturated,
        trans: 0,
        portion: portion,
      });
    }
  };
  return (
    <View>
      <TextInput
        keyboardType="number-pad"
        placeholder="Informe a porção em gramas"
        style={styles.input}
        onChangeText={(text) => setPortion(text)}
      />
      <TouchableOpacity style={styles.btn} onPress={() => calculate()}>
        <Text style={styles.btnText}>
          <Icon name="calculator" size={20} /> Calcular
        </Text>
      </TouchableOpacity>

      <ModalResult
        finalResult={finalResult}
        recipeTotalCalories={recipeTotalCalories}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        modalEvent={modalEvent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    height: 60,
    padding: 8,
    fontSize: 22,
  },

  btn: {
    backgroundColor: 'rgb(1, 97, 232)',
    padding: 9,
    margin: 5,
  },

  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Calculate;
