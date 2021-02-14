import React, {useState} from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import ModalResult from './ModalResult'

const Calculate = ({myList}) => {
  const [portion, setPortion] = useState(0);
  const [finalResult, setFinalResult] = useState(0);
  const [recipeTotalCalories, setRecipeTotalCalories] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  let totalGrams = 0;
  let getCaloriesPortion = 0;
  let totalCalories = 0;
  let totalRecipeCalories = 0;
  let setCaloriesPortion = 0;


  const openModal = () => {
    setModalVisible(true);    
  };

  const modalEvent = () => {
    setModalVisible(!modalVisible);
  };

  const calculate = () => {
    if(myList.length < 1){
      Alert.alert('Adicione alimentos à receita')
    }
    else if(!portion) {
      Alert.alert('Informe a porção')
    } else{

      
      
      myList.forEach((food) => {
        totalGrams += food.quantity;
        getCaloriesPortion = food.quantity / food.base;
        setCaloriesPortion = food.cal * getCaloriesPortion;
        totalCalories += setCaloriesPortion;
        totalRecipeCalories += setCaloriesPortion;
      });
      
      let div = totalGrams / portion;
      let calculatedCalories = totalCalories / div;
      setFinalResult(calculatedCalories);
      setRecipeTotalCalories(totalRecipeCalories);
      openModal()
    }
  };
  return(
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
  )
}

const styles = StyleSheet.create({
  input:{
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
})

export default Calculate;