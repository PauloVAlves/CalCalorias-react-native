import React from 'react';
import {View, StyleSheet} from 'react-native';
import FoodItem from './ListItem';

const FoodList = ({foodList}) => {
  return (
    <View>
      {foodList.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </View>
  );
};

export default FoodList;
