import React, {useContext} from 'react';
import {DataContext} from '../data/DataContext';
import {View} from 'react-native';
import ListItem from './ListItem';

const FoodList = () => {
  const {foodList} = useContext(DataContext);
  return (
    <View>
      {foodList.map((food) => (
        <ListItem key={food.id} food={food} />
      ))}
    </View>
  );
};

export default FoodList;
