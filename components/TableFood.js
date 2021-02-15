import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DataContext} from '../data/DataContext';

const TableFood = () => {
  const {calculated} = useContext(DataContext);
  return (
    <View style={styles.view}>
      <View style={styles.foodItem}>
        <Text style={styles.text}>Valor Energético </Text>
        <Text style={styles.text}>{calculated.cal.toFixed(1)}kcal = kJ</Text>
      </View>

      <View style={styles.foodItem}>
        <Text style={styles.text}>Carboidratos</Text>
        <Text style={styles.text}> {calculated.carboidratos.toFixed(1)}g</Text>
      </View>

      <View style={styles.foodItem}>
        <Text style={styles.text}>Proteínas</Text>
        <Text style={styles.text}> {calculated.proteinas.toFixed(1)}g</Text>
      </View>

      <View style={styles.foodItem}>
        <Text style={styles.text}>Gorduras totais</Text>
        <Text style={styles.text}> {calculated.gTotais.toFixed(1)}g</Text>
      </View>

      <View style={styles.foodItem}>
        <Text style={styles.text}>Gorduras saturadas</Text>
        <Text style={styles.text}> {calculated.gSaturadas.toFixed(1)}g</Text>
      </View>

      <View style={styles.foodItem}>
        <Text style={styles.text}>Gorduras trans</Text>
        <Text style={styles.text}>{calculated.gTrans.toFixed(1)}g</Text>
      </View>

      <View style={styles.foodItem}>
        <Text style={styles.text}>Colesterol</Text>
        <Text style={styles.text}>{calculated.colesterol.toFixed(1)}mg</Text>
      </View>

      <View style={styles.foodItem}>
        <Text style={styles.text}>Fibra alimentar</Text>
        <Text style={styles.text}>{calculated.fibra.toFixed(1)}g</Text>
      </View>

      <View style={styles.foodItem}>
        <Text style={styles.text}>Sódio</Text>
        <Text style={styles.text}>{calculated.sodio.toFixed(1)}mg</Text>
      </View>

      <View style={styles.foodItem}>
        <Text style={styles.text}>Ferro</Text>
        <Text style={styles.text}>{calculated.ferro.toFixed(1)}mg</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 10,
  },

  viewHeader: {
    justifyContent: 'center',
    marginBottom: 20,
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
});

export default TableFood;
