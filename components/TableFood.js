import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const TableFood = ({myList}) => {
  let item;
  return(
    <View style={styles.view}>
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>Porção de {item}g</Text>
      </View>
      <View style={styles.foodItem}>
          <Text style={styles.text}>Valor Energético </Text>
          <Text style={styles.text}>{item}kcal = {item}kJ</Text>        
      </View>
      <View style={styles.foodItem}>
        <Text style={styles.text}>Carboidratos</Text>
        <Text style={styles.text}> {item}g</Text>
      </View>      
      <View style={styles.foodItem}>
        <Text style={styles.text}>Proteínas</Text>
        <Text style={styles.text}> {item}g</Text>
      </View>

      <View style={styles.foodItem}>
        <Text style={styles.text}>Gorduras totais</Text>
        <Text style={styles.text}> {item}g</Text>
      </View>

      <View style={styles.foodItem}>
        <Text style={styles.text}>Gorduras saturadas</Text>
        <Text style={styles.text}> {item}g</Text>
      </View>
      
      <View style={styles.foodItem}>
        <Text style={styles.text}>Gorduras trans</Text>
        <Text style={styles.text}>{item}g</Text>
      </View>
  
      <View style={styles.foodItem}>
        <Text style={styles.text}>Colesterol</Text>
        <Text style={styles.text}>{item}mg</Text>
      </View>
  
      <View style={styles.foodItem}>
        <Text style={styles.text}>Fibra alimentar</Text>
        <Text style={styles.text}>{item}g</Text>
      </View>

      <View style={styles.foodItem}>
        <Text style={styles.text}>Sódio</Text>
        <Text style={styles.text}>{item}mg</Text>
      </View>
  
      <View style={styles.foodItem}>
        <Text style={styles.text}>Ferro</Text>
        <Text style={styles.text}>{item}mg</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  view:{
    flex: 1,
    marginTop: 40
  },

  viewHeader:{
    justifyContent: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },

  textHeader:{
    textAlign: 'center',
    fontSize: 22
  },

  text: {
    fontSize: 22,

  },
  
  foodItem:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
})

export default TableFood;