import React, {useContext} from 'react';
import {DataContext} from '../data/DataContext';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const RecipeItem = ({item}) => {
  const {deleteItem} = useContext(DataContext);
  return (
    <View style={styles.item}>
      <View style={styles.recipeView}>
        <Text style={styles.FoodName}>{item.name}</Text>
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
          <Icon name="times" size={30} color="#dd0033" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.quantity}>{item.quantity}g</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RecipeItem: {
    padding: 30,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
  },

  item: {
    padding: 10,
  },

  recipeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },

  FoodName: {
    fontSize: 22,
  },
  quantity: {
    fontSize: 18,
  },
});

export default RecipeItem;
