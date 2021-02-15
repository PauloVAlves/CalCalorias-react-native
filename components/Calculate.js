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
  let totalCalories = 0;
  let totalRecipeCalories = 0;
  let setCaloriesPortion = 0;
  let totalCarboidratos = 0;
  let totalProteins = 0;
  let totalGTotais = 0;
  let totalGSaturadas = 0;
  let totalGTrans = 0;
  let totalColesterol = 0;
  let totalFibra = 0;
  let totalSodio = 0;
  let totalFerro = 0;

  const openModal = () => {
    setModalVisible(true);
  };

  const modalEvent = () => {
    setModalVisible(!modalVisible);
  };

  const calculate = () => {
    if (myList.length < 1) {
      Alert.alert('Adicione alimentos à receita');
    } else if (!portion) {
      Alert.alert('Informe a porção');
    } else {
      myList.forEach((food) => {
        totalGrams += food.quantity;
        getCaloriesPortion = food.quantity / food.base;
        setCaloriesPortion = food.cal * getCaloriesPortion;
        totalCalories += setCaloriesPortion;
        totalCarboidratos += food.carboidratos;
        totalProteins += food.proteinas;
        totalGTotais += food.gTotais;
        totalGSaturadas += food.gSaturadas;
        totalGTrans += food.gTrans;
        totalColesterol += food.colesterol;
        totalFibra += food.fibra;
        totalSodio += food.sodio;
        totalFerro += food.ferro;
        totalRecipeCalories += setCaloriesPortion;
      });

      let div = totalGrams / portion;
      let calculatedCalories = totalCalories / div;

      openModal();

      let calculatedCarbs = totalCarboidratos / div;
      let calculatedProteins = totalProteins / div;
      let calculatedGTotals = totalGTotais / div;
      let calculatedGSat = totalGSaturadas / div;
      let calculatedTrans = totalGTrans / div;
      let calculatedCol = totalColesterol / div;
      let calculatedFiber = totalFibra / div;
      let calculatedSodium = totalSodio / div;
      let calculatedIron = totalFerro / div;

      setCalculated({
        id: 1,
        cal: calculatedCalories,
        carboidratos: calculatedCarbs,
        proteinas: calculatedProteins,
        gTotais: calculatedGTotals,
        gSaturadas: calculatedGSat,
        gTrans: calculatedTrans,
        colesterol: calculatedCol,
        fibra: calculatedFiber,
        sodio: calculatedSodium,
        ferro: calculatedIron,
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
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },

  btnText: {
    color: '#3311cc',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Calculate;
