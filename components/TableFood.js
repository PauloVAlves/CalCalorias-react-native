import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DataContext} from '../data/DataContext';

const TableFood = () => {
  const {calculated} = useContext(DataContext);
  return (
    <View style={styles.view}>
      <View style={styles.portion}>
        <Text style={styles.portionText}>Porção </Text>
        <Text style={styles.portionText}>{calculated.portion}g</Text>
      </View>
      <View style={styles.foodItem}>
        <Text style={styles.text}>Valor Energético </Text>
        <View>
          <Text style={styles.text}>{calculated.kcal.toFixed(1)}kcal</Text>
          <Text style={styles.text}>{calculated.kj.toFixed(1)}kJ</Text>
        </View>
      </View>
      <View style={styles.foodItem}>
        <Text style={styles.text}>Carboidratos</Text>
        <Text style={styles.text}> {calculated.carbohydrate.toFixed(1)}g</Text>
      </View>

      <View style={styles.foodItem}>
        <Text style={styles.text}>Proteínas</Text>
        <Text style={styles.text}> {calculated.protein.toFixed(1)}g</Text>
      </View>

      <View style={styles.foodItem}>
        <Text style={styles.text}>Gorduras totais</Text>
        <Text style={styles.text}> {calculated.total_fats.toFixed(1)}g</Text>
      </View>

      <View style={styles.foodItem}>
        <Text style={styles.text}>Gorduras saturadas</Text>
        <Text style={styles.text}> {calculated.saturated.toFixed(1)}g</Text>
      </View>

      <View style={styles.foodItem}>
        <Text style={styles.text}>Gorduras trans</Text>
        <Text style={styles.text}>{calculated.trans.toFixed(1)}g</Text>
      </View>

      <View style={styles.foodItem}>
        <Text style={styles.text}>Colesterol</Text>
        <Text style={styles.text}>{calculated.cholesterol.toFixed(1)}mg</Text>
      </View>

      <View style={styles.foodItem}>
        <Text style={styles.text}>Fibra alimentar</Text>
        <Text style={styles.text}>{calculated.fiber.toFixed(1)}g</Text>
      </View>

      <View style={styles.foodItem}>
        <Text style={styles.text}>Sódio</Text>
        <Text style={styles.text}>{calculated.sodium.toFixed(1)}mg</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 30,
  },

  viewHeader: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  textHeader: {
    textAlign: 'center',
    fontSize: 22,
  },

  text: {
    fontSize: 22,
  },

  foodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  portion: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },

  portionText: {
    fontSize: 22,
  },
});

export default TableFood;
