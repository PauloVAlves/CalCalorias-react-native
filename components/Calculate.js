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
import TableFood from './TableFood';

const Calculate = () => {
  const {myList, setCalculated} = useContext(DataContext);
  const [portion, setPortion] = useState(0);
  const [finalResult, setFinalResult] = useState(0);
  const [recipeTotalCalories, setRecipeTotalCalories] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  let totalGrams = 0;
  let getCaloriesPortion = 0;
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
  const openModal = () => {
    setModalVisible(true);
  };

  const modalEvent = () => {
    setModalVisible(!modalVisible);
  };
  // TODO: Refactor this monster
  const calculate = () => {
    if (myList.length < 1) {
      Alert.alert('Adicione alimentos à receita');
    } else if (!portion) {
      Alert.alert('Informe a porção');
    } else {
      myList.forEach((food) => {
        totalGrams += food.quantity;
        getCaloriesPortion = food.quantity / 100;
        setCaloriesPortion = food.kcal * getCaloriesPortion;
        totalCalories += setCaloriesPortion;
        totalCarboidratos += food.carbohydrate;
        totalProteins += food.protein;
        totalFats +=
          food.saturated + food.monounsaturated + food.polyunsaturated;
        totalSaturated += food.saturated;
        totalCholesterol += food.cholesterol;
        totalFiber += food.fiber;
        totalSodium += food.sodium;
        totalRecipeCalories += setCaloriesPortion;
      });

      let div = totalGrams / portion;
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
